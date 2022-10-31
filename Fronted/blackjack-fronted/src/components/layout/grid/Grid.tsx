import OpenPage from "../../../pages/landing/OpenPage";
import React, { memo } from "react";
import "./Grid.scss";

const Grid: React.FC = () => {
  return (
    <div id="grid" className="justify-center content-center relative">
      <OpenPage />
    </div>
  );
};

export default memo(Grid);
