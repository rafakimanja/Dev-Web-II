import './Form.css'
import { useState } from 'react'

const Form = ({addTarefa}) => {

    const [descricao, setDescricao] = useState("")

    const handleInputDescricaoChange = e => {
        setDescricao(e.target.value)
    }

    return(
        <div className="formulario">
            <label htmlFor="descricao">Descrição: </label>
            <input type="text" name="descricao" value={descricao} onChange={handleInputDescricaoChange} placeholder='Digite a nova tarefa...' />
            <button onClick={() => {
                addTarefa({descricao: descricao})
                setDescricao("")
                }}>Salvar</button>
        </div>
    )
}

export default Form