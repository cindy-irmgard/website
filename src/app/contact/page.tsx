import styles from "./contact.module.scss";

const contact = () => (
  <div>
    <div className={styles.container}>
      <div className={styles.text}>
        <div>
          <h1>Get in touch</h1>
          <br />
          <p>
            If you have any questions or maybe even a request fill in this
            contact form and I&apos;ll be in touch with you as soon as possible!
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default contact;
