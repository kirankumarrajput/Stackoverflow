import React from "react";
import "./HomeMainBar.css";
import { Link } from "react-router-dom";
const Questions = ({ question }) => {
  return (
    <div className="display-question-container">
      <div className="display-votes-ans">
        <p>{question.votes}</p>
        <p>votes</p>
      </div>
      <div className="display-votes-ans">
        <p> {question.noOfAnswers} </p>
        <p>answer</p>
      </div>
      <div className="display-question-details">
        <Link to={`/Questions/${question._id}`} className="question-title-link">
          {" "}
          <p> {question.questionTitle} </p>{" "}
        </Link>
      <div className="display-tags-time">
        <div className="display-tags">
          {question.questionTags.map((tag) => (
            <p key={tag}>{tag}</p>
          ))}
        </div>
      </div>
      </div>
        <p className="display-time">
          asked {question.askedOn} {question.userposted}
        </p>
    </div>
  );
};

export default Questions;
