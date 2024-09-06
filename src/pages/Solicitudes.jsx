import './Dashboard.css'
import Header from '../components/Header';
import ListadoSolicitudes from '../components/ListadoSolicitudes';

function Solicitudes() {
  return (
    <div className="wrapper">

   <Header solicitudes="active"/>

   <div className="main-panel" id="main-panel">
     
   
     <nav className="navbar navbar-expand-lg navbar-transparent bg-none navbar-absolute">
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
           <div className="card  card-tasks">
             <div className="card-header ">
               <h4 className="card-title mb-4">Solicitudes</h4>
             </div>
           </div>
         </div>
       </div>
       <div>
        <ListadoSolicitudes />
       </div>

     </div>
   </div>
 </div>
  )
}

export default Solicitudes