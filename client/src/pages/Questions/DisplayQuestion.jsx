import React from "react";
import LeftSideBar from "../../componets/LeftSideBar/LeftSideBar";
import RightSideBar from "../../componets/RightSideBar/RightSideBar";
import QuestionsDetails from "./QuestionsDetails";

const DisplayQuestion = () => {
  return (
    <div className="home-container-1">
      <LeftSideBar />
      <div className="home-container-2">
        <QuestionsDetails />
        <RightSideBar />
      </div>
    </div>
  );
};

export default DisplayQuestion;
