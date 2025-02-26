const TodoData = (props) => {
  //   console.log(props);
  const { todoList, deleteTodo } = props;
  const handleClick = (id) => {
    deleteTodo(id);
  };
  return (
    <div className="todo-data">
      {todoList.map((item, index) => {
        return (
          <div className="">
            {item.name}
            <button
              onClick={() => {
                handleClick(item.id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default TodoData;
