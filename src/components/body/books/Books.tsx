import styles from "./books.module.css";
import book from "@/assets/placeholder-book.jpg";

export default function Books() {
  return (
    <div className={`${styles.books_container} container`}>
      <h2>Our Books</h2>
      <div className={styles.img_container}>
        <a href="/book">
          <img src={book} alt="Book Placeholder" />
        </a>
      </div>
    </div>
  );
}
