import React, { useEffect, useCallback, useState } from "react";
import PageMainAside from "./../PageMainAside";
import RecentPostList from "./../RecentPostList";

const Index = () => {
  return (
    <div className="w_page_main">
      <div className="page_main_inner">
        <RecentPostList />
        <PageMainAside />
      </div>
    </div>
  );
};

//
export default Index;
