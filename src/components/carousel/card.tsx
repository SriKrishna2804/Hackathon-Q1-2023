import { Box } from "@mui/material";
import styles from "../../styles/carousel/card.module.css";

export default function Card({
  title,
  url,
  subTitle,
  link,
  buttonText,
  textColorConfig,
}) {
  return (
    <Box>
      <div className={styles.divCenter}>
        <img alt={title} src={url} />
        <div className={styles.leftCentered}>
          <h1 className={`${styles.imageTitle} ${textColorConfig}`}>{title}</h1>
          <h3 className={`${styles.imageTitle} ${textColorConfig}`}>
            {subTitle}
          </h3>
          <a
            target="_blank"
            href={link}
            rel="noopener noreferrer"
            className={styles.link}
          >
            <div className={`${styles.btn} ${styles.warning}`}>
              {buttonText}
            </div>
          </a>
        </div>
      </div>
    </Box>
  );
}
