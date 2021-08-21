import React from "react";

export const Notification = ({ message }) => {
  if (message == null) {
    return null;
  }
  const notificationStyle = {
    color: "blue",
    fontSize: " 15px",
    borderStyle: "solid",
    padding: "10px",
    width :"500px"
  };
  return (
    <div>
      <div style={notificationStyle} className="error">
        {message}
      </div>
    </div>
  );
};
