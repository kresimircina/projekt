//import Korisnik from "./data/korisnik.json"

//Funkcija za prikaz korisnika
const Profil = () => {
    //ovo je Javascript objekt
    const KorisnikObjekt = {
        "ime" : "Krešimir", //string
        "prezime" : "Rušnov",//string
        "godine" : 41, //number
        "vozacka" : true, // boolean
        "vjestine" : [//array, niz
            "HTML", 
            "CSS", 
            "Javascript", 
            "React"
        ],
        "adresa" : { //objekt
            "ulica" : "Sotinačka 31",
            "grad" : "Berak",
            "pbroj" : 32242,
            "drzava": {
                "naziv" : "Hrvatska",
                "oznaka" : "HR",
                "valuta" : "EUR"
            }
        }
    }


    //ovo je JSON format,tekstualni (string) oblik

    const KorisnikJSON = '{"ime" : "Krešimir", "prezime" : "Rušnov", "godine" : 41, "vozacka" : true, "vjestine" : [ "HTML", "CSS", "Javascript", "React" ], "adresa" : { "ulica" : "Sotinačka 31", "grad" : "Berak", "pbroj" : 32242}}'
        //pomoću JSON.parse() ga pretvara u Javascript objekt
    const Korisnik = JSON.parse(KorisnikJSON);
        
   

    
    
    //Ova komponenta vraća informacije o korisniku
    return (
        <div className="container">

            {KorisnikObjekt.adresa.drzava.valuta}
            
            <h1>Profil korisnika</h1>
            <p>Ime: {Korisnik.ime}</p>
            <p>Prezime: {Korisnik.prezime}</p>
            <p>Godine: {Korisnik.godine}</p>
            <p>Ulica: {Korisnik.adresa.ulica}</p>
            <p>Grad: {Korisnik.adresa.grad}</p>
            <p>Poštanski broj: {Korisnik.adresa.pbroj}</p>
            <div>
                Vještine:
                <ul>


                    {

                        //Map koristimo za prolazak kroz niz (i ispisivanje vrijednosti, u ovom slučaju)
                        Korisnik.vjestine.map (
                            (vjestina, index) => (

                                <li>{index+1}. {vjestina}</li>

                            )
                        )
                    
                    }

                </ul>
            </div>
            
        </div>
    )

};

export default Profil;