import React, {useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { collection, onSnapshot, orderBy, query, getFirestore, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import app from "../firebase/credenciales";
const firestore = getFirestore(app)

const ListadoSolicitudes = () => {

   
const [solicitudes, setSolicitudes] = useState([]);
useEffect(() => {
const collectionRef = collection(firestore, 'Solicitudes');
const q = query(collectionRef, orderBy('createdAt', 'desc'));

const unsubscribe = onSnapshot(q, querySnapshot => {
    console.log('querySnapshot unsusbscribe');
    setSolicitudes(
        querySnapshot.docs.map(doc => ({
            id: doc.id, 
            nombre: doc.data().nombrePerro,
            imagen: doc.data().imagenUrl,
            solicitante: doc.data().nombreSolicitante,
            celular: doc.data().celularSolicitante,
            estado: doc.data().validacionSolicitud,
        }))
      );
    });
return unsubscribe;
},[])

function onDelete(idSoli){
 const docuRef = doc(firestore, 'Solicitudes', idSoli);
 deleteDoc(docuRef);   
}

function statusPending(idStatus){
  const docuRef = doc(firestore, 'Solicitudes', idStatus);
  updateDoc( docuRef, {
    validacionSolicitud: false,
  })
}

function statusApproved(idStatus){
  const docuRef = doc(firestore, 'Solicitudes', idStatus);
  updateDoc( docuRef, {
    validacionSolicitud: true,
  })
}
  return (
    <div class="table-responsive-sm">
      <table className="table text-center">
        <thead>
          <tr>
            <th scope="col"># Solicitud</th>
            <th scope="col">Imagen</th>
            <th scope="col">Nombre</th>
            <th scope="col">Solicitante</th>
            <th scope="col">Celular</th>
            <th scope="col">Estado</th>
            <th scope='col'>Acciones</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
            {solicitudes.map(soli => 
                <tr>
                <th scope="row">{soli.id}</th>
                <td width="15%"><img src={soli.imagen} width="50%"/></td>
                <td>{soli.nombre}</td>
                <td>{soli.solicitante}</td>
                <td>{soli.celular}</td>
                <td>{soli.estado ? <span class="badge bg-success">Aprobado <FontAwesomeIcon icon="circle-check" /></span> : <span class="badge bg-warning">Pendiente <FontAwesomeIcon icon="clock" /></span>}</td>
                <td><button type="button" className="btn btn-warning" onClick={() => statusPending(soli.id)}><FontAwesomeIcon icon="clock" /></button> <button type="button" className="btn btn-success" onClick={() => statusApproved(soli.id)}><FontAwesomeIcon icon="circle-check" /></button></td>
                <td><button type="button" className="btn btn-danger"><FontAwesomeIcon icon="trash" onClick={() => onDelete(soli.id)}/></button></td>
               </tr>
            )}
        </tbody>
      </table>
    </div>
  );
}

export default ListadoSolicitudes
