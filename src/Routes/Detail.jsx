import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const params = useParams();

  const [dentista, setDentista] = useState();

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const getDentista = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${params.id}`
    );
    const data = await response.json();
    setDentista(data);
  };

  useEffect(() => {
    getDentista();
  }, []);

  console.log(dentista);

  return (
    <>
      <h1>Detail Dentist {params.id} </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <table className="tabla-detalle">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{dentista?.name}</td>
            <td>{dentista?.email}</td>
            <td>{dentista?.phone}</td>
            <td>{dentista?.website}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Detail;
