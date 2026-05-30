function Gallery() {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200",
      title: "Mountains of Lebanon"
    },
    {
      url: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1200",
      title: "Beirut City View"
    },
    {
      url: "https://images.pexels.com/photos/6462770/pexels-photo-6462770.jpeg",
      title: "Mediterranean Coast"
    },
    {
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200",
      title: "Nature of Lebanon"
    }
  ];

  return (
    <section className="container">
      <h1 className="title">Gallery</h1>

      <div className="grid">
        {images.map((img, index) => (
          <div className="card" key={index}>
            <img src={img.url} alt={img.title} />

            <div className="card-content">
              <h3>{img.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;