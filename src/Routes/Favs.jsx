import React, { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";
import Card from "../Components/Card";

const Favs = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <div className={`favs-container ${state.theme === 'dark' ? 'dark' : ''}`}>
      <h1>Favoritos</h1>
      {state.favorites.length === 0 ? (
        <div className="no-favorites">
          <i className="fas fa-heart-broken"></i>
          <p>Aún no has agregado ningún favorito.</p>
          <p>¡Explora y agrega tus dentistas favoritos!</p>
        </div>
      ) : (
        <div className="card-grid">
          {state.favorites.map(dentist => (
            <Card
              key={dentist.id}
              name={dentist.name}
              username={dentist.username}
              id={dentist.id}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favs;
