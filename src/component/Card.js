import React from "react";

const Card = ({img,rating,review,country,title,price,openSpots}) => {  
  return (
    <div className="card">
      <div className="container">
        <img src={`/img/${img}`} alt="katie" />
        {!openSpots && <h4>SOLD OUT</h4>}
      </div>
      <div className="description">
        <div className="desc-title">
          <img src="/img/star.png" alt="star" />
          <span>{rating}</span>
          <span>({review})</span>
          <span>.</span>
          <span>{country}</span>
        </div>
        <div className="desc-details">
          <p>{title}</p>
          <h4>From ${price} <span>/ person</span></h4>
        </div>
      </div>
    </div>
  );
};

export default Card;
