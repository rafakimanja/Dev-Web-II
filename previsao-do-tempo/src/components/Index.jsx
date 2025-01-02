import Busca from "./form/Busca"
import Card from "./card/Card"
import { useState } from "react"


const Index = () => {

    const [dadosPrevisao, setDadosPrevisao] = useState(null)

    const handleSetDados = (dados) => {
        setDadosPrevisao(dados)
    }

    return(
    <>
        <p>Pagina de Index da Aplicacoes</p>
        <Busca handleSetDados={handleSetDados}/>
        <br />
        <Card localizacao={dadosPrevisao}/>
    </>
    )
}

export default Index
