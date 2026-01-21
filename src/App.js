
import { BrowserRouter, Routes, Route } from "react-router";
import './App.css';
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogSingle from "./pages/BlogSingle";
import Products from "./pages/Products";

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
        <Route path="/blogsingle" element={<BlogSingle />} />



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
