import ReactDOM from "react-dom";

const Header = () => (
  <div className="header">
    <div className="logoContainer">
      <img
        className="logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ8JIwobDv1bDxu1v2Nver2VKYMxm3zdU_wg&s"
      ></img>
    </div>
    <div className="nav-items">
      <ul>
        <li>Home </li>
        <li>About Us</li>
        <li>Contact Us </li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);
const styleCard = {
  backgroundColor: "#f0f0f0",
};
const RestaurantCard = () => {
  return (
    <div className="res-card" style={styleCard}>
      <img
        alt="res-image"
        className="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/5/26/6adf18b9-0a2e-45ad-b587-3f714762f7bd_898044.jpg"
      />
      <h3>Meghana Food</h3>
      <h4>Biriyani,North Indian,Asian</h4>
      <h4>4.4 stars </h4>
      <h4>40 minutes</h4>
    </div>
  );
};
const Body = () => (
  <div className="body">
    <div className="search">search</div>
    <div className="resto-container">
      <RestaurantCard />
    </div>
  </div>
);
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
