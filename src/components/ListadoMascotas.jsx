import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getFirestore, doc, updateDoc } from 'firebase/firestore';
import app from "../firebase/credenciales";

const firestore = getFirestore(app)

const ListadoMascotas = ({ arrayMascotas, setArrayMascotas }) => {

  async function eliminarMascotas (idMascotaEliminar){
    //crea un nuevo arrayde tareas
    const newArrayMascotas = arrayMascotas.filter(
      (Mascota) => Mascota.id !== idMascotaEliminar
    );
    //actualiza la base de datos
    const docuRef = doc(firestore, `/animales/zZ9hWBcnRki61zogJFWd`);
    updateDoc(docuRef, {mascotas: [...newArrayMascotas]});
    //actualizar el estado en la pagina
    setArrayMascotas(newArrayMascotas);
  }


  return (
    <div class="table-responsive-sm">
      <table className="table text-center">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Imagen</th>
            <th scope="col">Nombre</th>
            <th scope="col">Color</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Edad</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {arrayMascotas.map((Mascota) => {
            return (
              <tr>
                <th scope="row">{Mascota.id}</th>
                <td width="15%"><img src={Mascota.urimagenurl} width="90%"/></td>
                <td>{Mascota.nombre}</td>
                <td>{Mascota.color}</td>
                <td width="50%">{Mascota.descripcion}</td>
                <td>{Mascota.edad}</td>
                <td><button type="button" className="btn btn-dark" onClick={() => eliminarMascotas(Mascota.id)}><FontAwesomeIcon icon="trash" /></button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListadoMascotas;
