import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import homepage from "~/assets/images/homepage.jpg";

export default component$(() => (
  <img
    height={1080}
    width={1920}
    alt="Background"
    src={homepage}
    style={{
      objectFit: "cover",
      objectPosition: "top",
      width: "100%",
      height: "100vh",
      marginTop: "-90px",
      marginBottom: "-60px",
    }}
  />
));

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
