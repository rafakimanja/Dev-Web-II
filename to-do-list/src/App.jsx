import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import TarefasRealizadas from './components/TarefasRealizadas'
import TarefasNaoRealizadas from './components/TarefasNaoRealizadas'
import Form from './components/Form'
import './App.css'

function App() {
  
  const [realizadas, setRealizadas] = useState([])

  const [naoRealizadas, setNaoRealizadas] = useState([])

  const addTarefa = tarefa => {
    setNaoRealizadas((prev) => [...prev, { ...tarefa, id: uuidv4(), status: false }])
  }

  const addTarefaRealizada = (id) => {

    setNaoRealizadas((prevNaoRealizadas) => {

      const tarefaParaMover = prevNaoRealizadas.find((tarefa) => tarefa.id == id)

      if (tarefaParaMover) {
  
        const updatedNaoRealizadas = prevNaoRealizadas.filter((tarefa) => tarefa.id != id)
   
        setRealizadas((prevRealizadas) => [...prevRealizadas, { ...tarefaParaMover, status: true }])

        return updatedNaoRealizadas;
      }
      return prevNaoRealizadas;
    })
  }

  const removeTarefa = id => {
    setRealizadas(realizadas.filter((tarefa) => tarefa.id != id))
  }



  return (
    <>
    <div className="background-form">
      <Form addTarefa={addTarefa}/>
    </div>
    <div className="background-tarefas">
      <div className="background-lista">
        <h2>Tarefas Realizadas</h2>
        <TarefasRealizadas tarefas={realizadas} removeTarefa={removeTarefa}/>
      </div>
      <div className="background-lista" id='nao'>
        <h2>Tarefas Não Realizadas</h2>
        <TarefasNaoRealizadas tarefas={naoRealizadas} addTarefaRealizada={addTarefaRealizada}/>
      </div>
    </div>
    </>
  )
}

export default App
