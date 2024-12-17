import Colaborador from "../colaborador"
import "./Equipo.css"
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) => {

    const {colorPrimario,colorSegundario,titulo,id } = props.informacion
    const {lista,eliminar,color,like} = props

    const obj = {
        backgroundColor: hexToRgba(colorPrimario, 0.6)
    }

    const estilo = {borderColor:colorPrimario}

    return (
            lista.length > 0 &&
            <section className="equipo" style={obj}>
                <input
                    type="color"
                    className="input-color"
                    value={ hexToRgba(colorPrimario, 0.6)}
                    onChange={(evento)=>{
                        color(evento.target.value, id)
                    }}
                />
                <h3 style={estilo} >{titulo} </h3>
                <div className="card">
                {lista.map((colaborador,index) => <Colaborador key={index} datos={colaborador} color={colorPrimario}  eliminar={eliminar} like={like} />)}
                </div>
            </section>
    )
}

export default Equipo;