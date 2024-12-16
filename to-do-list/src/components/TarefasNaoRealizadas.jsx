import TarefaNaoRealizada from "./TarefaNaoRealizada"


const TarefasNaoRealizadas = ({tarefas, addTarefaRealizada}) => {

    return(
        <div className="lista-tarefas">
            {
                tarefas.length > 0 ? tarefas.map((tarefa) => <TarefaNaoRealizada id={tarefa.id} nome={tarefa.nome} feito={tarefa.feito} addTarefaRealizada={addTarefaRealizada} />)
                : <div className="vazio">
                    <p>Não há tarefas pendentes</p>
                </div>
            }
        </div>
    )
}

export default TarefasNaoRealizadas