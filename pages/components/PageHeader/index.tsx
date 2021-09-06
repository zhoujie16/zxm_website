import React, { useEffect, useCallback, useState } from "react";
import styles from "./index.module.css";
import PageNav from "./../PageNav";

class Index extends React.Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <div className={`${styles.page_header} ${styles.full_page}`}>
        <PageNav />
        <div className={styles.blog_name_center}>
周小米的博客
        </div>
      </div>
    );
  }
}

// Demo页面
export default Index;
