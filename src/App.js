import React, { useEffect, useState } from "react";
import From from "./component/From";
import List from "./component/List";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("List")) || []
  );
  const [notification, setNotification] = useState("");
  const [check, setCheck] = useState(false);
  const [indexEdit, setIndex] = useState(0);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  
  const handleSubmit = () => {
    if (!check) {
      setTodoList([...todoList, inputValue]);
      setInputValue("");
      setNotification("Data Submitted Successfully");
    } else {
      const updatedList = [...todoList];
      updatedList[indexEdit] = inputValue;
      setTodoList(updatedList);
      setInputValue("");
      setCheck(false);
      setNotification("Data Updated Successfully");
    }
  };

  const update = (idx) => {
    setCheck(true);
    setIndex(idx);
    setInputValue(todoList[idx]);
  };

  const remove = (idx) => {
    const filteredArray = todoList.filter((_, i) => i !== idx);
    setTodoList(filteredArray);
    setNotification("Data removed successfully");
  };
  
  useEffect(() => {
    localStorage.setItem("List", JSON.stringify(todoList));
    setTimeout(() => {
      setNotification("");
    }, 900);
  }, [todoList]);

  return (
    <>
      <From
        message={notification}
        getValue={handleChange}
        handleSubmit={handleSubmit}
        inputValue={inputValue}
      />
      <List todoList={todoList} remove={remove} update={update} />
    </>
  );
};

export default App;
