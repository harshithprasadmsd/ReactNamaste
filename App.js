import ReactDOM from "react-dom";

//create a react element
const headingElement = <h1>this is react element</h1>;

//create a react component (functional)
const HeadingComponent = () => (
  <div>
    <h1>this is h1 inside fc</h1>
    headingElement
    {SubHeading}
    <SubHeading />
  </div>
);
//create another react component
const SubHeading = () => <h3>this is subheading</h3>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent></HeadingComponent>);
