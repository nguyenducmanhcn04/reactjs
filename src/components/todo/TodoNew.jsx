const TodoNew = (props) => {
  const { addNewTodo } = props;
  //   addNewTodo("manh");
  return (
    <div className="todo-new">
      <input type="text" />
      <button>Add Todo</button>
    </div>
  );
};
export default TodoNew;
