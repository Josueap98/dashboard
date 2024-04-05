import React from 'react'

const Fetcher = ({ datos }) => {
  return (
    <div className='bg-gray-100 p-4'>
      <h1 className='text-center text-4xl font-bold mb-8'>Marvel API</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {
          datos.map(({id, name, thumbnail: { path, extension }, description}) => (
            <div key={id} className='bg-white rounded-lg shadow-md p-4'>
              <h2 className='text-2xl font-bold text-center'>{name}</h2>
              <div className='flex items-center justify-center mt-4'>
                <img src={`${path}.${extension}`} alt={name} className='w-20 h-20 rounded-full' />
              </div>
              <p className='text-gray-700 text-justify mt-4'>{description}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Fetcher