const TodoNew = (props) => {
  const { addNewTodo } = props;

  const handleClick = () => {
    alert("Click me");
  };
  const handleOnchange = (name) => {
    console.log(">>>> handleOnchange", name);
  };
  //   addNewTodo("manh");
  return (
    <div className="todo-new">
      <input
        type="text"
        onChange={(event) => handleOnchange(event.target.value)}
      />
      <button onClick={handleClick}>Add Todo</button>
    </div>
  );
};
export default TodoNew;
