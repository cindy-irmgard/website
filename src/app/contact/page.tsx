import styles from "./contact.module.scss";

const contact = () => (
  <div>
    <div className={styles.container}>
      <div>
        <h1>Get in touch</h1>
      </div>
      <br />

      <form>
        <label htmlFor="fname">First Name</label>
        <input
          type="text"
          className={styles.input}
          name="firstname"
          placeholder="Your name.."
        ></input>
        <br />
        <label htmlFor="lname">Last Name</label>
        <input
          type="text"
          name="lastname"
          className={styles.input}
          placeholder="Your last name.."
        ></input>
        <br />
        <label htmlFor="subject">Subject</label>
        <textarea
          className={styles.input}
          name="subject"
          placeholder="Write something.."
        ></textarea>

        <input type="submit" className={styles.submit} value="Submit"></input>
      </form>
    </div>
  </div>
);

export default contact;
