import "./Dashboard.css";
import Header from "../components/Header";
import ListadoMascotas from "../components/ListadoMascotas";
import IngresoMascotas from "../components/IngresoMascotas";
import app from "../firebase/credenciales";
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
import { useEffect, useState } from "react";

const firestore = getFirestore(app)


const RegistroAnimales = () => {

  const [infoMascotas, setInfoMascotas] = useState(null);

  const fakeData = [
    { id: 1, urimagenurl: "https://images.unsplash.com/photo-1437957146754-f6377debe171?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80", nombre: "Lucas", descripcion: "Esto es una descripcion", color: "Negro", edad: 5 },
    { id: 2, urimagenurl: "https://images.unsplash.com/photo-1437957146754-f6377debe171?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80", nombre: "Max", descripcion: "Esto es una descripcion de ejemplo", color: "Blanco con negro", edad: 6 },
    { id: 3, urimagenurl: "https://images.unsplash.com/photo-1437957146754-f6377debe171?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80", nombre: "Toby", descripcion: "Esto es una descripcion de ejemplo", color: "Gris", edad: 1 },
  ];

  async function buscarMascotas(){
    const docuRef = doc(firestore, `/animales/zZ9hWBcnRki61zogJFWd`)
    const consulta = await getDoc(docuRef)

    if (consulta.exists()) {
      const infoDocu = consulta.data();
      return infoDocu.mascotas;
    } else {
      await setDoc(docuRef, {mascotas: [...fakeData]});
      const consulta = await getDoc(docuRef);
      const infoDocu = consulta.data();
      return infoDocu.mascotas;
    }
  }

  useEffect(() => {
    async function totalMascotas(){
      const getMascotas = await buscarMascotas();
      setInfoMascotas(getMascotas);
    }
    totalMascotas();
  }, []);

  
  return (
    <div className="wrapper">
      <Header mascotas="active" />

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
              <div className="card card-chart">
                <div className="card-header mb-4">
                  <h4 className="card-title">Registro de Mascotas</h4>
                </div>
              </div>
            </div>
          </div>

          <div>
            <IngresoMascotas arrayMascotas={infoMascotas} setArrayMascotas={setInfoMascotas}/>
          </div>

          <div>
            {/* {arrayMascotas ?<ListadoMascotas arrayMascotas={arrayMascotas} setArrayMascotas={setArrayMascotas} />: null} */}
            {infoMascotas ? <ListadoMascotas arrayMascotas={infoMascotas} setArrayMascotas={setInfoMascotas}/> : null}
          </div>

        </div>
      </div>
    </div>
  );
}

export default RegistroAnimales;
