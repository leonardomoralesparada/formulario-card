import {AiFillCloseCircle , AiOutlineHeart, AiFillHeart} from "react-icons/ai"
import "./colaborador.css"

const Colaborador = (props) => {

    const {nombre,puesto,foto,equipo,id,fav} = props.datos
    const {color,eliminar,like} = props

    return(
        <div className="colaborador">
            <AiFillCloseCircle className="eliminar" onClick={ () => eliminar(id)}/>
            <div className="encabezado" style={{backgroundColor:color}}>
                <img src={foto} alt={nombre} />
            </div>
            <div className="info">
                <h4>{nombre} </h4>
                <h5>{puesto} </h5>
                {fav ? <AiFillHeart color="red" onClick={()=> like(id)}/>:<AiOutlineHeart onClick={()=> like(id)}/> }
            </div>
        </div>
    )
}

export default Colaborador;