import "../../styles/ContactPage.scss"; // Import the SCSS file

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with us for any inquiries, feedback, or collaboration opportunities.",
};

export default function ContactPage() {
  return (
    <main className="contact-page__container">
      <div className="contact-page__form-wrapper">
        <h1 className="contact-page__title">Contact Us</h1>
        <p className="contact-page__description">
      
        </p>
        <form
          name="contact" // Name of the form for Netlify
          method="POST" // Netlify processes POST requests
          data-netlify="true" // Enables Netlify form handling
          className="contact-page__form"
        >
          {/* Hidden input for Netlify form */}
          <input type="hidden" name="form-name" value="contact" />

          <div className="contact-page__input-group">
            <label htmlFor="name" className="contact-page__label">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="contact-page__input"
              placeholder="Your Name"
            />
          </div>

          <div className="contact-page__input-group">
            <label htmlFor="email" className="contact-page__label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="contact-page__input"
              placeholder="your-email@example.com"
            />
          </div>

          <div className="contact-page__input-group">
            <label htmlFor="message" className="contact-page__label">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="contact-page__textarea"
              placeholder="Your message here..."
            ></textarea>
          </div>

          <button type="submit" className="contact-page__button">Send Message</button>
        </form>
      </div>
    </main>
  );
}
