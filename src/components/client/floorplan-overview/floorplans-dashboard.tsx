import { Grid, Box } from "@mui/material";
import FloorplansGroup from "./floorplans-group";
import styles from "mdsreact/styles/client/floorplan-overview/floorplans-dashboard.module.css";

export default function FloorplansDashboard() {
  return (
    <Grid xs={10}>
      <Box className={styles.container}>
        <FloorplansGroup />
      </Box>
    </Grid>
  );
}
