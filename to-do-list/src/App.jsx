import { useState } from 'react'
import Form from './components/Form'
import TarefasNaoRealizadas from './components/TarefasNaoRealizadas'
import TarefasRealizadas from './components/TarefasRealizadas'
import './App.css'

function geraID(){
  return Math.floor(Math.random() * (1000000 - 1 + 1)) + 1
}

function App() {
  
  const [tarefas, setTarefas] = useState([])
  const [tarefasRealizadas, setTarefasRealizadas] = useState([])

  const addTarefa = tarefa => {
    setTarefas([...tarefas, {...tarefa, id: geraID()}])
  }

  const addTarefaRealizada = (id, nome, feito) => {
    const tarefaRealizada = tarefas.find(tarefa => tarefas.id == id)
    if(tarefaRealizada){
      feito = true
      setTarefasRealizadas([...tarefasRealizadas, {...tarefaRealizada, nome, feito}])
    }
  }

  const removeTarefaRealizada = id => {
    setTarefasRealizadas(tarefasRealizadas.filter((tarefa) => tarefa.id != id))
  }

  return (
    <>
    <div className='background'>
      <h1>Lista de Tarefas</h1>
      <div className="form-component">
        <Form addTarefa={addTarefa}/>
      </div>
      <div className='nao-realizadas'>
        <h3>Tarefas não Realizadas</h3>
        <TarefasNaoRealizadas tarefas={tarefas} addTarefaRealizada={addTarefaRealizada}/>
      </div>
      <div className="realizadas">
        <h3>Tarefas Realizadas</h3>
        <TarefasRealizadas tarefasRealizadas={tarefasRealizadas} removeTarefaRealizada={removeTarefaRealizada} />
      </div>
    </div>
    </>
  )
}

export default App
