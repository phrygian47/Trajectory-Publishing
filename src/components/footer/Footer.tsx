import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="#">To Top</a>
      <ul className={styles.footer_icons}>
        <li>
          <a href="#">
            <i>Instragram</i>
          </a>
        </li>
        <li>
          <a href="#">
            <i>YouTube</i>
          </a>
        </li>
        <li>
          <a href="#">
            <i>Facebook</i>
          </a>
        </li>
      </ul>
      <ul className={styles.footer_links}>
        <li>
          <a href="#">Privacy Policy</a>
        </li>
        <li>
          <a href="#">Terms of Service</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#books">Books</a>
        </li>
        <li>
          <a href="#">The Keokuk Principle</a>
        </li>
      </ul>
      <p>Copyright &copy; 2026 Trajectory Publishingm LLC</p>
    </footer>
  );
}
