import * as React from "react";
import styles from "mdsreact/styles/login/left-sidebar.module.css";
import { Grid, Box, TextField, Typography, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function LeftSidebar() {
  React.useEffect(() => {
    const func = async () => {};
  });

  return (
    <Grid item xs={3}>
      <Box className={styles.login}>
        <Image
          src="/images/multivista-logo-large.png"
          alt="Multivista Logo"
          width="190"
          height="190"
          className={styles.logo}
        />
        <Box className={styles.formContainer}>
          <Typography variant="h3" component="h3" className={styles.title}>
            CLIENT LOGIN
          </Typography>
          <TextField
            id="username"
            label="USER NAME"
            type="text"
            variant="outlined"
            className={styles.input}
          />
          <TextField
            id="password"
            label="PASSWORD"
            type="password"
            variant="outlined"
            className={styles.input}
          />
          <Link href="/client/floorplan-overview" className={styles.loginLink}>
            <Button variant="contained" className={styles.loginBtn}>
              Login
            </Button>
          </Link>
        </Box>
      </Box>
    </Grid>
  );
}
