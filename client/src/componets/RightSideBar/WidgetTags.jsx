import React from "react";
import "./RightSideBar.css";
const WidgetTags = () => {
  const tags = [
    "c",
    "express",
    "html",
    "mongodb",
    "mern",
    "java",
    "firebase",
    "css",
    "mysql",
    "next.js",
    "angular",
    "javascript",
    "node.js",
    "reactjs",
    "PHP",
  ];

  return (
    <div className="widget-tags">
      <h4>Watched tags</h4>
      <div className="widget-tags-div">
        {tags.map((tag) => (
          <p key={tag}>{tag}</p>
        ))}
      </div>
    </div>
  );
};

export default WidgetTags;
