import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";
import styles from "mdsreact/styles/client/floorplan-overview/floorplan-card.module.css";

export default function FloorplanCard() {
  return (
    <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
      <Card className={styles.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="180"
            image="/images/floorplan.png"
            alt="Floorplan"
            className={styles.cardImg}
          />
          <CardContent>
            <Typography gutterBottom variant="body2" component="div" className={styles.cardHeading}>
              Office Shell
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}
