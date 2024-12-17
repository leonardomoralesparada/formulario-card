import "./Campo.css"

const Campo = (props) => {

    const {type = "text"} = props

    const manejarEvento = (e) => {
        props.actualizar(e.target.value)
    }

    return (
        <div className={`campo campo-${type} `} >
            <label>{props.titulo}</label>
            <input 
                placeholder={props.placeholder} 
                required={props.required}
                value={props.valor}               
                onChange={manejarEvento}
                type={type}
            />
        </div>
    )
}

export default Campo;
