const Pedido = ({ data, icone, titulo, descricao }) => {
    return <>
    <div className="d-flex">
        <div className="d-flex align-items-center">
            <i className={`fa-solid fa-${icone} fa-2x`}></i>
        </div>
        <div className="ms-3 border flex-grow-1">
            <h4 className="text-center">{titulo}</h4>
            <p className="text-center">{descricao}</p>
        </div>
    </div>
    </> // fragment vazio - pra que serve: agrupar elementos sem criar uma div extra, que pode atrapalhar no css ou no DOM
    
}
export default Pedido