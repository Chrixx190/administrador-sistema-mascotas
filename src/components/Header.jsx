import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
import { useAuth } from '../context/AuthContext'


function Header(props) {

  const {logout, loading} = useAuth();

  if(loading) return <h1>Cargando</h1>
  
  const handleLogout = async() =>{
    await logout();
  } 

  return (
    <div className="sidebar" >
     <div className="logo mx-1">
       <a  className="simple-text logo-normal">
         Bienvenido
       </a>
     </div>
     <div className="sidebar-wrapper" id="sidebar-wrapper">
       <ul className="nav">
         <li className={props.inicio}>
           <Link to="/">
             <i><FontAwesomeIcon icon="angle-double-right"/></i>
             <p>Inicio</p>
           </Link>
         </li>
         <li className={props.mascotas}>
           <Link to="/mascotas">
             <i><FontAwesomeIcon icon="paw"/></i>
             <p>Mascotas</p>
           </Link>
         </li>
         <li className={props.solicitudes}>
           <Link to="/solicitudes">
             <i><FontAwesomeIcon icon="envelope"/></i>
             <p>Solicitudes</p>
           </Link>
         </li>
         <li>
           <a onClick={handleLogout}>
            <i><FontAwesomeIcon icon="sign-out"/></i>
            <p>Cerrar Sesion</p>
           </a>
          
         </li>
       </ul>
     </div>
   </div>

  )
}

export default Header