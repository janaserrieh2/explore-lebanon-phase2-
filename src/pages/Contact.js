import { useState } from "react";

function Contact() {

  const [status, setStatus] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const message = e.target.message.value.trim();

    if (name.length < 3) {
      setError(true);
      setStatus("Name must be at least 3 characters.");
      return;
    }

    if (!email.includes("@")) {
      setError(true);
      setStatus("Please enter a valid email.");
      return;
    }

    if (message.length < 10) {
      setError(true);
      setStatus("Message must be at least 10 characters.");
      return;
    }

    setError(false);
    setStatus("Thank you! Your message has been sent successfully.");

    e.target.reset();
  };

  return (
    <section className="container">

      <h1 className="title">Contact Us</h1>

      <form className="contact-form" onSubmit={handleSubmit}>

        <input
          name="name"
          type="text"
          placeholder="Full Name"
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Email Address"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          required
        ></textarea>

        <button type="submit" className="btn">
          Send Message
        </button>

      </form>

      {status && (
        <p
          style={{
            textAlign: "center",
            marginTop: "15px",
            color: error ? "#ef4444" : "#22c55e",
            fontWeight: "600"
          }}
        >
          {status}
        </p>
      )}

    </section>
  );
}

export default Contact;