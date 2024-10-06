import { useState } from 'react'
import { createPortal } from 'react-dom'
import './CarroEstoque.css'
import Modal from './Modal'


const CarroEstoque = ({marca, modelo, ano, cor, removeCarro, addCarroVendido, id}) => {

    const [abrirModalExclusao, setAbrirModalExclusao] = useState(false)
    const [abrirModal, setAbrirModal] = useState(false)
    const [inputNome, setInputNome] = useState("")
    const [inputCpf, setInputCpf] = useState("")

    const handleInputNomeChange = e => {
        setInputNome(e.target.value)
    }

    const handleInputCpfChange = e => {
        setInputCpf(e.target.value)
    }

    return(
        <div className="card">
            <div className='imagens'>
                <div className="img-carro">
                    <img src="/car.png" />
                </div>
                <button className='excluir' onClick={() => {setAbrirModalExclusao(true)}}>
                    <img src="/close.svg" />
                </button>
                {
                    abrirModalExclusao && createPortal(
                        <Modal isOpen={abrirModalExclusao} setAbrirModal={() => setAbrirModalExclusao(false)}>
                            <div className='form-modal'>
                                <p>Tem certeza que deseja excluir este carro?</p>
                                <button onClick={() => {
                                    removeCarro(id)
                                }}>Confirmar</button>
                            </div>
                        </Modal>,
                        document.body
                    )
                }
            </div>
            <h3>{modelo}</h3>
            <p>Marca: {marca}</p>
            <p>Ano: {ano}</p>
            <p>Cor: {cor}</p>
            <button className='vendido' onClick={() => {setAbrirModal(true)}}>Vendido</button>
                {
                    abrirModal && createPortal(
                        <Modal isOpen={abrirModal} setAbrirModal={() => setAbrirModal(!abrirModal)} > 
                            <div className='form-modal'>
                                <label htmlFor="nome">Nome do Comprador:</label>
                                <input type="text" name="nome" value={inputNome} className='input-modal' onChange={handleInputNomeChange} />
                                <label htmlFor="cpf">Cpf do comprador:</label>
                                <input type="text" name="cpf" value={inputCpf} className='input-modal' onChange={handleInputCpfChange} />
                                <button onClick={() => {
                                    if(inputNome && inputCpf){
                                        addCarroVendido(id, inputNome, inputCpf)
                                        removeCarro(id)
                                    }
                                }}>Salvar</button>
                            </div>
                        </Modal>,
                        document.body
                    )
                }
        </div>
    )
}

export default CarroEstoque