import React from "react";
import {  useLocation, useNavigate } from "react-router-dom";
//  useLocation is hook
import Questions from "./Questions";
import "./HomeMainBar.css";

const HomeMainBar = () => {
  const navigate = useNavigate();
  // to navigate page
  const user = 1;
  const location = useLocation();
  //useLocation() function can  return current page {{{{ It is hooks }}}}

  // const questionList =null;
  const questionList = [
    {
      _id: 1,
      upVotes:3,
      downVotes:2,

      votes: 3,


      noOfAnswer: 0,
      questionTitle: "What is class ?",
      questionBody: "It meant to be",
      questionTags: ["javascript", "R", "python"],
      userPosted: "mano",
      askedOn: "1 jan 1",

      useId:1,

      answer: [{
        answerBody:"Answer",
        userAnsered: 'kumar',
        anseredon:"jan 2",
        userId:2,
      }
      ]
    },
    {
      _id: 2,
      votes: 0,
      noOfAnswer: 0,
      questionTitle: "What is a function?",
      questionBody: "It meant to be",
      questionTags: ["javascript", "R", "java", "c", "Golang", "python"],
      userPosted: "mano",
      askedOn: "1 jan 1",
    },
    {
      _id: 3,
      votes: 0,
      noOfAnswer: 0,
      questionTitle: "What is Css?",
      questionBody: "It meant to be",
      questionTags: ["javascript", "R", "python"],
      userPosted: "mano",
      askedOn: "1 jan 1",
    },
    {
      _id: 4,
      votes: 0,
      noOfAnswer: 0,
      questionTitle: "What is express.js?",
      questionBody: "It meant to be",
      questionTags: ["javascript", "R", "python"],
      userPosted: "mano",
      askedOn: "1 jan 1",
    },
  ]

  const checkAuth = () => {
    if (user === null) {
      alert("Please login or sign up to ask a question.");
      navigate("./Auth");
    } else {
      navigate("/AskQuestion");
    }
  };

  return (
    <div className="main-bar">
      <div className="main-bar-header">
        {location.pathname === "/" ? (
          <h1>Top Questions</h1>
        ) : (
          <h1>All Questions</h1>
        )}

        {/* route ok addition ok */}

        <button onClick={checkAuth} className="ask-btn">
          Ask Question
        </button>
      </div>

      <div>
        {questionList === null ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <p>{questionList.length} questions</p>
            {questionList.map((question) => (
              <>
                <Questions question={question} />
              </>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default HomeMainBar;
