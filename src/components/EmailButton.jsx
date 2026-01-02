import React from "react";
import Button from "./Button";

const EmailButton = () => {
  const handleEmailClick = () => {
    window.open('mailto:hr@mechyam.com', '_blank');
  };

  return (
    <div onClick={handleEmailClick}>
      <Button text="Email" bgColor="bg-blue-600" />
    </div>
  );
};

export default EmailButton;