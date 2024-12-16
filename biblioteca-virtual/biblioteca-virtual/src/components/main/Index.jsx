import { useState } from 'react'
import axios from 'axios'
import './Index.css'

const Index = ({handleAddLivrosFavoritos}) => {

  const [name, setName] = useState("")
  const [filtro, setFiltro] = useState("")
  const [resultados, setResultados] = useState([])

  const handleNameChange = e => {
    setName(e.target.value)
  }

  const handleFiltroChange = e => {
    setFiltro(e.target.value)
  }

  const handleCreateBusca = async () =>{
    const data = await getBusca(name)
    setResultados(data)
    setName("")
    setFiltro("")
  }


  return (
    <>
     <h2>Busque o livro:</h2>
     <input type="text" name="" id="" value={name} onChange={handleNameChange}/>
     <button onClick={handleCreateBusca}>Buscar</button>
     <ul className='filtros'>
      <li><label htmlFor="">ISBN</label><input type="radio" name="filtro" id="" value="ISBN" checked={filtro == "ISBN"} onChange={handleFiltroChange} /></li>
      <li><label htmlFor=""> | Título</label><input type="radio" name="filtro" id="" value="Título" checked={filtro == "Título"} onChange={handleFiltroChange} /></li>
      <li><label htmlFor=""> | Autor</label><input type="radio" name="filtro" id="" value="Autor" checked={filtro == "Autor"} onChange={handleFiltroChange} /></li>
     </ul>
     <br />
     <br />
     {
      resultados.length > 0 ?
      resultados.map((livro) => { return (
        <div className='livro' key={livro.id}>
            <img src={livro.volumeInfo.imageLinks?.smallThumbnail} alt="" />
            <div className="textos">
              <p>Titulo: {livro.volumeInfo.title}</p>
              <p>Autores: {livro.volumeInfo.authors}</p>
              {livro.volumeInfo.industryIdentifiers.map((isbn, index) => {return(<p key={index}>{isbn.type}: {isbn.identifier}</p>)})}
            </div>
            <div className="botao">
              <button className='btnLista' onClick={() => handleAddLivrosFavoritos({id:livro.id, img: livro.volumeInfo.imageLinks.smallThumbnail, titulo: livro.volumeInfo.title, autores: livro.volumeInfo.authors, isbn: livro.volumeInfo.industryIdentifiers})} >Adicionar a minha lista</button>
            </div>
        </div>
      )})
      :<p>Sem resultados disponíveis!</p>
     }
    </>
  )
}

async function getBusca(name) {
  const url = `https://www.googleapis.com/books/v1/volumes?q=intitle:${name}`
  const {data} =  await axios.get(url)  
  return data.items
}

export default Index

