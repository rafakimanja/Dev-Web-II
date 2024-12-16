import configuracoes from '../assets/configuracoes.svg'


const TarefaRealizada = ({id, nome, feito, removeTarefaRealizada}) => {

    return(
        <div className="tarefa">
            <p>{nome}</p>
            <button onClick={() => {
                removeTarefaRealizada(id)
            }}><img src={configuracoes}/></button>{ feito ? <input type="checkbox" checked /> : <input type="checkbox" /> }
        </div>
    )
}

export default TarefaRealizada