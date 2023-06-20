import React, {useState, useContext, useEffect,useCallback} from 'react'
import eth from '../../assets/eth.png'
import {CoinMarketContext} from '../../contex/contex'
import CMCtableHeader from './CMCtableHeader'
import CMCtableRow from './CMCTableRow'



const CMCTable = () => {
    let {getTopTenCoins} = useContext(CoinMarketContext)
    let [coinData,setCoinData] = useState(null)

    useEffect(() => {
        setData()
    },[])

    const setData = useCallback(async () => {
        try{
            let apiResponse = await getTopTenCoins();
            let filteredResponse = []

            for(let i = 0; i < apiResponse.length; i++){
                const element = apiResponse[i]
                if(element.cmc_rank <= 5) filteredResponse.push(element)
            }

            setCoinData(filteredResponse)
        }catch(e){
            console.log(e.message)
        }
    }, [getTopTenCoins])
  return (
    <div className="sm:ml-[5rem] sm:mr-[5rem] mx-2" style={{color: 'white', overflowX: 'auto', overflowY: 'hidden'}}>
        <div className='mx-auto max-w-screen-2xl'>
            <table className='w-full'>
                <CMCtableHeader />
                {coinData && coinData ? (
                    coinData.map((coin,index) => {
                        return (
                            <CMCtableRow 
                            key = {index}
                            starNum = {coin.cmc_rank}
                            coinName= {coin.name}
                            coinSymbol = {coin.symbol}
                            coinIcon = {eth}
                            showBuy = {true}
                            hRate = {coin.quote.USD.percent_change_24h}
                            dRate = {coin.quote.USD.percent_change_7d}
                            hRateIsIncrement = {true}
                            price = {coin.quote.USD.price}
                            marketCapValue = {coin.quote.USD.market_cap}
                            volumeCryptoValue = {coin.quote.USD.volume_24h}
                            volumeValue = {coin.total_supply}
                            circulatingSupply = {coin.circulating_supply}
                            />
                            
                        )
                    })
                ) : (
                    <></>
                )}
            </table>
        </div>
    </div>
  )
}

export default CMCTable