import React from "react";

const Form = ({ getValue, handleSubmit,message, inputValue}) => {
    
  return (
    <div>
    <p>{message}</p>
      <div className="form">
        <input  onChange={getValue} value={inputValue} className="w-[400px] bg-red-900 p-3 text-white" placeholder="Enter List item"/>
        <button onClick={handleSubmit} className="w-[150px] bg-black p-3 text-white text-lg">Submit</button>
      </div>
    </div>
  );    
};

export default Form;