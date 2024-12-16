import deleteIcon from '../assets/deleteIcon.svg';
import './Tarefa.css'

const Tarefa = ({tarefa, removeTarefa, addTarefaRealizada}) => {
    return(
        <>
        {
            tarefa.status ? (
                <div className="tarefa">
                    <input type="checkbox" name="" id="" checked/>
                    <p>{tarefa.descricao}</p>
                    <button className='delete' onClick={() => removeTarefa(tarefa.id)}><img src={deleteIcon} alt="" /></button>
                </div>
            ) :
            (
                <div className="tarefa">
                    <input type="checkbox" name="" id="" onClick={() => addTarefaRealizada(tarefa.id)}/>
                    <p>{tarefa.descricao}</p>
                </div>
            )

        }
        </>
    )
}

export default Tarefa