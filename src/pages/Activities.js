function Activities() {

  const activities = [
    {
      name: "Hiking",
      img: "https://images.pexels.com/photos/13020558/pexels-photo-13020558.jpeg",
      desc: "Explore Lebanon's beautiful mountain trails.",
      rating: "⭐ 4.9"
    },
    {
      name: "Camping",
      img: "https://images.pexels.com/photos/30563253/pexels-photo-30563253.jpeg",
      desc: "Spend unforgettable nights under the stars.",
      rating: "⭐ 4.8"
    },
    {
      name: "Skiing",
      img: "https://images.pexels.com/photos/20091365/pexels-photo-20091365.jpeg",
      desc: "Enjoy winter sports in Lebanon's snowy resorts.",
      rating: "⭐ 4.9"
    },
    {
      name: "Beach Trips",
      img: "https://images.pexels.com/photos/12308361/pexels-photo-12308361.jpeg",
      desc: "Relax on the Mediterranean coast.",
      rating: "⭐ 4.7"
    },
    {
      name: "Paragliding",
      img: "https://images.pexels.com/photos/5303379/pexels-photo-5303379.jpeg",
      desc: "Fly above mountains and enjoy breathtaking views.",
      rating: "⭐ 5.0"
    },
    {
      name: "Nightlife",
      img: "https://images.pexels.com/photos/18163165/pexels-photo-18163165.jpeg",
      desc: "Discover Beirut's vibrant nightlife scene.",
      rating: "⭐ 4.8"
    },
    {
      name: "Rafting",
      img: "https://images.pexels.com/photos/11183384/pexels-photo-11183384.jpeg",
      desc: "Adventure through exciting river rapids.",
      rating: "⭐ 4.9"
    },
    {
      name: "City Tours",
      img: "https://images.pexels.com/photos/15592112/pexels-photo-15592112.jpeg",
      desc: "Explore Lebanon's cities and hidden gems.",
      rating: "⭐ 4.7"
    },
    {
      name: "Scuba Diving",
      img: "https://images.pexels.com/photos/37530/divers-scuba-divers-diving-underwater-37530.jpeg",
      desc: "Discover underwater beauty and marine life.",
      rating: "⭐ 4.9"
    },
    {
      name: "Jeep Safari",
      img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200",
      desc: "Experience thrilling off-road mountain adventures.",
      rating: "⭐ 4.8"
    },
    {
  name: "Horse Riding",
  img: "https://images.pexels.com/photos/1996333/pexels-photo-1996333.jpeg",
  desc: "Enjoy horse riding through Lebanon's scenic landscapes.",
  rating: "⭐ 4.8"
},
{
  name: "Zipline Adventure",
  img: "https://images.unsplash.com/photo-1522163182402-834f871fd851?q=80&w=1200",
  desc: "Experience an exciting zipline ride above forests and valleys.",
  rating: "⭐ 4.9"
}
  ];

  return (
    <section>
      <div className="container">

        <h1 className="title">Activities</h1>

        <div className="grid">

          {activities.map((a, index) => (
            <div className="card" key={index}>

              <img src={a.img} alt={a.name} />

              <div className="card-content">

                <h3>{a.name}</h3>

                <p>{a.desc}</p>

                <p
                  style={{
                    marginTop: "10px",
                    fontWeight: "600",
                    color: "#38bdf8"
                  }}
                >
                  {a.rating}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Activities;