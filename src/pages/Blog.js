function Blog() {

  const blogs = [
    {
      title: "Top 10 Places to Visit in Lebanon",
      text: "Discover the most beautiful destinations across Lebanon.",
      img: "https://images.pexels.com/photos/4632800/pexels-photo-4632800.jpeg",
      tag: "Travel",
      date: "May 2026"
    },
    {
      title: "Best Lebanese Food Guide",
      text: "Traditional dishes every tourist must try.",
      img: "https://images.pexels.com/photos/27359350/pexels-photo-27359350.jpeg",
      tag: "Food",
      date: "April 2026"
    },
    {
      title: "Summer Activities in Lebanon",
      text: "Enjoy hiking, beaches, and nightlife experiences.",
      img: "https://images.pexels.com/photos/26989064/pexels-photo-26989064.jpeg",
      tag: "Adventure",
      date: "June 2026"
    },
    {
      title: "Hidden Gems of Beirut",
      text: "Explore secret places and local experiences in the capital.",
      img: "https://images.pexels.com/photos/5054928/pexels-photo-5054928.jpeg",
      tag: "City",
      date: "May 2026"
    },
    {
      title: "Exploring the Cedars of Lebanon",
      text: "Visit the famous cedar forests and enjoy breathtaking nature.",
      img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200",
      tag: "Nature",
      date: "May 2026"
    },
    {
      title: "A Weekend in Byblos",
      text: "Walk through ancient streets and enjoy the old harbor.",
      img: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1200",
      tag: "History",
      date: "April 2026"
    },
    {
      title: "Best Beaches in Lebanon",
      text: "Crystal water and amazing Mediterranean coast views.",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200",
      tag: "Beach",
      date: "June 2026"
    },
    {
      title: "Top Mountain Escapes",
      text: "Explore hiking trails and snowy Lebanese mountains.",
      img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200",
      tag: "Adventure",
      date: "March 2026"
    }
  ];

  return (
    <section className="container">

      <h1 className="title">Travel Blog</h1>

      <div className="grid">

        {blogs.map((blog, index) => (
          <div className="card" key={index}>

            <img src={blog.img} alt={blog.title} />

            <div className="card-content">

              <span
                style={{
                  background: "#38bdf8",
                  padding: "5px 10px",
                  borderRadius: "10px",
                  fontSize: "12px",
                  display: "inline-block",
                  marginBottom: "8px"
                }}
              >
                {blog.tag}
              </span>

              <p
                style={{
                  fontSize: "13px",
                  color: "#64748b",
                  marginBottom: "8px"
                }}
              >
                {blog.date}
              </p>

              <h3>{blog.title}</h3>

              <p>{blog.text}</p>

              <button className="btn" style={{ marginTop: "12px" }}>
                Read Article →
              </button>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Blog;