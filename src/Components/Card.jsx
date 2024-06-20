import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";

const Card = ({ name, username, id, imageUrl }) => {
  const { state, addFavorite, removeFavorite} = useContext(ContextGlobal);
  const navigate = useNavigate();
  const isFavorite = state.favorites.some(dentist => dentist.id === id);

  const handleFavorite = () => {
    const dentist = {id, name, username};
    if (isFavorite){
      removeFavorite(id);
    }else{
      addFavorite(dentist);
    }
  };

  const handleDetails = () => {
    navigate(`/dentist/${id}`);
  };

  return (
    <div className="card">
      <Link to={`/dentist/${id}`}>
      <img src="../images/doctor.jpg" alt={`${name}`} className="card-img" />
      </Link>
      <h2>{name}</h2>
      <h3>{username}</h3>
      <p>ID: {id}</p>
      <button
        onClick={handleFavorite}
        className={`favButton ${isFavorite ? 'remove' : ''}`}
      >
        {isFavorite ? 'Remove from favs' : 'Add fav'}
      </button>
      <button onClick={handleDetails} className="details-button">Dentist details</button>
    </div>
  );
};

export default Card;
