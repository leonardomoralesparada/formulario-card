import { useState } from "react"
import Boton from "../boton/boton"
import Campo from "../campo"
import ListaOpciones from "../listaopciones/ListaOpciones"
import "./Formulario.css"

const Formulario = (props) => {

    const [nombre, setNombre] = useState("")
    const [puesto, setPuesto] = useState("")
    const [foto, setFoto] = useState("")
    const [equipo,setEquipo]= useState("")

    const [titulo, setTitulo] = useState("")
    const [color, setColor] = useState("")

    const {crearEquipo} = props

    const manejoEnvio = (e) => {
        e.preventDefault()

        let datos = {
            nombre,
            puesto,
            foto,
            equipo
        }
        props.enviarDatos(datos)
    }

    const manejarEquipo = (e) => {
        e.preventDefault()
        crearEquipo({titulo, colorPrimario: color})
    }

    return(
        <section className="formulario">
            <form onSubmit={manejoEnvio}>
                <h2>Rellena el formulario para crear el colaborador</h2>
                <Campo 
                    titulo="Nombre" 
                    placeholder="ingesar nombre..." 
                    required
                    valor={nombre}
                    actualizar={setNombre}
                />
                <Campo 
                    titulo="Puesto" 
                    placeholder="ingresar puesto..." 
                    required
                    valor={puesto}
                    actualizar={setPuesto}
                />
                <Campo 
                    titulo="Foto" 
                    placeholder="ingresar enlace de foto..."
                    required
                    valor={foto}
                    actualizar={setFoto}
                />
                <ListaOpciones
                    opcion={equipo}
                    cambio={setEquipo}
                    equipos={props.grupos}
                />
                <Boton>
                    Crear
                </Boton>
            </form>
            <form onSubmit={manejarEquipo}>
                <h2>Rellena el formulario para crear el Equipo</h2>
                <Campo 
                    titulo="Titulo" 
                    placeholder="ingesar titulo..." 
                    required
                    valor={titulo}
                    actualizar={setTitulo}
                />
                <Campo 
                    titulo="Color" 
                    placeholder="ingresar color en hex..." 
                    required
                    valor={color}
                    actualizar={setColor}
                    type="color"
                />
                <Boton>Registrar Equipo</Boton>
            </form>
        </section>
    )
}

export default Formulario