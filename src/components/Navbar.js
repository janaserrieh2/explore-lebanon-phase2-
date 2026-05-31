import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Explore Lebanon</h2>

      <div className="nav-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/landmarks">Landmarks</NavLink>
        <NavLink to="/activities">Activities</NavLink>
        <NavLink to="/food">Food</NavLink>
        <NavLink to="/hotels">Hotels</NavLink>
        <NavLink to="/offers">Offers</NavLink>
        <NavLink to="/gallery">Gallery</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>

  
    </nav>
  );
}

export default Navbar;