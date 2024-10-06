import './CarroVendido.css'
import Modal from './Modal'
import { useState } from 'react'
import { createPortal } from 'react-dom';



const CarroVendido = ({marca, modelo, ano, cor, nome, cpf, id, removeCarroVendido}) => {

    const [abrirModalExclusao, setAbrirModalExclusao] = useState(false)

    return(
        <div className="card">
            <div className='imagens'>
                <div className="img-carro">
                    <img src="/car.png" alt="" srcset="" />
                </div>
                <button className='excluir' onClick={() => {setAbrirModalExclusao(true)}}>
                    <img src="/close.svg" alt="" srcset="" />
                </button>
                {
                    abrirModalExclusao && createPortal(
                        <Modal isOpen={abrirModalExclusao} setAbrirModal={() => setAbrirModalExclusao(false)}>
                            <div className='form-modal'>
                                <p>Tem certeza que deseja excluir este carro?</p>
                                <button onClick={() => {
                                   removeCarroVendido(id)
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
            <p>Cliente: {nome}</p>
            <p>CPF: {cpf}</p>
        </div>
    )
}

export default CarroVendido