import React from "react";

export default function Bet(props) {
  const { bet } = props;
  return (
    <div key={bet._id} className="card center">
      {/* <a href={`/bet/${bet._id}`}>
        <img className="large" src={bet.image} alt={bet.description} />
      </a> */}

      <div className="card-body">
        <p>{bet.description.toUpperCase()}</p>

        <h1>{`Get up to ${bet.price} in Free Bets`}</h1>
        <a href={`/bet/${bet._id}`}>
          <button className="block">Join Now</button>
        </a>
      </div>
    </div>
  );
}
