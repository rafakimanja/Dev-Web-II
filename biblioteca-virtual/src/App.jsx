import { useState } from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Index from './components/main/Index'
import Favoritos from './components/main/Favoritos'
import RootLayout from './components/RootLayout'
import LivroDetalhe from './components/main/LivroDetalhe'

import './App.css'


function App() {

  const [livrosFavoritos, setLivrosFavoritos] = useState([])

  const handleAddLivrosFavoritos = (livro) => {
    setLivrosFavoritos(l => [...l, livro])
  }

  const handleDeleteLivrosFavoritos = (livro) => {
    setLivrosFavoritos(livrosFavoritos.filter((l) => l.id != livro.id))
  }

  const handleSetLivroDetalhe = (id) =>{
    return livrosFavoritos.find((livro) => livro.id == id)
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout/>,
      children: [
        {index: true, element: <Index handleAddLivrosFavoritos={handleAddLivrosFavoritos}/>},
        {path: 'lista', element: <Favoritos livros={livrosFavoritos}/>},
        {path: 'detalhe/:id', element: <LivroDetalhe handleSetLivroDetalhe={handleSetLivroDetalhe} handleDeleteLivrosFavoritos={handleDeleteLivrosFavoritos}/>}
      ]
    }
  ])
  
  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App

