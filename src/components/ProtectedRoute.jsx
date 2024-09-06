import { useAuth } from "../context/AuthContext"
import {Navigate} from 'react-router-dom'

//importamos firestore para que pueda funcionar la base de datos
//con doc nos permite configurar la ruta del documento de firestore que esta dentro de firebase 
//con getDoc nos permite traer la informacion que se encuetra dentro del documento por ejemplo el correo o el rol

function ProtectedRoute({children}) {
  const {user, loading} = useAuth()
  if(loading) return <div></div>
  //aqui tendriamos que validar que si la variable uid que importamos del AuthContext es diferente a admin te rediriga al login
  //quedaria asi
  //if(!user && !admin === 'admin') return <Navigate to='/login'/>
  if(!user) return <Navigate to='/login'/>

  return <>{children}</>
}

export default ProtectedRoute