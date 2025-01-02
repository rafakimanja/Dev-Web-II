import { useState } from "react"
import axios from "axios"

const Busca = ({handleSetDados}) => {

    const [cidadeInput, setCidadeInput] = useState('')
    const [estadoInput, setEstadoInput] = useState('')

    const estadosBrasil = [
        "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", 
        "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", 
        "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"
      ]      

    const handleInputCidadeChange = e => {
        setCidadeInput(e.target.value)
    }

    const handleInputEstadoChange = e => {
        setEstadoInput(e.target.value)
    }

    const handleSetLocalizacao = async() => {

        const estadoAcept = estadosBrasil.some((estado) => {
            return estado == estadoInput.toUpperCase()
        })

        if(estadoAcept){
            const dados = await getPrevisao(cidadeInput, estadoInput)
            handleSetDados(dados.results)
        }
        else {
            alert('Estado passado incorretamente, favor usar a sigla: RS, SC, PR...')
        }
        setCidadeInput('')
        setEstadoInput('')
    }

    return(
        <div className="background-form">
            <div className="input-group">
                <label htmlFor="">Buscar cidade:</label>
                <input type="text" placeholder="digite o nome da sua cidade" value={cidadeInput} onChange={handleInputCidadeChange} />
            </div>
            <div className="input-group">
                <label htmlFor="">Estado:</label>
                <input type="text" name="" id="" placeholder="RS" value={estadoInput} onChange={handleInputEstadoChange} />
            </div>
            <button onClick={handleSetLocalizacao} >Buscar</button>
            <br />
            <br />
        </div>
    )
}

export default Busca

export async function getPrevisao(cidade, estado) {
    const url = `https://api.hgbrasil.com/weather?format=json-cors&key=SUA-CHAVE&city_name=${cidade},${estado}`
    const {data} = await axios.get(url)
    return data
}