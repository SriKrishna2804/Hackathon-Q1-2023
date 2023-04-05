import { Grid, Box } from "@mui/material";
import FloorplansGroup from "./floorplans-group";
import styles from "mdsreact/styles/client/floorplan-overview/floorplans-dashboard.module.css";
import floorplans from "mdsreact/data/floorplans.json";

export default function FloorplansDashboard() {
  return (
    <Grid item xs={10}>
      <Box className={styles.container}>
        <FloorplansGroup floorplans={floorplans} />
      </Box>
    </Grid>
  );
}
