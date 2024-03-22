'use client'
import React, { useState } from 'react';

// definr  estados iniciales para el nombre y imagen del pokemon
const Marvel = () => {
  const [image, setImage] = useState('');

// funcion para buscar el pokemon en la API  
  const buscarAPI = async () => {
    try {
      const response = await fetch(`http://gateway.marvel.com/v1/public/comics?ts=1&apikey=15803cbbf2205a5627dc8ed41df2962d&hash=8b2e087a1e94b15d2a81bcdaf05e56bf`);
      const data = await response.json();
      if (response.ok) {
        setImage(character.image);
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error(error);
    }
    //limpiarNombre();
  };

  return (
    <div>
      marvel heroes
      {image && <img src={image} className="w-40 h-40" />}
    </div>
  );
};

export default Marvel