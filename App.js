import React from "react";
import ReactDOM from "react-dom/client";
//React Element
// const heading =React.createElement(
//   "h1",
//   {id:"heading"},
//   "Namaste React 🚀"
//   );
const Title = () => (
  <h1 className="head" TabIndex="5">
    Namaste React 🚀
  </h1>
);
const elem = <span>React Element</span>;
const title = (
  <h1 className="head" TabIndex="5">
    {elem}
    Namaste React using JSX🚀
    <Title />
  </h1>
);
//sconst data = api.getData();

//Component  Composition
const HeaderComponent = () => (
  <React.Fragment>
    <>
      <div id="container">
        {title}
        <Title />
        {Title()}
        {5 + 8}
        <Title></Title>
        <h1 className="heading">Namaste React Fuctional Component </h1>
      </div>
      <div></div>
    </>
  </React.Fragment>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
