import {Card} from "antd";

function CryptocurrencyCard(props) {

    const { currency } = props

    const price = currency.quote.USD.price.toFixed(2)

    const change_24h = currency.quote.USD.percent_change_24h.toFixed(2)

    const market_cap = (currency.quote.USD.market_cap / 1e9).toFixed(2)

    const changeColor = change_24h >= 0 ? "text-green-400" : "text-red-400"

    return (
        <div>
            <Card
                title={
                <div className="flex items-center gap-3">
                    <img className="h-10" src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${currency.id}.png`}/>
                    <span className="font-bold text-2xl">{currency.name}</span>
                </div>
                }
                style={{
                    width: 500,
                }}
            >
                <div className="text-lg">
                    <p>Текущая цена: {price}$</p>
                    <p>Изменение за 24 часа: <span className={`${changeColor} font-semibold`}>{change_24h}%</span></p>
                    <p>Текущая капитализация: ${market_cap}B</p>
                </div>
            </Card>
        </div>
    )
}

export default CryptocurrencyCard
