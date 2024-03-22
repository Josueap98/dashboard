import React from 'react'

/**
 * 
 *  
 * @returns  Registro de los usarios
 */
const TarjetaUsuario = ({usuario}) => {

  const {nombre, correo, fechaN, numeroC, pais}=usuario

return(
  <div className='bg-slate-500 m-2 p-2 h-[50] cursor-pointer text-lime-400 rounded-lg'>
    <p><span className='text-xl text-white'>Nombre:</span> {nombre}</p>
    <p><span className='text-xl text-white'>Correo:</span> {correo}</p>
    <p><span className='text-xl text-white'>Fecha de Naciminento:</span> {fechaN}</p>
    <p><span className='text-xl text-white'>Celular:</span> {numeroC}</p>
    <p><span className='text-xl text-white'>País:</span> {pais}</p>
  </div>
)
}

export default TarjetaUsuario;
