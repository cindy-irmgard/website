import Image from "next/image";
import homepage from "@/assets/images/homepage.jpg";

const Home = () => (
  <Image
    alt="Background"
    src={homepage}
    fill
    style={{
      objectFit: "cover",
      objectPosition: "top",
    }}
  />
);

export default Home;
