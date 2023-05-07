import Image from "next/image";
import halfhalf from "@/assets/images/halfhalf.jpg";

const Home = () => (
  <Image
    alt="Background"
    src={halfhalf}
    fill
    style={{
      objectFit: "cover",
      objectPosition: "top",
    }}
  />
);

export default Home;
