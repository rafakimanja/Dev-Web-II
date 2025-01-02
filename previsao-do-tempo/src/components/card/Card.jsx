import './Card.css'

const Card = ({localizacao}) => {

    return(
    <>
    {
        localizacao ? (
            <div className="background-card">
                <header>{localizacao.city}</header>
                <div className="main-content">
                    <div className="top-main">
                        <h2>{localizacao.description}</h2>
                    </div>
                    <div className="center-main">
                        <img src={`https://assets.hgbrasil.com/weather/icons/conditions/${localizacao.condition_slug}.svg`} alt={localizacao.condition_slug} />
                        <h2>{localizacao.temp}ºC</h2>
                    </div>
                    <div className="bottom-main">
                        <h2>Max: {localizacao.forecast[0].max}ºC</h2>
                        <h2>Min: {localizacao.forecast[0].min}ºC</h2>
                    </div>
                    <p>{localizacao.date}</p>
                </div>
                <footer>
                    <p>Chuva: {localizacao.forecast[0].rain_probability}%</p>
                    <p>Umidade: {localizacao.humidity}%</p>
                    <p>Vento: {localizacao.forecast[0].wind_speedy}</p>
                </footer>
            </div>
        ) : <p>Sem dados de localizacao!</p>
    }
    </>
    )
}

export default Card
