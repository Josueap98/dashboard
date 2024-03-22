import Link from "next/link"
import { WiAlien,  WiTrain } from "react-icons/wi";
import { GrDatabase } from "react-icons/gr";
import { IoMdContacts } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";

const listaURL = [
  {ruta:'/',nombreRuta:'Inicio', icon:<FaHome size={'20px'}/>},
  {ruta:'', nombreRuta:'Registros', icon:<GrDatabase size={'20px'}/>},
  {ruta:'/formulario', nombreRuta:'Formulario', style: 'pl-12'},
  {ruta:'/respuestas', nombreRuta: 'Respuestas', style: 'pl-12'},
  {ruta:'', nombreRuta:'Peticiones', icon:<IoMdContacts size={'20px'}/>},
  {ruta:'/pokemon', nombreRuta:'Pokemon', style: 'pl-12'},
  {ruta:'/dragon', nombreRuta: 'DragonBall', style: 'pl-12'},
  {ruta:'/acerca', nombreRuta:'Acerca', icon:<IoIosInformationCircleOutline size={'20px'}/>}
]

const NavBar = () => {
return (
  <div className="bg-[#1b3840] w-[15%] h-screen ">
      <div className="flex justify-center "><WiAlien size={'100px'} color="#34ff44" /></div>
    <nav>
      <ul>
          {
              listaURL.map((ruta, index)=>(
                  <li key={index} className={`text-white capitalize flex flex-row space-x-3 pl-3 font-semibold size-10 margin-right-20 ${ruta.style}`}>
                    <Link  href={ruta.ruta}>{ruta.icon}</Link>
                    <Link href={ruta.ruta}>{ruta.nombreRuta}</Link>
                  </li>
              ))
          }
      </ul>
    </nav>
  </div>
)
}

export default NavBar
