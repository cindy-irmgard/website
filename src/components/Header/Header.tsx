import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.scss";
import logo from "@/assets/images/logo-wit.png";
import { Route } from "@/enums/route.enum";
import { categories } from "@/data";

export const Header = () => {
  return (
    <header className={styles.container}>
      <Image width={200} alt="Logo" src={logo} />
      <nav className={styles.navigation}>
        <Link className={styles.link} href={Route.Home}>
          Home
        </Link>
        <Link className={styles.link} href={Route.About}>
          About
        </Link>
        {categories.map((category) => {
          return (
            <Link
              key={category.name}
              className={styles.link}
              href={`/category/${category.slug}`}
            >
              {category.name}
            </Link>
          );
        })}
        <Link className={styles.link} href={Route.Pricing}>
          Pricing
        </Link>
        <Link className={styles.link} href={Route.Contact}>
          Contact
        </Link>
      </nav>
      <div className={styles.right} />
    </header>
  );
};
