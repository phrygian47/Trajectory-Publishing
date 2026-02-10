import styles from "./quote.module.css";

export default function Quote() {
  return (
    <div className={styles.quote_container}>
      <p>
        Choices <span className={styles.red}>Change</span> your trajectory
      </p>
    </div>
  );
}
