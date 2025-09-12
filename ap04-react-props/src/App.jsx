import Pedido from "./Pedido"
import Animal from "./Animal"
import Cartao from "./Cartao"

const App = () => {
  return (
    <div className="container-fluid   p-5" style={{ backgroundColor: 'purple' }}>
      <div className="row">
        <div className="col-12">

          <Cartao cabecalho="Gatopótamos">

          <Animal
          animal="cat"
          tamanho="2"
          espelhamento="-1"
          />

          <Animal
          animal="cat"
          tamanho="2"
          espelhamento="-1"
          />
          
        
          <Animal
          animal=""
          tamanho="2"
          espelhamento="-1"
          />
          </Cartao>


         

        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-6 col-xl-3">
          <Pedido
            data="03/09/2025"
            icone="car"
            titulo="Carro"
            descricao="Porsche Amarelo"
          />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3">
          <Pedido
            data="11/09/2025"
            icone="plane"
            titulo="Avião"
            descricao="Avião Amarelo"
          />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3">
          <Pedido
            data="11/09/2025"
            icone="building"
            titulo="Prédio"
            descricao="Prédio Amarelo"
          />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3">
          <Pedido
            data="11/09/2025"
            icone="computer"
            titulo="Computador"
            descricao="Computador Amarelo"
          />
        </div>
      </div>
    </div>

  )
}
export default App