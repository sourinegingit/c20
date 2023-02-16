import React from "react";
import "./style.css";

const Input = ({ onChange,id,name,lable, placeholder, type }) => {
  return (
    <div>
      <label>{lable}</label>
      <input name={name} type={type} placeholder={placeholder} id={id} onChange={onChange}/>
    </div>
  );
};
export default Input;
