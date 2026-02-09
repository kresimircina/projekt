
import { BrowserRouter, Routes, Route } from "react-router";
import './Gutenberg.css';
import './App.css';
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from './pages/Home';
import Blog from './pages/Blog';
import Kontakt from './pages/Kontakt';
import Usluge from './pages/Usluge';
import Uslugesingle from "./pages/Uslugesingle";  
import Onama from './pages/Onama';
import BlogSingle from "./pages/BlogSingle";
import Products from "./pages/Products";
import Kategorije from "./pages/Kategorije";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";

import Profil from "./components/zadaci/Profil";
import Korisnici from "./components/zadaci/Korisnici"
import Vjezba from "./components/zadaci/Vjezba"
import Tecaj from "./components/zadaci/Tecaj"

function App() {
  return (
    <>
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/usluge" element={<Usluge />} />
        <Route path="/usluga/:slug" element={<Uslugesingle />} />
        <Route path="/o-nama" element={<Onama />} />
        <Route path="/blog/:slug" element={<BlogSingle />} />
        <Route path="/kategorije" element={<Kategorije />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Register />} />





        <Route path="/profil" element={<Profil />} />
        <Route path="/korisnici"element={<Korisnici />} /> 
        <Route path="/vjezba"element={<Vjezba />} />
        <Route path="/tecaj"element={<Tecaj />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
