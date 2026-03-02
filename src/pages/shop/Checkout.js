import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

const Checkout = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  const [formData, setFormData] = useState({
    ime: "",
    prezime: "",
    email: "",
    adresa: "",
    grad: "",
    postanskiBroj: ""
  });

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const orderDetails = cart
      .map(
        (item) =>
          `${item.title} (${item.quantity} kom) - ${
            item.price * item.quantity
          } €`
      )
      .join("\n");

    const templateParams = {
      from_name: `${formData.ime} ${formData.prezime}`,
      from_email: formData.email,
      message: `
Nova narudžba:

Kupac:
Ime: ${formData.ime}
Prezime: ${formData.prezime}
Email: ${formData.email}
Adresa: ${formData.adresa}
Grad: ${formData.grad}
Poštanski broj: ${formData.postanskiBroj}

Narudžba:
${orderDetails}

Ukupno: ${totalPrice} €
      `
    };

    emailjs
      .send(
        "service_ow0pthg",
        "template_hhj1pow",
        templateParams,
        "woiCIcQsBiWzesjbt"
      )
      .then(() => {
        alert("Narudžba uspješno poslana!");
        localStorage.removeItem("cart");
        navigate("/shop");
      })
      .catch((error) => {
        console.log("EMAIL ERROR:", error);
        alert(JSON.stringify(error));
      });
  };

  if (cart.length === 0) {
    return (
      <div className="container mt-5">
        <h3>Košarica je prazna</h3>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Checkout</h2>

      <div className="row">
        {/* LIJEVA STRANA - PREGLED NARUDŽBE */}
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h4 className="card-title mb-4">Pregled narudžbe</h4>

              {cart.map((item) => (
                <div
                  key={item.id}
                  className="d-flex justify-content-between mb-3 border-bottom pb-2"
                >
                  <div>
                    <strong>{item.title}</strong>
                    <br />
                    <small>Količina: {item.quantity}</small>
                  </div>
                  <div>
                    {item.price * item.quantity} €
                  </div>
                </div>
              ))}

              <hr />

              <h5 className="text-end">
                Ukupno: <strong>{totalPrice} €</strong>
              </h5>
            </div>
          </div>
        </div>

        {/* DESNA STRANA - FORMA */}
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h4 className="card-title mb-4">Podaci za dostavu</h4>

              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Ime</label>
                    <input
                      type="text"
                      className="form-control"
                      name="ime"
                      value={formData.ime}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Prezime</label>
                    <input
                      type="text"
                      className="form-control"
                      name="prezime"
                      value={formData.prezime}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Adresa</label>
                  <input
                    type="text"
                    className="form-control"
                    name="adresa"
                    value={formData.adresa}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Grad</label>
                    <input
                      type="text"
                      className="form-control"
                      name="grad"
                      value={formData.grad}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Poštanski broj</label>
                    <input
                      type="text"
                      className="form-control"
                      name="postanskiBroj"
                      value={formData.postanskiBroj}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <button type="submit" className="btn btn-success w-100 mt-3">
                  Potvrdi narudžbu
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;