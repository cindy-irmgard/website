import Image from "next/image";
import homepage from "@/assets/images/homepage.jpg";

const Home = () => (
  <Image
    alt="Background"
    src={homepage}
    style={{
      objectFit: "cover",
      objectPosition: "top",
      width: "100%",
      height: "100vh",
      marginTop: -90,
      marginBottom: -60,
    }}
  />
);

export default Home;
