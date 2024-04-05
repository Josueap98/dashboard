import React from 'react'

const CharacterList = ({ datos }) => {
  return (
    <div className='h-auto'>
      {datos.map((personaje, index) => (
        <div
          key={personaje.id}
          className={`flex flex-row ${index % 2 === 0 ? "bg-gray-200" : "bg-gray-100"} rounded-lg p-4 my-4  flex justify-center  `}
        >
          <div className="w-40 h-50">
            <h1 className="text-xl font-bold mb-2">{personaje.id}</h1>
            <img src={personaje.image} alt="" className="w-50 rounded-lg" />
          </div>
          <div className="w-60 h-50 p-6 y-10">
            <h2 className="text-lg font-bold mb-2">{personaje.originPlanet.name}</h2>
            <img src={personaje.originPlanet.image} alt="" className="w-50 rounded-lg" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CharacterList
