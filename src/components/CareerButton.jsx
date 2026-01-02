import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const CareerButton = () => (
  <Link to="/careers">
  <Button text="Careers" bgColor="bg-blue-600" />
</Link>

);

export default CareerButton;