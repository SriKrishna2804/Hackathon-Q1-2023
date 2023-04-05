import { Box } from "@mui/material";
import FloorplanCard from "./floorplan-card";
import styles from "mdsreact/styles/client/floorplan-overview/floorplans-group.module.css";

export default function FloorplansGroup({ floorplans }) {
  const categories: String[] = [];
  floorplans.forEach((floorplan) => {
    if (!categories.includes(floorplan.ProjectShootTypeLabel)) {
      categories.push(floorplan.ProjectShootTypeLabel);
    }
  });
  return (
    <Box>
      {categories.map((category) => (
        <Box
          className={styles.group}
          sx={{ display: "flex", textAlign: "center", flexDirection: "column" }}
        >
          <Box sx={{ display: "flex" }} className={styles.groupHeader}>
            {category}
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
            {floorplans.map((floorplan) => {
              if (floorplan.ProjectShootTypeLabel === category) {
                return (
                  <FloorplanCard
                    name={floorplan.FloorplanDescription}
                    url={floorplan.ImageURL}
                  />
                );
              }
            })}
          </Box>
        </Box>
      ))}
    </Box>
  );
}
