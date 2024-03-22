'use client'
import React, { useState } from 'react';

// definr  estados iniciales para el nombre y imagen del pokemon
const BuscarPokemon = () => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');


// funcion para limpiar los resultados búsqueda
  const limpiarNombre = () => {
    setName(''); //nombre a vacio
  };

// funcion para buscar el pokemon en la API  
  const buscarAPI = async () => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await response.json();
      if (response.ok) {
        setImage(data.sprites.front_default);
        setName(data.name);
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error(error);
    }
    //limpiarNombre();
  };

  return (
    <div className=''>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border rounded border-gray-300 p-4"
        placeholder="Nombre de pokemon"
      />
      <button onClick={buscarAPI} className="bg-[#1b3840] text-white p-2 ml-2 rounded">
        Buscar
      </button>
      {image && <img src={image} alt={name} className="w-40 h-40" />}
      {name && <p className="mt-2">Nombre: {name}</p>}
    </div>
  );
};

export default BuscarPokemon