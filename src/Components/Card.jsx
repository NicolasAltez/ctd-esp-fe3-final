import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";

const Card = ({ name, username, id, imageUrl }) => {
  const { state, dispatch } = useContext(ContextGlobal);

  const addFav = () => {
    const favs = JSON.parse(localStorage.getItem('favs')) || [];
    const newFav = { name, username, id, imageUrl };
    if (!favs.some(fav => fav.id === id)) {
      favs.push(newFav);
      localStorage.setItem('favs', JSON.stringify(favs));
      dispatch({ type: 'SET_DENTISTS', payload: [...state.dentists] });
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
      <button onClick={addFav} className="favButton">
        Add fav
      </button>
    </div>
  );
};

export default Card;
