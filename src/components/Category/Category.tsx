import styles from "./category.module.scss";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface CategoryProps {
  href: string;
  name: string;
  image: StaticImageData;
}

export const Category = ({ href, name, image }: CategoryProps) => {
  return (
    <Link href={href} className={styles.container}>
      <Image className={styles.image} src={image} alt={name} fill />
      <div className={styles.overlay}>{name}</div>
    </Link>
  );
};
