import React, { useEffect, useCallback, useState } from "react";
import styles from "./index.module.css";

class Index extends React.Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <div className={styles.page_main}>
        <div className={styles.page_main_inner}>
          <div className={styles.recent_posts}></div>
          <div className={styles.aside_content}></div>
        </div>
      </div>
    );
  }
}

// Demo页面
export default Index;
