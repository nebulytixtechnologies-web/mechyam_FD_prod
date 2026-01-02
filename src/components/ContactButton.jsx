import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const ContactButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contact');
  };

  return (
    <div onClick={handleClick}>
      <Button text="Contact" bgColor="bg-blue-600" />
    </div>
  );
};

export default ContactButton;