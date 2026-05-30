function Offers() {
  const offers = [
    {
      title: "Beach Escape",
      desc: "Luxury stay on the Mediterranean coast.",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      tag: "Relax"
    },
    {
      title: "Mountain Retreat",
      desc: "Relax in Lebanon mountains with fresh air.",
      img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      tag: "Nature"
    },
    {
      title: "City Experience",
      desc: "Discover Beirut nightlife and culture.",
      img: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba",
      tag: "Urban"
    },
    {
      title: "Food Tour",
      desc: "Taste authentic Lebanese cuisine.",
      img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d",
      tag: "Food"
    }
  ];

  return (
    <section className="container">
      <h1 className="title">Special Offers</h1>

      <div className="grid">
        {offers.map((o) => (
          <div className="card" key={o.title}>
            <img src={o.img} alt={o.title} />

            <div className="card-content">
              <span
                style={{
                  display: "inline-block",
                  background: "#38bdf8",
                  color: "#000",
                  padding: "4px 10px",
                  borderRadius: "12px",
                  fontSize: "12px",
                  marginBottom: "10px"
                }}
              >
                {o.tag}
              </span>

              <h3>{o.title}</h3>
              <p>{o.desc}</p>

              <button className="btn" style={{ marginTop: "10px" }}>
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Offers;