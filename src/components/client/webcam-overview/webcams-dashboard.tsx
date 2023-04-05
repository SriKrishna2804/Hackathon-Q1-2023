import { Grid, Box } from "@mui/material";
import WebcamCard from "./webcam-card";
import styles from "mdsreact/styles/client/webcam-overview/webcams-dashboard.module.css";
import floorplans from "mdsreact/data/floorplans.json";

export default function FloorplansDashboard() {
  return (
    <Grid xs={10}>
      <Box sx={{ display: "flex" }} className={styles.groupHeader}>
        Webcams
      </Box>
      <Box
        className={styles.container}
        sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", textAlign: "center" }}
      >
        {floorplans.map((floorplan) => (
          <WebcamCard
            name={floorplan.FloorplanDescription}
            url={floorplan.ImageURL}
          />
        ))}
      </Box>
    </Grid>
  );
}
