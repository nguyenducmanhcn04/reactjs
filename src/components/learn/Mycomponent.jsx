//component = js + html + css;

import "./style.css";
const MyComponent = () => {
  return (
    // fragment
    <>
      <div> Nguyen Duc Manh</div>
      <div className="child" style={{ borderRadius: "10px" }}>
        Bac Giang
      </div>
    </>
  );
};
export default MyComponent;
