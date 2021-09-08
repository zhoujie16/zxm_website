import React, { useEffect, useCallback, useState } from "react";

const Index = (props: any) => {
  // fas fa-chevron-down expand
  const { itemData } = props;
  const { name, icon, type, children } = itemData;
  return (
    <div className="w_nav_item">
      <div className="w_nav_item_inner">
        <div className="w_nav_item_icon">
          <i className={icon}></i>
        </div>
        <div className="w_nav_item_name">{name}</div>
        {type == "drop" ? (
          <i className="fas fa-chevron-down expand w_nav_item_drop"></i>
        ) : (
          ""
        )}
      </div>
      {type == "drop" ? (
        <div className="w_nav_item_select_drop">
          <div className="w_nav_item_drop_inner">
            {children.map((x) => (
              <div className="w_nav_item_drop_item">
                <i className={x.icon}></i>
                {x.name}
              </div>
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

//
export default Index;
