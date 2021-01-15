import React from "react";
import lokaly from "lokaly";

const HomePage = () => {
  return (
    <>
      <div className="block lessMarginTop">
        <div className="container-fluid">
          <div className="titleHolder">
            <h2>{lokaly("home")}</h2>
          </div>
          {/* CONTENT HERE */}
        </div>
      </div>
    </>
  );
};

export default HomePage;
