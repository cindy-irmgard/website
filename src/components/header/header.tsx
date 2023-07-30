import { Link } from "@builder.io/qwik-city";
import styles from "./header.module.scss";
import { component$ } from "@builder.io/qwik";
import logo from "~/assets/images/logo-wit.png";
import { Route } from "~/enums/route.enum";

export const Header = component$(() => (
  <header class={styles.container}>
    <Link href={Route.Home}>
      <img width={200} height={50} alt="Logo" src={logo} />
    </Link>
    <nav class={styles.navigation}>
      <Link class={styles.link} href={Route.Home}>
        Home
      </Link>
      <Link class={styles.link} href={Route.About}>
        About
      </Link>
      {/* {categories.map((category) => {
        return (
          <Link
            key={category.name}
            class={styles.link}
            href={`/category/${category.slug}`}
          >
            {category.name}
          </Link>
        );
      })} */}
      <Link class={styles.link} href={Route.Otherprojects}>
        Other projects
      </Link>
      <Link class={styles.link} href={Route.Pricing}>
        Pricing
      </Link>
      <Link class={styles.link} href={Route.Contact}>
        Contact
      </Link>
    </nav>
    <div class={styles.right} />
  </header>
));
