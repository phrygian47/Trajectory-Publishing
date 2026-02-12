import styles from "./contact.module.css";

export default function Contact() {
  return (
    <section className="contact_section">
      <div className={styles.contact_banner}>
        <h2>we want to hear from you</h2>
      </div>
      <div className="container">
        <div className={styles.contact_card}>
          <form className={styles.contact_form}>
            <div className={styles.contact_title}>
              <h2>Get in touch</h2>
              <hr />
            </div>
            <label className={styles.srOnly} htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              className={styles.contact_inputs}
              aria-label="Your Name"
              required
            />
            <label className={styles.srOnly} htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              className={styles.contact_inputs}
              aria-label="Your Email"
              required
            />
            <label className={styles.srOnly} htmlFor="message">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Your Message"
              className={styles.contact_inputs}
              aria-label="Your Message"
              required
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}
