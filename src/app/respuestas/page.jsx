'use client'
import React from 'react'
import {bd} from '../utils/bd'
import TarjetaUsuario from '@/components/TarjetaUsuario'

const Respuestas = () => {
  return (
    <div className='flex flex-col'>
        Respuestas de mis entradas
        {
            bd.map((usuario, index)=>(
                <TarjetaUsuario usuario={usuario} key={index}/>
            ))
        }
      
    </div>
  )
}

export default Respuestas;
