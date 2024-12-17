import "./MiOrg.css"

const MiOrg = (props) => {

    return (
        <section className="organizador">
            <h3 className="title">Mi Organizacion</h3>
            <img src="/img/add.png" alt="add" onClick={props.mostrar}/>
        </section>
    )
}

export default MiOrg;