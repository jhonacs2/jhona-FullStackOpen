import React from "react";

export default function Notification({ notification }) {
  console.log(notification)
  const alertStyle = {
    backgroundColor: "green",
    padding: "1rem",
    fontSize: "16px",
    border: "greenyellow",
  };
  if (notification === null) {
    return null;
  }
  const alert = notification.includes('delete') || 
                notification.includes('error') || 
                notification.includes('ValidationError')  
  if(alert){
    alertStyle.backgroundColor = "red"
  }

  return (
    <div style={alertStyle}>
      <p>{notification}</p>
    </div>
  );
}
