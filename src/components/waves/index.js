import React from "react";
import "./style.less";
const Waves = () => (
  <div className="Waves__wrap">
    <div className="Waves__item">
      <div className="Wave"></div>
    </div>
    <div className="Waves__item">
      <div className="Wave"></div>
    </div>
    <div className="Waves__item">
      <div className="Wave"></div>
    </div>
  </div>
);
export default React.memo(Waves);
