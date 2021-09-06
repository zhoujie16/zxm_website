import React, { useEffect, useCallback, useState } from "react";
import styles from "./index.module.css";

class Index extends React.Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <div className={styles.nav_wrap}>
        <div className={styles.nav_inner}>
          <div className={styles.nav_web_name}>nav_web_name</div>
          <div className={styles.nav_menu}>nav_menu</div>
        </div>
      </div>
    );
  }
}

// Demo页面
export default Index;
