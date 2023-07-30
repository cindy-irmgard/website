import { component$ } from "@builder.io/qwik";
import styles from "./footer.module.scss";

export const Footer = component$(() => (
  <footer class={styles.container}>
    <p>© Cindy Irmgard 2023</p>
  </footer>
));
