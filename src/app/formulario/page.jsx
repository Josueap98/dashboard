'use client'
import { bd } from "../utils/bd";
import { useState } from "react";

const Formulario = () => {
  const [formValues, setFormValues] = useState({
    nombre: '',
    correo: '',
    fechaN: '',
    numeroC: '',
    pais: '',
  });

  function validarDatos(event){
    event.preventDefault()

    setFormValues({
      nombre:'',
      correo:'',
      fechaN:'',
      numeroC:'',
      pais:'',
    })

    console.log(formValues);
    bd.push({
      nombre:formValues.nombre,
      correo:formValues.correo,
      fechaN:formValues.fechaN,
      numeroC:formValues.numeroC,
      pais:formValues.pais,
    })
  }

  return (
    <form  className="w-full max-w-lg m-auto py-10 mt-10 px-10 border" onSubmit={validarDatos}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            onChange={e => setFormValues({...formValues,nombre: e.target.value})}
            value={formValues.nombre}
            name="name"
            placeholder="Introduce tu nombre completo"
            className="appearance-none border rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Correo
          </label>
          <input
            type="email"
            id="email"
            onChange={e => setFormValues({...formValues,correo:e.target.value})}
            value={formValues.correo}
            name="email"
            placeholder="Introduce tu correo electronico"
            className="appearance-none border rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div>
          <label htmlFor="fechaN" className="block text-gray-700 font-bold mb-2" >
            Fecha Nacimiento
          </label>
          <input
          type="date"
          id="fechaN"
          onChange={e =>setFormValues({...formValues,fechaN:e.target.value})}
          value={formValues.fechaN}
          name="fechaN"
          placeholder="Fecha de Nacimiento"
          className="appearance-none border rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div>
          <label htmlFor="numeroC" className="block text-gray-700 font-bold mb-2">
            Celular
          </label>
          <input
          type="tel"
          id="numeroC"
          onChange={e=>setFormValues({...formValues,numeroC:e.target.value})}
          value={formValues.numeroC}
          name="numeroC"
          placeholder="Número de telefono"
          className="appearance-none border rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div>
          <label htmlFor="pais" className="block text-gray-700 font-bold mb-2">
            Pais
          </label>
          <input 
          type="text"
          id="pais"
          onChange={e =>setFormValues({...formValues,pais:e.target.value})}
          value={formValues.pais}
          name="pais"
          placeholder="Pais de residencia"
          className="appearance-none border rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

      <div className='flex self-end'>
        <button
          type="submit"
          className= "  bg-blue-500 hover:bg-blue-700 text-white font-bold mt-6 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline "
        >
          
          Enviar
        </button>
      </div>
    </form>
  );
};

export default Formulario;