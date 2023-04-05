import { Box } from "@mui/material";
import FloorplanCard from "./floorplan-card";
import styles from "mdsreact/styles/client/floorplan-overview/floorplans-group.module.css";

export default function FloorplansGroup() {
  return (
    <Box sx={{ display: "flex",  textAlign: "center", flexDirection: "column" }} className={styles.group}>
        <Box sx={{ display: "flex" }} className={styles.groupHeader}>Site survey exact built</Box>
        <FloorplanCard />
    </Box>
  );
}