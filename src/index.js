import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import NavBar from "./component/NavBar";
import Hero from "./component/Hero";
import Card from "./component/Card";
import Data from "./Data";

const App = () => {
  const arr = Data.map((x) => {
    return <Card 
      key={x.id}
      img={x.coverImg}
      rating={x.stats.rating}
      review={x.stats.reviewCount}
      country={x.location}
      title={x.title}
      price={x.price}
      openSpots={x.openSpots}
    />
  });
  return (
    <>
      <NavBar />
      <Hero />
      <div className="cards-container">
        {arr}
      </div>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
