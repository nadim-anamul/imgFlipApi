import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ url, name, boxCount, id }) => {
  return (
    <div className="col-12 col-lg-4 mb-5">
      <div className="card">
        <img src={url} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <Link className="btn btn-primary" to={`meme/` + id} state={{ id, name, url, boxCount }}>
            Edit
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
