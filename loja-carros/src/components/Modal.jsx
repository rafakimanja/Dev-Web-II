import './Modal.css'

const Modal = ({ isOpen, setAbrirModal, children }) => {

    if (!isOpen) {
        return null
    }

    return (
        <div className='backgraound-modal'>
            <div className="overlay-modal">
                {children}
                <button onClick={() => setAbrirModal(false)} className='fechar'>X</button>
            </div>
        </div>
    )
}

export default Modal
