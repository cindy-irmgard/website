import { component$ } from "@builder.io/qwik";
import styles from "./contact.module.scss";

export default component$(() => (
  <div class={styles.container}>
    <div>
      <h1>Get in touch</h1>
    </div>
    <br />
    <form>
      <label for="fname">First Name</label>
      <input
        type="text"
        class={styles.input}
        name="firstname"
        placeholder="Your name.."
      />
      <br />
      <label for="lname">Last Name</label>
      <input
        type="text"
        name="lastname"
        class={styles.input}
        placeholder="Your last name.."
      />
      <br />
      <label for="subject">Subject</label>
      <textarea
        class={styles.input}
        name="subject"
        placeholder="Write something.."
      />
      <input type="submit" class={styles.submit} value="Submit"></input>
    </form>
  </div>
));
