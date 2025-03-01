import React from 'react';

const Card = () => {
  return (
    <div className="card color " style={{ width: "18rem" }}>
      <img src="https://imgs.search.brave.com/9_ffpQpbN7MywrC5um2SJxdmIlYYgaq8Aws5P0GO4yI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA4LzE3LzM2Lzkx/LzM2MF9GXzgxNzM2/OTEwMV9VNU5rQVlR/MGNsUWM3cEpsVWFZ/SGh4Y1dyZ1lTSk9u/US5qcGc" className="card-img-top" alt="Card Image" />
      <div className="card-body">
        <h5 className="card-title">Card Title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  );
}

export default Card;
