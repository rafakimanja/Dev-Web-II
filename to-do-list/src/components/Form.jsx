import { useState } from "react"

const Form = ({addTarefa}) => {

    const [inputTarefa, setInputTarefa] = useState("")

    const handleInputTarefaChange = e => {
        setInputTarefa(e.target.value)
    }

    return(
        <>
        <div className="form">
            <input type="text" value={inputTarefa} onChange={handleInputTarefaChange} placeholder="Nova tarefa" />
            <button onClick={() => {
                addTarefa({nome: inputTarefa, feito: false})
                setInputTarefa("")
            }} >Adicionar</button>
        </div>
        </>
    )
}

export default Form