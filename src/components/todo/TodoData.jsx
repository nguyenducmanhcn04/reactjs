const TodoData = (props) => {
  //   console.log(props);
  const { todoList } = props;

  return (
    <div className="todo-data">
      {todoList.map((item, index) => {
        return (
          <div className="">
            {item.name}
            <button>Delete</button>
          </div>
        );
      })}
    </div>
  );
};
export default TodoData;
