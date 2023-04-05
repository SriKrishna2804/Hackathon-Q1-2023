import { Grid, Box } from "@mui/material";
import styles from "mdsreact/styles/carousel/card.module.css";

export default function Card({ title, url, subTitle, link }) {
  return (
    <Box>
      <div className={styles.divCenter}>
        <img alt={title} src={url} />
        <div className={styles.leftCentered}>
          <h1 className={styles.imageTitle}>{title}</h1>
          <h3 className={styles.imageTitle}>{subTitle}</h3>
          <a
            target="_blank"
            href={link}
            rel="noopener noreferrer"
            className={styles.link}
          >
            <div className={`${styles.btn} ${styles.warning}`}>
              Check it out
            </div>
          </a>
        </div>
      </div>
    </Box>
  );
}
