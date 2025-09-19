import Pedido from "./Pedido"
import Animal from "./Animal"
import Cartao from "./Cartao"
import Feedback from "./Feedback"

const App = () => {
  const funcaoOK = () => alert('Agradecemos o feedback')
  const funcaoNOK = () => alert('Agradecemos o feedback, vamos melhorar')
  const textoOk = "Pedido já chegou"
  const textoNOK = "Pedido não chegou"
  const pedidos = [
    { data: "11/09/2025", icone: "car", titulo: "Carro", descricao: "Porsche Amarelo" },
    { data: "11/09/2025", icone: "plane", titulo: "Avião", descricao: "Avião Amarelo" },
    { data: "11/09/2025", icone: "building", titulo: "Prédio", descricao: "Prédio Amarelo" },
    { data: "11/09/2025", icone: "computer", titulo: "Computador", descricao: "Computador Amarelo" }
  ]
  const expressao = (
    <Feedback
      textoOk={textoOk}
      textoNOK={textoNOK}
      funcaoOK={funcaoOK}
      funcaoNok={funcaoNOK}
  />)

  
  return (
    <div className="container-fluid   p-5" style={{ backgroundColor: 'purple' }}>
      <div className="row">
        <div className="col-12">
          <Cartao cabecalho="Gatopótamos">
            <div className="d-flex-flex-column">
              <div className="d-flex justify-content-center align-items-end mb-5">
                <Animal
                  animal="cat"
                  tamanho="3"
                  espelhamento="1"
                />
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
                  animal="hippo"
                  tamanho="2"
                  espelhamento="-1"
                />
              </div>
              <Feedback
                textoOk="Adotar uma lontra?"
                textoNOK="Não Adotar"
                funcaoOK={() => alert('Lontra adotada com sucesso!')}
                funcaoNok={() => alert('Lontra não adotada!')}
              />

            </div>
          </Cartao>
        </div>

      </div>
      <div className="row">
        {
          pedidos.map(({data, icone, titulo, descricao})=> {
            return (
            <div className="col-sm-12 col-md-6 col-xl-4">
          <Cartao
            cabecalho={data}>
            <Pedido
              icone={icone}
              titulo={titulo}
              descricao={descricao}
            />
            <div className="mt-3">
            {expressao}
            </div>
          </Cartao>
        </div>
        )
          })
        }

      </div>
    </div>

  )
}
export default App