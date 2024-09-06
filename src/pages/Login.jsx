import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useAuth } from '../context/AuthContext'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'


function SignIn() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState();
  const {login} = useAuth();
  const navigate = useNavigate()

  const handleChange = ({target: {name, value}}) => (
    setUser({...user, [name]: value})
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      //aqui seria la validacion si el usuario es admin o no 
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
      if(error.code === "auth/user-not-found"){
        setError('Usuario no encontrado');
      };
      if(error.code === "auth/wrong-password"){
        setError('La contraseña es incorrecta');
      };
    }
  }; 

  return (
    <div className="App">
    <div className="inicio">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12 col-xs-12 ">
              <div className="imagen text-center">
                <img src="/inicio.png" width="100%" className="img-fluid"/>
              </div>
            </div>
            <div className="col-md-6">
              <div className="inicio">
                <div className="card">
                 <h2>Inicia sesion para el registro de mascotas</h2>
                 {error && <div className="alert alert-danger mx-4" role="alert">{error}</div>}
                 <form onSubmit={handleSubmit}>
                    <div className="input-group">
                      <span className="input-group-text" id="basic-addon1"><FontAwesomeIcon icon="envelope" style={{ color: '#E9D5DA' }} /></span>
                      <input type="email" className="form-control" placeholder="Ingrese el email" name="email" onChange={handleChange}/>
                    </div>
                    <div className="input-group">
                      <span className="input-group-text" id="basic-addon1"><FontAwesomeIcon icon="lock" style={{ color: '#E9D5DA' }}/></span>
                      <input type="password" className="form-control" placeholder="Ingrese la contraseña" name="password" onChange={handleChange}/>
                    </div>
                    <div className="boton-enviar">
                     <button type="submit" className="btn"><FontAwesomeIcon icon="sign-in" style={{ color: 'white' }}/></button>
                    </div>
                 </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  )
}

export default SignIn