import styles from "./about.module.css";
import image from "@/assets/background_placeholder.jpg";

export default function AboutSection() {
  return (
    <section className={styles.about_container}>
      <div className={`${styles.about_card} container`}>
        <h2>Our Mission</h2>
        <h4>
          <em>Empowering Lives Through Power & Choice</em>
        </h4>
        <img src={image} alt="placeholder image" />
        <p>
          At Trajectory Publishing LLC, we create impactful works that enable
          individuals to understand and take control of their lives. While
          external factors may ultimately be uncertain and out of our control,
          we can surely choose the principles that guide us. Through this, we
          cultivate inner peace and stability which provides a foundation in
          life's storms that many struggle to find.
        </p>
      </div>
      <div className={`${styles.about_card} container`}>
        <h2>Our Story</h2>
        <h4>Phillip Hingson</h4>
        <h6>
          <em>Founder</em>
        </h6>
        <p>
          Having been through many of my own storms of life, I have gone through
          the painful work that has helped me better understand my own past and
          present. I have learned to approach myself with kindness, love and
          respect. I am choosing principles to live by that bring me a great
          deal of peace. My wish is to share not only the wisdom I have gained
          over the years, but to also share the inspiration that I feel has been
          guiding this process. While the books and websites are intended for
          everyone and are not faith-based, the drive behind Trajectory
          Publishing LLC is at least in part fueled by my belief that we are all
          brothers and sisters and that each of us is of great worth.
        </p>
      </div>
    </section>
  );
}
