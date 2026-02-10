import styles from "./books.module.css";
import book1 from "@/assets/placeholder-book.jpg";

export default function Books() {
  const books = [
    { id: "1", title: "Book One", href: "/book/1", cover: book1 },
    { id: "2", title: "Book Two", href: "/book/2", cover: book1 },
    { id: "3", title: "Book Three", href: "/book/3", cover: book1 },
  ];
  return (
    <section className={`${styles.books_container} container`}>
      <h2>Our Books</h2>

      <div className={styles.grid}>
        {books.map((b) => (
          <a key={b.id} href={b.href} className={styles.card}>
            <img src={b.cover} alt={b.title} className={styles.cover} />
            <p className={styles.title}>{b.title}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
