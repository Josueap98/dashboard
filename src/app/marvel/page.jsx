'use client'
import React, { useState } from 'react';
import Fetcher from '@/components/Fetcher';
import md5 from 'crypto-js/md5';

const Page = () => {
  const [personajes, setPersonajes] = useState([]);
  const publicApiKey = '15803cbbf2205a5627dc8ed41df2962d'; 
  const privateApiKey = '5e96449a7eae20308ffe4937e91df880e20d4c6f';

  const fetchCharacters = async () => {
    const ts = new Date().getTime();
    const hash = md5(ts + privateApiKey + publicApiKey).toString();
    const url = `https://gateway.marvel.com/v1/public/characters?apikey=${publicApiKey}&ts=${ts}&hash=${hash}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setPersonajes(data.data.results);
      console.log(data.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchCharacters();
  };

  return (
    <div className='flex flex-col h-screen m-4 gap-5  w-[85%]'>
      <form onSubmit={handleSubmit}>
        <button type="submit" className='rounded border-stone-900'>Personajes de Marvel</button>
      </form>
      <Fetcher datos={personajes}/>
    </div>
  );
};

export default Page;