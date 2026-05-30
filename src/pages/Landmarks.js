import { Link } from "react-router-dom";

function Landmarks() {
  const landmarks = [
    {
      name: "Byblos",
      img: "https://images.pexels.com/photos/11187256/pexels-photo-11187256.jpeg",
      desc: "One of the oldest continuously inhabited cities in the world."
    },
    {
      name: "Baalbek",
      img: "https://images.pexels.com/photos/32488823/pexels-photo-32488823.jpeg",
      desc: "Massive Roman temples and UNESCO World Heritage Site."
    },
    {
      name: "Jeita Grotto",
      img: "https://images.pexels.com/photos/14776259/pexels-photo-14776259.jpeg",
      desc: "Natural limestone caves and underground rivers."
    },
    {
      name: "Beirut",
      img: "https://media.istockphoto.com/id/461976569/photo/beirut-downtown-cityscape-mohammad-al-amin-mosque.jpg",
      desc: "Capital city mixing history, culture, and modern life."
    }
  ];

  return (
    <section className="container">
      <h1 className="title">Ancient Landmarks of Lebanon</h1>

      <div className="grid">
        {landmarks.map((item) => (
          <div className="card" key={item.name}>
            <img src={item.img} alt={item.name} />

            <div className="card-content">
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: "60px" }}>
        <h3>Plan Your Lebanese Experience</h3>
        <p>Contact us to start your journey</p>

        <Link to="/contact" className="btn">
          Contact Us
        </Link>
      </div>
    </section>
  );
}

export default Landmarks;