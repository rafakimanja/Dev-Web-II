import CarroVendido from "./CarroVendido"
import './CarrosVendidos.css'

const CarrosVendidos = ({carros, removeCarroVendido}) => {

    return(
        <div className="carros-vendidos">
            {carros.length > 0 ?
                carros.map((carro) => <CarroVendido marca={carro.marca} modelo={carro.modelo} ano={carro.ano} cor={carro.cor} nome={carro.nome} cpf={carro.cpf} id={carro.id} removeCarroVendido={removeCarroVendido} />)
            : <div className="vazio"><p>Não há carros vendidos!</p></div>}
        </div>
    )

}

export default CarrosVendidos