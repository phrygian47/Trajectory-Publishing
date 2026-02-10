import styles from "./hero.module.css";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.hero_image}>
        <div className={styles.hero_text}>
          <div>
            <h2>Trajectory Publishing</h2>
            <p>
              <em>
                Understanding our <span className={styles.past}>Past</span>
                <br />
                Seizing the <span className={styles.present}>Present</span>
                <br />
                Charting our <span className={styles.future}>Future</span>
              </em>
            </p>
          </div>
          <div className={`${styles.cta_btns} container`}>
            <a href="#books" className={`${styles.cta_btn} ${styles.primary}`}>
              Start Learning
            </a>
            <a
              href="/external"
              className={`${styles.cta_btn} ${styles.secondary}`}
            >
              Manipulation Literacy Test
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
