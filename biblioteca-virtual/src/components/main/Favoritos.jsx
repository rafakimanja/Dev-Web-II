import { Link } from "react-router-dom"
import './Favorito.css'

const Favoritos = ({livros}) => {
    return(
    <>
    {
      livros.length > 0 ? 
        <ul>
            {
              livros.map((livro) => { return(
                <li key={livro.id}><Link to={`/detalhe/${livro.id}`}>{livro.titulo}</Link></li>
              )})
            }
        </ul>
      :<p>Lista de livros vazia!</p>
     }
    </>
    )
}

export default Favoritos