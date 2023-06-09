import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "../styles/home.module.css";
import { Grid, Box, Container, Skeleton, Typography } from "@mui/material";
import LeftSidebar from "../components/login/left-sidebar";
import Layout from "../components/layout";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Card from "../components/carousel/card";
import cardStyles from "../styles/carousel/card.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  let photos = [
    {
      url: "/hexagon-live2023.jpg",
      title: "JOIN US AT HXGN LIVE GLOBAL 2023 JUNE 12-15, 2023",
      subTitle:
        "Join us in Las Vegas for the latest construction tech, big keynotes, and to network with experts and thought leaders in your industry.",
      link: "https://cvent.me/VdzgDm?rt=e3KDK79YOU-rYO1h7RLvNg&RefId=Website_GEO_Multivista",
      buttonText: "CHECK IT OUT",
      textColorConfig: cardStyles.imgTextWhiteColor
    },
    {
      url: "/bg-firestopping.jpg",
      title: "AUTOMATED FIRESTOPPING ASSESSMENTS",
      subTitle:
        "Our automated system detects unsealed penetrations in 2D and 360 images and generates a punch list for the contractor team, saving hundreds of hours and thousands of dollars in rework.",
      link: "https://www.multivista.com/firestopping",
      buttonText: "LEARN MORE",
      textColorConfig: cardStyles.imgTextWhiteColor
    },
    {
      url: "/blk-banner-20190510.jpg",
      title: "INTRODUCING 3D IMAGES",
      subTitle: "VIEW A PICTURE, MEASURE ANYTHING.",
      link: "https://www.multivista.com/measurable-3d-images/",
      buttonText: "LEARN MORE",
      textColorConfig: cardStyles.imgTextWhiteColor
    },
    {
      url: "/uav-hero-v180930.jpg",
      title: "MULTIVISTA UAV",
      subTitle: "IT'S NOT SCIENCE FICTION IT'S YOUR COMPETITIVE ADVANTAGE",
      link: "https://www.multivista.com/services/construction-drone-uav/",
      buttonText: "LEARN MORE",
      textColorConfig: cardStyles.imgTextWhiteColor
    },
    {
      url: "/hero-webcam-181103.jpg",
      title: "WEBCAM SERVICES",
      subTitle: "LIVE FEEDS, ARCHIVED IMAGES, TIMELAPSE, AND PTZ POSITIONING",
      link: "https://www.multivista.com/services/construction-drone-uav/",
      buttonText: "LEARN MORE",
      textColorConfig: cardStyles.imgTextWhiteColor
    },
    {
      url: "/help-200330.jpg",
      title: "STAY SAFE, WORK REMOTELY AND REMAIN ON-SCHEDULE",
      subTitle:
        "We can help. Multivista will rapidly provide the actionable insights you need to manage your projects remotely, reduce risk and liability, and minimize rework.",
      link: "https://info.multivista.com/schedule-a-demo",
      buttonText: "LEARN MORE",
      textColorConfig: cardStyles.imgTextWhiteColor
    },
    {
      url: "/integrations-v190214.jpg",
      title: "BETTER TOGETHER",
      subTitle: "TEAR DOWN THE DATA SILOS",
      link: "https://www.multivista.com/about/integrations/",
      buttonText: "GET CONNECTED",
      textColorConfig: cardStyles.imgTextBlackColor
    },
  ];

  return (
    <Layout>
      <Head>
        <title>Multivista Login</title>
        <meta
          name="description"
          content="Generated by create next app for MDS Demo"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid container className={styles.main}>
        <LeftSidebar />
        <Grid item xs={9} display={{ xs: "none", lg: "block" }}>
          <Container className={styles.container}>
            <Carousel autoPlay showThumbs={false} showStatus={false} infiniteLoop>
              {photos.map((photo, index) => (
                <Card key={index}
                  title={photo.title}
                  url={photo.url}
                  subTitle={photo.subTitle}
                  link={photo.link}
                  buttonText = {photo.buttonText}
                  textColorConfig = {photo.textColorConfig}
                />
              ))}
            </Carousel>
          </Container>
        </Grid>
      </Grid>
    </Layout>
  );
}
