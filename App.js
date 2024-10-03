import ReactDOM from "react-dom";

const AppLayout = () => {
  return (
    <div>
      <h1>app is rendering </h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
