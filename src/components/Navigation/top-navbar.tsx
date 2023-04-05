import Image from "next/image";
import Link from "next/link";
import { Grid, Box } from "@mui/material";
import styles from "mdsreact/styles/navigation/top-navbar.module.css";
import { useRouter } from "next/router";

export default function TopNavBar() {
  const router = useRouter();

  return (
    <Grid item xs={12}>
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
        <Link
          href="/"
          className={`${styles.link} ${router.pathname} == "/" ? "active" : ""`}
        >
          HOME
        </Link>
        <Link
          href="/client/floorplan-overview"
          className={`${styles.link} ${router.pathname == "/client/floorplan-overview" ? styles.active : ""}`}
        >
          FLOORPLANS
        </Link>
        <Link
          href="/client/webcam-overview"
          className={`${styles.link} ${router.pathname == "/client/webcam-overview" ? styles.active : ""}`}
        >
          WEBCAMS
        </Link>
      </Box>
    </Grid>
  );
}
