import TarefaRealizada from "./TarefaRealizada"


const TarefasRealizadas = ({tarefasRealizadas, removeTarefaRealizada}) => {
    return(
        <div className="lista-tarefas">
            {
                tarefasRealizadas.length > 0 ? tarefasRealizadas.map((tarefa) => <TarefaRealizada id={tarefa.id} nome={tarefa.nome} feito={tarefa.feito} removeTarefaRealizada={removeTarefaRealizada} />)
                : <div className="vazio">
                    <p>Não há tarefas concluidas</p>
                </div>
            }
        </div>
    )
}

export default TarefasRealizadas