
const TarefaNaoRealizada = ({id, nome, feito, addTarefaRealizada}) => {

    return(
        <div className="tarefa">
            <p>{nome}</p>
            { feito ? <input type="checkbox" checked /> : <input type="checkbox" onClick={() => {
                addTarefaRealizada(id, nome, feito)
            } } /> }
        </div>
    )
}

export default TarefaNaoRealizada