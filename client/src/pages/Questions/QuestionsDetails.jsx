import React from "react";
import { Link, useParams } from "react-router-dom";
import "./Question.css";
import Avatar from "../../componets/Avatar/Avatar";
import DisplayAnswer from "./DisplayAnswer";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const QuestionsDetails = () => {
  const { id } = useParams();

  const questionList = [
    {
      _id: "1",
      upVotes: 3,
      downVotes: 2,
      noOfAnswers: 4,
      questionTitle: "What is class ?",
      questionBody: "Question Body",
      questionTags: ["javascript", "R", "python"],
      userPosted: "Kiran Kumar",
      askedOn: "1 jan 1",
      userId: 1,
      answer: [
        {
          answerBody: "Answer",
          userAnswered: "Raju",
          answeredOn: "jan 2",
          userId: 2,
          _id: 1,
        },
      ],
    },
  ];

  return (
    <div className="question-details-page">
      {questionList === null ? (
        <h1>loading...</h1>
      ) : (
        <>
          {questionList
            .filter((question) => question._id === id)
            .map((question) => (
              <div key={question._id}>
                <section className="question-deatils-container">
                  <h1>{question.questionTitle}</h1>
                  <div className="question-details-container-2">
                    <div className="question-votes">
                      <KeyboardArrowUpIcon className="vote-icon" />
                      <p>{question.upVotes - question.downVotes}</p>
                      <KeyboardArrowDownIcon className="vote-icon" />
                    </div>
                    <div style={{ width: "100%" }}>
                      <p className="question-body">{question.questionBody}</p>
                      <div className="question-details-tags">
                        {question.questionTags.map((tag) => (
                          <p key={tag}>{tag}</p>
                        ))}
                      </div>
                      <div className="question-actions-user">
                        <div>
                          <button type="button">Share</button>
                          <button type="button">Delete</button>
                        </div>
                        <div>
                          <p>Asked {question.askedOn}</p>
                          <Link
                            to={`/User/${question.userId}`}
                            className="user-link"
                            style={{ color: "#0086d8" }}
                          >
                            <Avatar backgroundColor="orange" px="8px" py="5px">
                              {question.userPosted.charAt(0).toUpperCase()}
                            </Avatar>
                            <div>{question.userPosted}</div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {question.noOfAnswers !== 0 && (
                  <section>
                    <h3>{question.noOfAnswers} Answers</h3>
                    <DisplayAnswer key={question._id} question={question} />
                  </section>
                )}

                <section className="post-ans-container">
                  <h3>Your Answer</h3>
                  <form action="">
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <br />
                    <input
                      type="submit"
                      className="post-ans-btn"
                      value="Post Your Answer"
                    />
                  </form>

                  <p>
                    Browse other Question tagged
                    {question.questionTags.map((tag) => (
                      <Link to="/Tags" key={tag} className="ans-tags">
                        {" "}
                        {tag}{" "}
                      </Link>
                    ))}
                    or
                    {
                      <Link
                        to="/AskQuestion"
                        style={{ textDecoration: "none", color: "#009dff" }}
                      >
                        {" "}
                        ask your own question
                      </Link>
                    }
                  </p>
                </section>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default QuestionsDetails;
