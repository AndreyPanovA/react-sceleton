import React from "react";
import "./style.less";
const Waves = () => (
  <div className="LayoutAnimation__wrap LayoutAnimation_active">
    <div className="LayoutAnimation__item">
      <div className="Wave"></div>
    </div>
    <div className="LayoutAnimation__item">
      <div className="Wave"></div>
    </div>
    <div className="LayoutAnimation__item">
      <div className="Wave"></div>
    </div>
  </div>
);
export default React.memo(Waves);
