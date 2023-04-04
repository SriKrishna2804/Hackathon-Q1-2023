import * as React from "react";
import Box from "@mui/material/Box";
import styles from 'mdsreact/styles/Home.module.css'
import { TextField, Typography } from "@mui/material";
import Image from 'next/image'

export default function Login() {

  React.useEffect(() => {
    const func = async () => {
      
    };
  });

  return (
    <Box className={styles.login} > 
      <Image src="/mds/Multivista-Logo-190x190.png" alt="Multivista Logo" width="190" height="190" />
      <Typography variant="h3" component="h3" className={styles.title}>
        CLIENT LOGIN
      </Typography>;

      <TextField
          className="styles.username"
          id="user-name-required"
          label="USER NAME"
        />
     <TextField
          id="outlined-password-input"
          label="PASSWORD"
          type="password"
          autoComplete="current-password"
        />
    </Box>
  );
}
