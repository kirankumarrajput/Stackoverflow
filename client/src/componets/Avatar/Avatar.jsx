import React from "react";

const Avatar = ({
  children,
  color,
  backgroundColor,
  px,
  py,
  borderRadius,
  fontSize,
  textAlign,
  cursor,
}) => {
  const style = {
    color: color || "white",
    backgroundColor: backgroundColor || "black",
    padding: `${py} ${px}` || "20px 20px",
    borderRadius: borderRadius || "5px",
    fontSize: fontSize,
    textAlign: textAlign || "center",
    cursor: cursor || null,
  };
  return <div style={style}>{children}</div>;
};

export default Avatar;
