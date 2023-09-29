import React from "react";
import ReactDOM from "react-dom/client";
import { Grid } from "./components/Grid.jsx";
import styles from "./styles/styles.module.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <>
      <div className={styles['background']}  >
        <Grid />
      </div>
    </>
  </React.StrictMode>
);
