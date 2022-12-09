import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextGlobal } from './utils/global.context';

const Card = ({ name, username, id }) => {
  const { favs, setFavs } = useContext(ContextGlobal);

  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(favs));
  });

  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
    if (favs.some((favsId) => favsId === id)) {
      alert('El dentista ya se encontraba agregado');
    } else {
      alert('El dentista fue agregado a favoritos');
      setFavs((prevFavs) => [...prevFavs, { name, username, id }]);
    }
  };

  return (
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}

      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <img src="images/doctor.jpg" alt="avatar" />
      <Link to={`/dentista/${id}`}>
        <h2>{name}</h2>
      </Link>
      <h3>{username}</h3>
      <button onClick={addFav} className="favButton">
        ⭐
      </button>
    </div>
  );
};

export default Card;
