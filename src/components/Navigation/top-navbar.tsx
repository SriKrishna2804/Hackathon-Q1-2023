import Image from "next/image";
import Link from "next/link";
import { Grid, Box } from "@mui/material";
import styles from "mdsreact/styles/navigation/top-navbar.module.css";

export default function TopNavBar() {
  return (
    <Grid xs={12}>
      <Box
        sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
        className={styles.container}
      >
        <Image
          priority
          src="/images/multivista-logo.png"
          height={71}
          width={70}
          alt="Multivista Logo"
          className={styles.logo}
        />
        <Link href="/" className={styles.link}>
          HOME
        </Link>
        <Link href="/client/floorplan-overview" className={styles.link}>
          FLOORPLANS
        </Link>
      </Box>
    </Grid>
  );
}
