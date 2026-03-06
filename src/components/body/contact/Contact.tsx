import { useState } from "react";
import styles from "./contact.module.css";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      setStatus("success");
    } else {
      setStatus("error");
    }
  }

  return (
    <section className="contact_section">
      <div className={styles.contact_banner}>
        <h2>we want to hear from you</h2>
      </div>
      <div className="container">
        <div className={styles.contact_card}>
          <form className={styles.contact_form} onSubmit={onSubmit}>
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
              rows={6}
            ></textarea>
            <button type="submit">Submit</button>

            {status === "success" && (
              <p className={styles.successMessage}>
                Message sent successfully!
              </p>
            )}
            {status === "error" && (
              <p className={styles.errorMessage}>Error sending message.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
