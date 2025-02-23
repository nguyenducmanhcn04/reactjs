const TodoData = (props) => {
  //   console.log(props);
  const { name, age, data } = props;
  return (
    <div className="todo-data">
      <div>My name is {name}</div>
      <div className="">Learning React</div>
      <div className=""> Watching Youtube</div>
    </div>
  );
};
export default TodoData;
