import styles from "./about.module.scss";
import Image from "next/image";
import heyWit from "@/assets/images/heyWit.png";
import portrait from "@/assets/images/cindy.jpg";

const About = async () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.imageBorder}>
          <Image
            className={styles.portrait}
            width={330}
            alt="portrait"
            src={portrait}
          />
        </div>
        <div className={styles.about}>
          <Image className={styles.hey} width={150} alt="hey" src={heyWit} />
          <div>
            <h2>I&apos;m Cindy Irmgard</h2>
            <br />
            <p>
              Hi, my name is Cindy, a 23-year-old girl trying to find her way in
              photography, digital art & design. When I was 16 I studied for 3
              years at the Media & Journalism course in Amsterdam. This course
              actually teaches you the basics of everything in the media, such
              as photographing, presenting, making websites etc. The fun thing
              about this education was that you really get to know your own
              interest and dig deeper in it if you want. That was also the
              moment I realized that photographing is such a beautiful way to
              make memories. And I think a lot of people sometimes forget that
              photography is not always about the best pictures in terms of
              quality, but also about the moment.
            </p>
            <br />
            <p>
              About one year ago I discovered a new passion, making line arts
              and helping with designs. The best thing about making a line art
              is that you can turn something big into very minimal. Usually for
              such a project I use a photo that I once took myself and then make
              a minimal version of it.
            </p>
            <br />
            <p>
              Photoshoot or drawing request? mail to contact@cindyirmgard.nl
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
