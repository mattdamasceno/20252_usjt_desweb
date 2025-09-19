import React from 'react'

// função de alta ordem (HOC - High Order Component) - recebe ou devolve funções 

const Feedback = ({ textoOk, textoNOK, funcaoOK, funcaoNok }) => {
  return (
    <div className='d-flex justify-content-evenly'>
      <button
        type="button"
        onClick={funcaoOK}
        className="btn btn-primary">
        {textoOk}
      </button>
      <button
        type="button"
        onClick={funcaoNok}
        className="btn btn-danger">
        {textoNOK}
      </button>
    </div>
  )
}

export default Feedback