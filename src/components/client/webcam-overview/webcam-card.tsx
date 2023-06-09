import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Typography,
    CardActionArea,
  } from "@mui/material";
  import styles from "mdsreact/styles/client/webcam-overview/webcam-card.module.css";
  
  export default function FloorplanCard({ name, url }) {
    return (
        <Card className={styles.card}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="180"
              image={url}
              alt="Webcam"
              className={styles.cardImg}
            />
            <CardContent>
              <Typography gutterBottom variant="body2" component="div" className={styles.cardHeading}>
                {name}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
    );
  }
  