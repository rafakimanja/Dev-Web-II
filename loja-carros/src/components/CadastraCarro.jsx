import { useState } from 'react'
import './CadastraCarro.css'

const CadastraCarro = ({addCarro}) => {

    const [inputMarca, setInputMarca] = useState("")
    const [inputModelo, setInputModelo] = useState("")
    const [inputCor, setInputCor] = useState("")
    const [inputAno, setInputAno] = useState("")

    const handleInputMarcaChange = e => {
        setInputMarca(e.target.value)
    }

    const handleInputModeloChange = e => {
        setInputModelo(e.target.value)
    }

    const handleInputCorChange = e => {
        setInputCor(e.target.value)
    }

    const handleInputAnoChange = e => {
        setInputAno(e.target.value)
    }

    return(
        <div className="form">
            <p className='titulo'>Adicionar Carro no Sistema:</p>
            <label htmlFor="marca">Marca</label>
            <input type="text" name="marca" value={inputMarca} onChange={handleInputMarcaChange} />
            <br />
            <label htmlFor="modelo">Modelo</label>
            <input type="text" name="modelo" value={inputModelo} onChange={handleInputModeloChange} />
            <br />
            <label htmlFor="ano">Ano</label>
            <input type="number" name="ano" min={1900} max={2024} step="1" value={inputAno} onChange={handleInputAnoChange} />
            <br />
            <label htmlFor="cor">Cor</label>
            <input type="text" name="cor" value={inputCor} onChange={handleInputCorChange} />
            <button className='cadastrar' onClick={() => {
                addCarro({marca: inputMarca, modelo: inputModelo, cor: inputCor, ano: inputAno, vendido: false})
                setInputAno(0)
                setInputCor("")
                setInputMarca("")
                setInputModelo("")
                
            }}>Cadastrar</button>
        </div>
    )
}

export default CadastraCarro