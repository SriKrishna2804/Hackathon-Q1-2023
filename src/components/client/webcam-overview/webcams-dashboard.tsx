import { Grid, Box } from "@mui/material";
import WebcamCard from "./webcam-card";
import styles from "mdsreact/styles/client/webcam-overview/webcams-dashboard.module.css";

export default function FloorplansDashboard({ webcams }) {
  return (
    <Grid item xs={10}>
      <Box sx={{ display: "flex" }} className={styles.groupHeader}>
        Webcams
      </Box>
      <Box
        className={styles.container}
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          textAlign: "center",
        }}
      >
        {webcams.map((webcam) => (
          <WebcamCard
            key={webcam?.WebcamUID}
            name={webcam?.WebcamName}
            url={webcam?.MostRecentPhoto?.ThumbURL}
          />
        ))}
      </Box>
    </Grid>
  );
}
