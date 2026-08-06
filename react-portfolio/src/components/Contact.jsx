function Contact() {
  return (
    <section id="contact">

      <div className="container">

        <div className="section-title">
          Contact Me
        </div>

        <form>

          <input
            className="form-control mb-3"
            placeholder="Your Name"
          />

          <input
            className="form-control mb-3"
            placeholder="Your Email"
          />

          <textarea
            className="form-control mb-3"
            rows="5"
            placeholder="Message"
          ></textarea>

          <button className="btn btn-primary">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;