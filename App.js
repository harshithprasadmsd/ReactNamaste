const parent = React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},[React.createElement("h1",{id:"ee"},"this is heading"),React.createElement("h2",{id:"ee"},"this is heading2")]));
const heading = React.createElement("h1",{"id":"heading"},"hello world form React!");
const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent);