'use client'
import React, { useEffect, useState } from 'react';
import CharacterList from '@/components/CharacterList'

const HomePage = () => {
  const [personajes, setPersonajes] = useState([]);
  const [id, setId] = useState("1");

  useEffect(() => {
    fetchName()
  }, []
  )

  const fetchName = async () => {
    const response = await fetch(`https://dragonball-api.com/api/characters/${id}`);
    const data = await response.json();
    setPersonajes([data]);
    console.log([data])
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchName();
  };

  const handleChange = (e) => {
    setId(e.target.value);
  };

  return (
    <div >
        
      <header >
        <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-lg my-4">
          <h1 className="text-4xl font-bold text-center mb-6">DRAGON BALL Z</h1>
          <input type="text" className='border rounded border-gray-300 p-4 w-full mb-6' placeholder='Numero de personaje' value={id} onChange={handleChange} />
          <button type="submit" className='bg-[#1b3840] text-white p-2 ml-2 rounded'>Buscar</button>
        </form>
      </header>
      <CharacterList datos={personajes}/>
    </div>
  );
};

export default HomePage
