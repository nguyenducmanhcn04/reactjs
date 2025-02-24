import { useState } from "react";

const TodoNew = (props) => {
  const [valueInput, setValueInput] = useState();
  const { addNewTodo } = props;
  const handleClick = () => {
    addNewTodo(valueInput);
  };
  const handleOnchange = (name) => {
    setValueInput(name);
  };
  //   addNewTodo("manh");
  return (
    <div className="todo-new">
      <input
        type="text"
        onChange={(event) => handleOnchange(event.target.value)}
      />
      <button onClick={handleClick}>Add Todo</button>
      <div className=""> My text input is: {valueInput} </div>
    </div>
  );
};
export default TodoNew;
