import React from "react";

interface IProps {
  errors: string[];
}
const Errors: React.FC<IProps> = ({ errors }) => {
  return <ul>{errors && <li>{errors[0]}</li>}</ul>;
};

export default Errors;
