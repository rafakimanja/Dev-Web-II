import CarroEstoque from "./CarroEstoque"
import './CarrosEstoque.css'

const CarrosEstoque = ({carros, removeCarro, addCarroVendido}) => {

    return(
        <div className="lista-carros">
            {carros.length > 0 ?
                carros.map((carro) => <CarroEstoque marca={carro.marca} modelo={carro.modelo} ano={carro.ano} cor={carro.cor} removeCarro={removeCarro} addCarroVendido={addCarroVendido} id={carro.id} />)
            : <div className="vazio"><p>Não há carros em estoque!</p></div>}
        </div>
    )
}

export default CarrosEstoque