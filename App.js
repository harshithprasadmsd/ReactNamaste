import ReactDOM from "react-dom/client";
const resList = [
  {
    id: 1,
    name: "The Fancy Spoon",
    cuisine: "Italian",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
    address: {
      street: "123 Olive Street",
      city: "New York",
      state: "NY",
      zip: "10001",
    },
    contact: "555-1234",
    menu: [
      {
        id: 101,
        name: "Margherita Pizza",
        price: 12.99,
        ingredients: ["Tomato", "Mozzarella", "Basil", "Olive Oil"],
        image: "https://images.unsplash.com/photo-1556911073-52527ac437f5",
      },
      {
        id: 102,
        name: "Pasta Carbonara",
        price: 14.99,
        ingredients: ["Pasta", "Eggs", "Cheese", "Pepper", "Guanciale"],
        image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90",
      },
    ],
    operatingHours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "Closed",
      thursday: "11:00 AM - 10:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "11:00 AM - 9:00 PM",
    },
    reviews: [
      {
        reviewer: "John Doe",
        rating: 5,
        comment: "Fantastic pizza and great atmosphere!",
      },
      {
        reviewer: "Jane Smith",
        rating: 4,
        comment: "Loved the pasta, but the wait time was a bit long.",
      },
    ],
  },
  {
    id: 2,
    name: "Sushi Paradise",
    cuisine: "Japanese",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9",
    address: {
      street: "987 Sakura Lane",
      city: "San Francisco",
      state: "CA",
      zip: "94105",
    },
    contact: "555-5678",
    menu: [
      {
        id: 201,
        name: "Salmon Nigiri",
        price: 8.99,
        ingredients: ["Rice", "Salmon", "Wasabi"],
        image: "https://images.unsplash.com/photo-1512058564366-c9e3c8e9f6b8",
      },
      {
        id: 202,
        name: "Tuna Roll",
        price: 10.99,
        ingredients: ["Rice", "Tuna", "Seaweed"],
        image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90",
      },
    ],
    operatingHours: {
      monday: "12:00 PM - 9:00 PM",
      tuesday: "12:00 PM - 9:00 PM",
      wednesday: "12:00 PM - 9:00 PM",
      thursday: "12:00 PM - 9:00 PM",
      friday: "12:00 PM - 10:00 PM",
      saturday: "12:00 PM - 10:00 PM",
      sunday: "12:00 PM - 8:00 PM",
    },
    reviews: [
      {
        reviewer: "Satoshi Nakamoto",
        rating: 5,
        comment: "Best sushi in town!",
      },
      {
        reviewer: "Lisa Wong",
        rating: 4.5,
        comment: "Delicious and fresh, but a bit pricey.",
      },
    ],
  },
  {
    id: 3,
    name: "Burger Haven",
    cuisine: "American",
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1601924638868-3f297be8d80d",
    address: {
      street: "456 Burger Blvd",
      city: "Los Angeles",
      state: "CA",
      zip: "90001",
    },
    contact: "555-9876",
    menu: [
      {
        id: 301,
        name: "Classic Cheeseburger",
        price: 9.99,
        ingredients: [
          "Beef Patty",
          "Cheese",
          "Lettuce",
          "Tomato",
          "Onions",
          "Bun",
        ],
        image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90",
      },
      {
        id: 302,
        name: "Bacon Burger",
        price: 11.99,
        ingredients: [
          "Beef Patty",
          "Bacon",
          "Cheese",
          "Lettuce",
          "Tomato",
          "Bun",
        ],
        image: "https://images.unsplash.com/photo-1512058564366-c9e3c8e9f6b8",
      },
    ],
    operatingHours: {
      monday: "11:00 AM - 9:00 PM",
      tuesday: "11:00 AM - 9:00 PM",
      wednesday: "11:00 AM - 9:00 PM",
      thursday: "11:00 AM - 9:00 PM",
      friday: "11:00 AM - 10:00 PM",
      saturday: "11:00 AM - 10:00 PM",
      sunday: "11:00 AM - 8:00 PM",
    },
    reviews: [
      {
        reviewer: "Mark Johnson",
        rating: 4,
        comment: "Great burgers, but the fries could be better.",
      },
      {
        reviewer: "Samantha Brown",
        rating: 3.5,
        comment: "Good food, but service was slow.",
      },
    ],
  },
];

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
const RestaurantCard = ({ name, cuisine, rating, image }) => {
  return (
    <div className="res-card" style={styleCard}>
      <img alt="res-image" className="res-logo" src={image} />
      <h3>{name}</h3>
      <h4>{cuisine}</h4>
      <h4>{rating} </h4>
    </div>
  );
};
const Body = () => {
  for (var i = 0; i < resList.length; i++) {
    console.log(resList[i].name);
  }
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="resto-container">
        {resList.map((restaurant) => (
          <RestaurantCard
            name={restaurant.name}
            cuisine={restaurant.cuisine}
            rating={restaurant.rating}
            image={restaurant.image}
          />
        ))}
      </div>
    </div>
  );
};
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
