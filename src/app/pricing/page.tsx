import styles from "./pricing.module.scss";

const Pricing = () => (
  <div className={styles.container}>
    <div className={styles.item}>
      <h3>Photography prices </h3>
      <br />
      <h2>€25,-</h2>
      <br />

      <ul>
        <li>30 minutes of photography</li>
        <li>Around 20 photos</li>
        <li>Including post-processing</li>
      </ul>
      <br />
      <h2>€45,-</h2>
      <br />
      <ul>
        <li>1 hour of photography</li>
        <li>Around 40 photos</li>
        <li>Including post-processing</li>
      </ul>
    </div>

    <div className={styles.item}>
      <h3>Outline prices</h3>
      <br />
      <h2>€30,-</h2>
      <br />
      <ul>
        <li>Digital outline drawing</li>
        <li>Both JPG & PNG file deliverd</li>
        <li>For €5 extra also the SVG file</li>
      </ul>
    </div>

    <div className={styles.item}>
      <h3>Cartoon prices</h3>
      <br />
      <h2>€35,-</h2>
      <br />
      <ul>
        <li>Digital cartoon drawing</li>
        <li>Both JPG & PNG file deliverd (when possible)</li>
        <li>For €5 extra also the SVG file</li>
      </ul>
    </div>
  </div>
);

export default Pricing;
