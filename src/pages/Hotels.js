function Hotels() {
  const hotels = [
    {
      name: "Luxury Hotel Beirut",
      img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200",
      desc: "5-star luxury stay in the heart of Beirut with premium services and city views.",
      price: "$180 / night"
    },
    {
      name: "Mountain Resort Faraya",
      img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1200",
      desc: "Relax in a peaceful mountain resort surrounded by snow and nature.",
      price: "$150 / night"
    },
    {
      name: "Beach Hotel Tyre",
      img: "https://images.pexels.com/photos/37131988/pexels-photo-37131988.jpeg",
      desc: "Sea-view rooms with private beach access and summer vibes.",
      price: "$130 / night"
    },
    {
      name: "Boutique Hotel Byblos",
      img: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=1200",
      desc: "Stay in the heart of ancient Byblos with historical charm and modern comfort.",
      price: "$120 / night"
    }
  ];

  return (
    <>
      <div className="hotel-img">
        <h1>Luxury Stays in Lebanon</h1>
      </div>

      <section className="container">
        <h2 className="title">Discover Your Perfect Stay</h2>

        <div className="grid">
          {hotels.map((hotel) => (
            <div className="card" key={hotel.name}>
              <img src={hotel.img} alt={hotel.name} />

              <div className="card-content">
                <h3>{hotel.name}</h3>
                <p>{hotel.desc}</p>

                <p
                  style={{
                    fontWeight: "bold",
                    marginTop: "10px",
                    color: "#38bdf8"
                  }}
                >
                  {hotel.price}
                </p>

                <button className="btn">Book Now</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Hotels;