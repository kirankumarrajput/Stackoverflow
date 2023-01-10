import React from "react";
import LeftSideBar from "../../componets/LeftSideBar/LeftSideBar";
import HomeSideBar from "../../componets/HomeSideBar/HomeSideBar";
import RightSideBar from "../../componets/RightSideBar/RightSideBar";
import "../../App.css";

const Home = () => {
  return (
    <div className="home-container-1">
      <LeftSideBar />
      <div className="home-container-2">
        <HomeSideBar />
        <RightSideBar />
      </div>
    </div>
  );
};
export default Home;
