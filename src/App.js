import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DarkMode from "./components/DarkMode";
import ScrollTop from "./components/ScrollTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Activities from "./pages/Activities";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Destinations from "./pages/Destinations";
import Food from "./pages/Food";
import Gallery from "./pages/Gallery";
import Hotels from "./pages/Hotels";
import Landmarks from "./pages/Landmarks";
import Offers from "./pages/Offers";

function App() {
  return (
    <BrowserRouter>
      <DarkMode />
      <Navbar />
      <ScrollTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/food" element={<Food />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/landmarks" element={<Landmarks />} />
        <Route path="/offers" element={<Offers />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;