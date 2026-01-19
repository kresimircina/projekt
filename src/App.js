
import { BrowserRouter, Routes, Route } from "react-router";
import './App.css';
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from './pages/Home';
import Blog from './pages/Blog';
import Blogsingle from "./pages/Blogsingle";
import Products from "./pages/Products";

import Profil from "./components/zadaci/Profil";
import Korisnici from "./components/zadaci/Korisnici"

function App() {
  return (
    <>
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogsingle" element={<Blogsingle />} />



        <Route path="/profil" element={<Profil />} />
        <Route path="/korisnici" element={<Korisnici />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
