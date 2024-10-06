import { useState } from 'react'
import './App.css'
import CadastraCarro from './components/CadastraCarro'
import CarrosEstoque from './components/CarrosEstoque'
import CarrosVendidos from './components/CarrosVendidos'
import { v4 as uuidv4 } from 'uuid';

function App() {
  
  const [carros, setCarros] = useState([])
  const [carrosVendidos, setCarrosVendidos] = useState([])

  const addCarro = carro => {
    setCarros([...carros, {...carro, id: uuidv4()}])
  }

  const addCarroVendido = (id, nome, cpf) => {
    const carroVendido = carros.find(carro => carro.id == id)
    if(carroVendido){
      setCarrosVendidos([...carrosVendidos, {...carroVendido, nome, cpf}])
    }
  }

  const removeCarro = id => {
    setCarros(carros.filter((carro) => carro.id != id))
  }

  const removeCarroVendido = id => {
    setCarrosVendidos(carrosVendidos.filter((carro) => carro.id != id))
  }

  return (
    <div>
      <h1>Concessionária do Tião</h1>
      <div className="carros">
        <div className="estoque">
          <h3>Carros em Estoque</h3>
            <CarrosEstoque carros={carros} removeCarro={removeCarro} addCarroVendido={addCarroVendido} />
        </div>
        <div className="vendidos">
          <h3>Carros vendidos</h3>
            <CarrosVendidos carros={carrosVendidos} removeCarroVendido={removeCarroVendido} />
        </div>
      </div>
      <div className='formulario'>
        <CadastraCarro addCarro={addCarro}/>
      </div>
    </div>
  )
}

export default App
