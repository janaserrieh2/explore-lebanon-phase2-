import { useState } from "react";

function Food() {
  const foods = [
    {
      name: "Hummus",
      img: "https://images.pexels.com/photos/19552439/pexels-photo-19552439.jpeg",
      desc: "Creamy chickpea dip with olive oil and tahini."
    },
    {
      name: "Kibbeh",
      img: "https://images.pexels.com/photos/37448025/pexels-photo-37448025.jpeg",
      desc: "A traditional Lebanese dish made with bulgur and meat."
    },
    {
      name: "Tabbouleh",
      img: "https://images.pexels.com/photos/32592714/pexels-photo-32592714.jpeg",
      desc: "Fresh parsley salad with lemon and olive oil."
    },
    {
      name: "Shawarma",
      img: "https://images.pexels.com/photos/30328049/pexels-photo-30328049.png",
      desc: "Marinated meat wrapped in Arabic bread."
    }
  ];

  const [likes, setLikes] = useState({});

  const likeFood = (name) => {
    setLikes((prev) => ({
      ...prev,
      [name]: (prev[name] || 0) + 1
    }));
  };

  return (
    <section className="container">
      <h1 className="title">Lebanese Food</h1>

      <div className="grid">
        {foods.map((food) => (
          <div className="card" key={food.name}>
            <img src={food.img} alt={food.name} />

            <div className="card-content">
              <h3>{food.name}</h3>
              <p>{food.desc}</p>

              <button className="btn" onClick={() => likeFood(food.name)}>
                ❤️ {likes[food.name] || 0}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Food;