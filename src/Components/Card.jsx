import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";

const Card = ({ name, username, id, imageUrl }) => {
  const { state, dispatch , addFavorite, removeFavorite} = useContext(ContextGlobal);
  const isFavorite = state.favorites.some(dentist => dentist.id === id);

  const handleFavorite = () => {
    const dentist = {id, name, username};
    if (isFavorite){
      removeFavorite(id);
    }else{
      addFavorite(dentist);
    }
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
    </div>
  );
};

export default Card;
