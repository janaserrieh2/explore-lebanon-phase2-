import { useState, useEffect } from "react";

const places = [
  {
    name: "Byblos",
    desc: "One of the oldest continuously inhabited cities in the world.",
    img: "https://images.pexels.com/photos/11187256/pexels-photo-11187256.jpeg"
  },
  {
    name: "Baalbek",
    desc: "Ancient Roman temples and UNESCO heritage site.",
    img: "https://images.pexels.com/photos/32488823/pexels-photo-32488823.jpeg"
  },
  {
    name: "Faraya",
    desc: "Famous ski resort in Lebanon.",
    img: "https://images.pexels.com/photos/20091365/pexels-photo-20091365.jpeg"
  },
  {
    name: "Beirut",
    desc: "Capital city full of culture, nightlife, and history.",
    img: "https://images.pexels.com/photos/14368431/pexels-photo-14368431.jpeg"
  }
];

function Destinations() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const filtered = places.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const toggleFav = (name) => {
    setFavorites((prev) =>
      prev.includes(name)
        ? prev.filter((f) => f !== name)
        : [...prev, name]
    );
  };

  if (loading) {
    return <div className="container title">Loading...</div>;
  }

  return (
    <section className="container">
      <h1 className="title">Destinations</h1>

      <input
        className="search"
        placeholder="Search destinations..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid">
        {filtered.length > 0 ? (
          filtered.map((p) => (
            <div className="card" key={p.name}>
              <img src={p.img} alt={p.name} />

              <div className="card-content">
                <h3>{p.name}</h3>
                <p>{p.desc}</p>

                <button className="btn" onClick={() => toggleFav(p.name)}>
                  {favorites.includes(p.name)
                    ? "💔 Remove Favorite"
                    : "❤️ Add Favorite"}
                </button>
              </div>
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center" }}>No destinations found.</p>
        )}
      </div>
    </section>
  );
}

export default Destinations;