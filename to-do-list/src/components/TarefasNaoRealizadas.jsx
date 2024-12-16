import Tarefa from "./Tarefa"

const TarefasNaoRealizadas = ({tarefas, addTarefaRealizada}) => {

    return(
        <>
        <div className="lista-tarefas">
            {
                tarefas.length > 0 ? 
                tarefas.map((tarefa) => <Tarefa tarefa={tarefa} addTarefaRealizada={addTarefaRealizada}/>)
                : <div className="vazio"><p>Não há tarefas não realizadas!</p></div>
            }
            
        </div>
        </>
    )
}

export default TarefasNaoRealizadas