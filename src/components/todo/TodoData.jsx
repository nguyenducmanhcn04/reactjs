const TodoData = (props) => {
  //   console.log(props);
  const { name, age, data } = props;
  console.log("check >>> ", props);
  return (
    <div className="todo-data">
      <div>My name is {name}</div>
      <div className="">Learning React</div>
      <div className=""> Watching Youtube</div>
      <div className="">{JSON.stringify(props.todoList)}</div>
    </div>
  );
};
export default TodoData;
