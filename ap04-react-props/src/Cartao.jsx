import React from 'react'

const Cartao = ({cabecalho, children}) => {
    return (
        <div className='card'>
            <div className="card-head text-muted">
            {cabecalho}
            </div>
            <div className="card-body">
            {children}
            </div>
        </div>
    )
}

export default Cartao