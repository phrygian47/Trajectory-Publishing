import styles from "./about.module.css";

export default function AboutSection() {
  return (
    <section className={`${styles.about_container} container`}>
      <h2>Our Mission</h2>
      <h4>
        <em>Empowering Lives Through Power & Choice</em>
      </h4>
      <img src="" alt="" />
      <p>
        At Trajectory Publishing LLC, we create impactful works that enable
        individuals to understand and take control of their lives. While
        external factors may ultimately be uncertain and out of our control, we
        can surely choose the principles that guide us. Through this, we
        cultivate inner peace and stability which provides a foundation in
        life's storms that many struggle to find.
      </p>
    </section>
  );
}
