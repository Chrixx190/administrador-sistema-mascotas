//rfec permite crear un react functional export component
import "./Dashboard.css";
import { useAuth } from "../context/AuthContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from "../components/Header";



function Home() {
  const {user} = useAuth();

  return (
    <div className="wrapper">
      <Header inicio="active" />

      <div className="main-panel" id="main-panel">
        <nav className="navbar navbar-expand-lg navbar-transparent bg-none  navbar-absolute">
          <div className="container-fluid">
            <div className="navbar-wrapper">
              <div className="navbar-toggle" id="navbar-toggle">
                <button type="button" className="navbar-toggler">
                  <span className="navbar-toggler-bar bar1"></span>
                  <span className="navbar-toggler-bar bar2"></span>
                  <span className="navbar-toggler-bar bar3"></span>
                </button>
              </div>
            </div>
          </div>
        </nav>

        <br />
        <br />
        <br />
        <br />

        <div className="content">
          <div className="row">
            <div className="col-md-12">
              <div className="usuario mb-3">
                <h4 className="p-3">Correo Administrador: {user.email}</h4>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card card-chart">
                <div className="card-header">
                  <h4 className="card-title">Inicio</h4>
                </div>
                <div className="card-body">
                  <div className="chart-area text-center">
                    <img src="/inicio-web.png" width="70%" />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card card-chart">
                <div className="card-header">
                  <h4 className="card-title">Ingreso De Mascotas</h4>
                </div>
                <div className="card-body">
                  <div className="chart-area text-center">
                    <img src="/ingreso-mascotas.png" width="40%" />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card card-chart">
                <div className="card-header">
                  <h4 className="card-title">Revision De Solicitudes</h4>
                </div>
                <div className="card-body">
                  <div className="chart-area text-center">
                    <img src="/solicitudes.png" width="40%" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="card  card-tasks">
                <div className="card-header ">
                  <h4 className="card-title">Como registrar mascotas</h4>
                </div>
                <div className="card-body ">
                  <div className="table-full-width table-responsive">
                  <h5>1.- Ingresa al panel de mascotas que se encuentra en el lateral de la pagina principal</h5>
                  <h5>2.- Selecciona una imagen y rellena la informacion solicitada de la mascota</h5>
                  <h5>3.- Da un clic en guardar para el registro de la informacion en la base de datos</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card  card-tasks">
                <div className="card-header">
                  <h4 className="card-title">Solicitudes de adopcion</h4>
                </div>
                <div className="card-body ">
                  <div className="table-full-width table-responsive">
                  <h5>1.- Ingresa al panel de solicitudes que se encuentra en el lateral de la pagina principal</h5>
                  <h5>2.- Se mostrara una lista con todas las solicitudes de adopcion que han realizado los usuarios</h5>
                  <h5>3.- Para aceptar una solicitud de adopcion da un clic en el boton <button type="button" className="btn btn-success"><FontAwesomeIcon icon="circle-check" /></button> que se encuentra en cada fila, posteriormente se mostrara una etiqueta en con el estado de la solicitud <span class="badge bg-warning">Pendiente <FontAwesomeIcon icon="clock" /></span></h5> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
