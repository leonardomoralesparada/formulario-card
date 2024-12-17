import "./ListaOpciones.css"

const ListaOpciones = (props) => {

    const manejoGrupo = (e) => {
        props.cambio(e.target.value)
    }

    return(
        <div className="lista-opciones">
            <label>Equipos</label>
            <select value={props.opcion} onChange={manejoGrupo} >
                <option>Seleccionar Equipo</option>
                {props.equipos.map((equipo, index) =>  <option key={index} value={equipo}>{equipo}</option>)}
            </select>
        </div>
    )
}

export default ListaOpciones;