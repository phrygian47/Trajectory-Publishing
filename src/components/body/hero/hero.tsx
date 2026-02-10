import styles from "./hero.module.css";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.hero_image}>
        <div className={styles.hero_text}>
          <div>
            <h2>Trajectory Publishing LLC</h2>
            <p>
              <em>
                Understanding our Past, Seizing the Present, Charting our Future
              </em>
            </p>
          </div>
          <a href="#books" className={styles.cta_btn}>
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}
