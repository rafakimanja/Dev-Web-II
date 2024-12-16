import Tarefa from "./Tarefa"

const TarefasRealizadas = ({tarefas, removeTarefa}) => {

    return(
        <>
        <div className="lista-tarefas">
            {
                tarefas.length > 0 ? 
                tarefas.map((tarefa) => <Tarefa tarefa={tarefa} removeTarefa={removeTarefa}/>)
                : <div className="vazio"><p>Não há tarefas realizadas!</p></div>
            }
            
        </div>
        </>
    )
}

export default TarefasRealizadas