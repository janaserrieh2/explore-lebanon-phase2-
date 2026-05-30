function About() {
  return (
    <>
      <section id="cover-section">
        <div id="cover-content">
          <h1>Our Mission</h1>
          <p>Preserving the beauty of Lebanon for generations</p>
          <div id="line"></div>
        </div>
      </section>

      <section id="card">

        <h2 className="title">
          Who We Are?
        </h2>

        <div id="content">

          <div id="text">

            <p id="prg">
              <strong>Explore Lebanon</strong> is a modern tourism platform
              designed to showcase Lebanon’s breathtaking landscapes,
              rich culture, and historical treasures.
            </p>

            <p id="prg">
              Our mission is to help travelers discover mountains,
              beaches, ancient landmarks, local cuisine, hotels,
              and unforgettable adventures all in one place.
            </p>

            <blockquote id="about-quote">
              "Lebanon is not just a destination, it's an experience."
            </blockquote>

          </div>

          <div id="map-img">
            <img
              src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1200"
              alt="Lebanon"
            />
          </div>

        </div>

        <div className="about-stats">

          <div className="stat-box">
            <h2>50+</h2>
            <p>Tourist Destinations</p>
          </div>

          <div className="stat-box">
            <h2>20+</h2>
            <p>Activities</p>
          </div>

          <div className="stat-box">
            <h2>15+</h2>
            <p>Luxury Hotels</p>
          </div>

          <div className="stat-box">
            <h2>100%</h2>
            <p>Lebanese Experience</p>
          </div>

        </div>

        <h2 id="title">Our Core Values</h2>

        <div className="grid-container">

          <div className="grid-card">
            <h3>🌍 Authenticity</h3>
            <p>Real Lebanese experiences and traditions.</p>
          </div>

          <div className="grid-card">
            <h3>🌱 Sustainability</h3>
            <p>Supporting eco-friendly tourism.</p>
          </div>

          <div className="grid-card">
            <h3>🏛 Heritage</h3>
            <p>Protecting Lebanon's culture and history.</p>
          </div>

          <div className="grid-card">
            <h3>❤️ Passion</h3>
            <p>Sharing Lebanon with travelers worldwide.</p>
          </div>

        </div>

      </section>
    </>
  );
}

export default About;