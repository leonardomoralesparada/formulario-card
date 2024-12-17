import {useState} from "react"
import { v4 as uuid } from 'uuid';
import Formulario from './componentes/formulario/Formulario';
import Cabecera from "./componentes/header/Cabecera";
import MiOrg from './componentes/miorg/MiOrg';
import Equipo from "./componentes/equipo";
import Footer from "./componentes/footer";

function App() {

  const [MostrarFormulario, setMostrarFormulario] = useState (true)
  const [colaboradores, setColaboradores] = useState([
    {
      id: uuid(),
      nombre: "Leonardo Morales",
      puesto: "Desarrollador",
      foto:"https://github.com/leonardomoralesparada.png",
      equipo:"Front End",
      fav:true
    },
    {
      id: uuid(),
      nombre: "Jose Caceres",
      puesto: "Ingeniero",
      foto:"https://github.com/joalcapa.png",
      equipo:"Data Science",
      fav: false
    },
  ])
  const [equipos, setEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programacion",
      colorPrimario: "#57c278",
      colorSegundario: "#d9f7e9"
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82cffa",
      colorSegundario: "#e8f8ff"
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#a6d157",
      colorSegundario: "#f0f8e2"
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#e06b69",
      colorSegundario: "#fde7e8"
    },
    {
      id: uuid(),
      titulo: "Ux y Diseño",
      colorPrimario: "#db6ebf",
      colorSegundario: "#fae9f5"
    },
    {
      id: uuid(),
      titulo: "Movil",
      colorPrimario: "#ffba05",
      colorSegundario: "#fff5d9"
    },
    {
      id: uuid(),
      titulo: "Innovacion y Gestion",
      colorPrimario: "#ffba29",
      colorSegundario: "#ffeedf"
    }
 ])

  const cambiar = () => {
    setMostrarFormulario(!MostrarFormulario)
  }

  const registrar = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  const eliminarColaborador = (id) => {
    const nuevoColaborador = colaboradores.filter( (colaborador) => colaborador.id !== id )
    setColaboradores(nuevoColaborador)
  }

  const actualizarColor = (color, id) => {
    const equiposActualizados = equipos.map((equipo)=>{
      if(equipo.id === id){
        equipo.colorPrimario = color
      }
      return equipo;
    })
    setEquipos(equiposActualizados)
  }

  const crearEquipo = (nuevoEquipo) => {
    setEquipos([...equipos, {...nuevoEquipo, id: uuid()}])
  }

  const like = (id) => {
    const colaboradoresActualizados = colaboradores.map((colaborador)=>{
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    setColaboradores(colaboradoresActualizados)
  }

  return (
    <div className="App">
      <Cabecera/>
      {
        MostrarFormulario && <Formulario 
          grupos={equipos.map((equipo) => equipo.titulo )} 
          enviarDatos={registrar}
          crearEquipo={crearEquipo}
          />
      }
      
      <MiOrg mostrar={cambiar} />

      {
        equipos.map((dato,index) => <Equipo 
            informacion={dato} 
            key={index}
            lista={colaboradores.filter(colaborador => colaborador.equipo === dato.titulo)}
            eliminar={eliminarColaborador} 
            color={actualizarColor}
            like={like}
            />
        )
      }
      <Footer/>
    </div>
  );
}

export default App;
