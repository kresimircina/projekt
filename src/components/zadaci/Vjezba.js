import vjezba from "./data/vjezba"

const Vjezba = () => {

    return (

        <div>
            {
                vjezba.map(
                    (vjezba) =>
                    <>
                    <h1>{vjezba.title}</h1>
                    <p>{vjezba.body}</p>
                    </>
                )
            }
        </div>
    )
}























export default Vjezba;