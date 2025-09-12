const Pedido = ({data, icone, titulo, descricao}) => {
    // const data = props.data
    // const icone = props.icone
    // const titulo = props.titulo
    // const descricao = props.descricao

    // const {data, 
    //     icone, 
    //     titulo, 
    //     descricao
    //  } = props // desestruturação de objeto

    return <div className="card">
        <div className="card-header text-muted">
            {data}
        </div>
        <div className="card-body d-flex">
            <div className="d-flex align-items-center">
                <i className={`fa-solid fa-${icone} fa-2x`}></i>
            </div>
            <div className="ms-3 border flex-grow-1">
                <h4 className="text-center">{titulo}</h4>
                <p className="text-center">{descricao}</p>
            </div>
        </div>
    </div>
}
export default Pedido