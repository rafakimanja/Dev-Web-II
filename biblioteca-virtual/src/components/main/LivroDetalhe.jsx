import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const LivroDetalhe = ({ handleSetLivroDetalhe, handleDeleteLivrosFavoritos }) => {
    const { id } = useParams()
    const [livro, setLivro] = useState({}) 
    const navigate = useNavigate()

    useEffect(() => {
        const livroDet = handleSetLivroDetalhe(id)
        setLivro(livroDet)
    }, [id, handleSetLivroDetalhe])

    const handleRemoveLivro = (livro) => {
        handleDeleteLivrosFavoritos(livro)
        navigate("/lista")
    }

    return (
        <>
            <div className='livro'>
                <img src={livro.img} alt={livro.titulo} />
                <div className="textos">
                    <p>Título: {livro.titulo}</p>
                    <p>Autores: {livro.autores}</p>
                    {livro.isbn && livro.isbn.map((isbn, index) => (
                        <p key={index}>{isbn.type}: {isbn.identifier}</p>
                    ))}
                </div>
                <div className="botao">
                    <button className='btnLista' onClick={() => handleRemoveLivro(livro)}>Excluir da minha lista</button>
                </div>
            </div>
        </>
    );
};

export default LivroDetalhe;
