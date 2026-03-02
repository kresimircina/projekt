import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const updateCart = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    updateCart(updatedCart);
  };

  const changeQuantity = (id, amount) => {
    const updatedCart = cart.map(item => {
      if (item.id === id) {
        const newQuantity = item.quantity + amount;
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
      }
      return item;
    });
    updateCart(updatedCart);
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="container mt-5">
        <h2>Košarica je prazna</h2>
        <button
          className="btn btn-primary mt-3"
          onClick={() => navigate("/shop")}
        >
          Nastavi kupovinu
        </button>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2>Pregled košarice</h2>

      <table className="table mt-4">
        <thead>
          <tr>
            <th>Proizvod</th>
            <th>Cijena</th>
            <th>Količina</th>
            <th>Ukupno</th>
            <th>Akcija</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(item => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.price} €</td>
              <td>
                <button
                  className="btn btn-sm btn-secondary me-2"
                  onClick={() => changeQuantity(item.id, -1)}
                >
                  -
                </button>
                {item.quantity}
                <button
                  className="btn btn-sm btn-secondary ms-2"
                  onClick={() => changeQuantity(item.id, 1)}
                >
                  +
                </button>
              </td>
              <td>{item.price * item.quantity} €</td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeFromCart(item.id)}
                >
                  Obriši
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h4 className="text-end">Ukupno: {totalPrice} €</h4>

      <div className="d-flex justify-content-between mt-4">
        <button
          className="btn btn-outline-primary"
          onClick={() => navigate("/shop")}
        >
          Nastavi kupovinu
        </button>

        <button
          className="btn btn-success"
          onClick={() => navigate("/checkout")}
        >
          Naruči
        </button>
      </div>
    </div>
  );
};

export default Cart;