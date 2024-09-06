import React from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, doc, updateDoc } from 'firebase/firestore';
import app from "../firebase/credenciales";
const firestore = getFirestore(app);
const storage = getStorage(app);


function IngresoMascotas({ arrayMascotas, setArrayMascotas }) {

  //definimos la variable url para poderla asignar a los documentos
  let urlDescarga;
  //funcion añadir mascotas
  async function addMascotas(e){
    e.preventDefault();
    const nombreMascota = e.target.nombreForm.value;
    const colorMascota = e.target.colorForm.value;
    const descripcionMascota = e.target.descripcionForm.value;
    const edadMascota = e.target.edadForm.value;
    //crear nuevo array
    const nuevoArrayMascotas = [...arrayMascotas,{
      id: +new Date(),
      urimagenurl: urlDescarga,
      nombre: nombreMascota,
      descripcion: descripcionMascota,
      color: colorMascota,
      edad: edadMascota,
    }];
    
    //actualizar la base de datos
    const docuRef = doc(firestore, `/animales/zZ9hWBcnRki61zogJFWd`);
    updateDoc(docuRef, {mascotas: [...nuevoArrayMascotas]});
    //actualizar el estado
    setArrayMascotas(nuevoArrayMascotas);
    //limpiar el registro
    e.target.nombreForm.value = "";
    e.target.colorForm.value = "";
    e.target.descripcionForm.value = "";
    e.target.edadForm.value = "";
    e.target.imagenPrincipal.value = "";

  }
  async function fileHandler(e){
    // detectar archivo
    const archivoLocal = e.target.files[0];
    //console.log(archivoLocal);
    // cargarlo a firebase storage
    const archivoRef = ref(storage, `documentos/${archivoLocal.name}`);
    //console.log(archivoRef);
    await uploadBytes(archivoRef, archivoLocal);
    // obtener url de descarga
    urlDescarga = await getDownloadURL(archivoRef);
  }

  return (
    <div className="registro">
      <form onSubmit={addMascotas}>
        <div className="row">
          <div className="col-md-4">
            <div className="form-group">
              <label className="mt-2">Ingresa la fotografía de la mascota</label>
              <div className="m-2">
               <img className="imagenarchivo" src={urlDescarga} width="80%"/>
              </div>
              
              <input type="file" placeholder="Añade archivo" onChange={fileHandler} id="imagenPrincipal" accept="image/*"/>
            </div>
          </div> 
          <div className="col-md-4">
            <div className="form-group">
              <label className="mt-2">Ingresa el nombre de la mascota</label>
              <input
                type="text"
                className="form-control my-2"
                id="nombreForm"
                placeholder="Ingresa el nombre"
                required
              />
              

              <label className="mt-2">Escribe una descripcion</label>
              <textarea
                className="form-control my-2"
                id="descripcionForm"
                rows="5"
                required
              ></textarea>
            </div>
          </div>
          <div className="col-md-4">
          
           <div className="form-group">
              <label className="mt-2">Ingresa el color de la mascota</label>
              <input
                type="text"
                className="form-control my-2"
                id="colorForm"
                placeholder="Ingresa el color"
                min="0"
                max="20"
                required
              />
            </div>
            <div className="form-group">
              <label className="mt-2">Ingresa la edad de la mascota</label>
              <input
                type="number"
                className="form-control my-2"
                id="edadForm"
                placeholder="Ingresa la edad"
                min="0"
                max="20"
                required
              />
            </div>


            <button type="submit" className="btn btn-dark">
              Registrar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default IngresoMascotas;
