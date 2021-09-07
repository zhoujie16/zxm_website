import React, { useEffect, useCallback, useState } from "react";

const Index = (props: any) => {
  // fas fa-chevron-down expand
  const { itemData } = props;
  const { name, icon, type } = itemData;
  return (
    <div className="w_nav_item">
      <div className="w_nav_item_inner">
        <div className="w_nav_item_icon">
          <i className={icon}></i>
        </div>
        <div className="w_nav_item_name">{name}</div>
        {type == "drop" ? <i className="fas fa-chevron-down expand w_nav_item_drop"></i> : ""}
      </div>
    </div>
  );
};

//
export default Index;
