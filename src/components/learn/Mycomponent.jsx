//component = js + html + css;

import "./style.css";
const MyComponent = () => {
  // const hoidanit = 24;
  // const hoidanit = "hoidanit";
  const hoidanit = {
    name: "Nguyen Duc Manh",
    age: 24,
  };

  return (
    // fragment
    <>
      <div> {JSON.stringify(hoidanit)} Nguyen Duc Manh</div>
      <div>{console.log("nguyen duc manh")}</div>
      <div className="child" style={{ borderRadius: "10px" }}>
        Bac Giang
      </div>
    </>
  );
};
export default MyComponent;
