import React, {useState, useContext, useEffect,useCallback} from 'react'
import AboutBTC from '../components/aboutCoins/AboutBTC'
import AboutETH from '../components/aboutCoins/AboutETH'
import AboutADA from '../components/aboutCoins/AboutADA'
import AboutBNB from '../components/aboutCoins/AboutBNB'
import AboutDOGE from '../components/aboutCoins/AboutDOGE'
import AboutPolygon from '../components/aboutCoins/AboutPolygon'
import AboutSOL from '../components/aboutCoins/AboutSOL'
import AboutUSDT from '../components/aboutCoins/AboutTether'
import AboutUSDC from '../components/aboutCoins/AboutUSDC'
import AboutXRP from '../components/aboutCoins/AboutXRP'
import {CoinMarketContext} from '../contex/contex'


function Info() {
  let {getTopTenCoins} = useContext(CoinMarketContext)
  let [coinData,setCoinData] = useState(null)  
  const [coinName, setCoinName] = useState('')

  useEffect(() => {
    getURLData()
  }, [])

  useEffect(() => {
    setData()
},[])

const setData = useCallback(async () => {
    try{
        let apiResponse = await getTopTenCoins();
        let filteredResponse = []

        for(let i = 0; i < apiResponse.length; i++){
            const element = apiResponse[i]
            if(element.cmc_rank <= 10) filteredResponse.push(element)
        }

        setCoinData(filteredResponse)
    }catch(e){
        console.log(e.message)
    }
}, [getTopTenCoins])

  const getURLData = async () => {
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)

    setCoinName(urlParams.get('coin'))
  }


  switch (coinName) {
    case 'Bitcoin':
        const bitcoinData = coinData && coinData ? (
            coinData.find(coin => coin.name === 'Bitcoin')
        ) : (null)
        return <>{bitcoinData && <AboutBTC 
            coinData={bitcoinData} 
            coinName={bitcoinData.name} 
            price = {bitcoinData.quote.USD.price} 
            hRate={bitcoinData.quote.USD.percent_change_24h}
            coinSymbol = {bitcoinData.symbol}
            rank ={bitcoinData.cmc_rank}/>}</>
    case 'Ethereum':
        const ethData = coinData && coinData ? (
            coinData.find(coin => coin.name === 'Ethereum')
        ) : (null)
        return <>{ethData && <AboutETH 
            coinData={ethData} 
            coinName={ethData.name} 
            price = {ethData.quote.USD.price} 
            hRate={ethData.quote.USD.percent_change_24h}
            coinSymbol = {ethData.symbol}
            rank ={ethData.cmc_rank}/>}</>
    case 'BNB':
        const bnbData = coinData && coinData ? (
            coinData.find(coin => coin.name === 'BNB')
        ) : (null)
        return <>{bnbData && <AboutBNB 
            coinData={bnbData} 
            coinName={bnbData.name} 
            price = {bnbData.quote.USD.price} 
            hRate={bnbData.quote.USD.percent_change_24h}
            coinSymbol = {bnbData.symbol}
            rank ={bnbData.cmc_rank}/>}</>
    case 'XRP':
        const xrpData = coinData && coinData ? (
            coinData.find(coin => coin.name === 'XRP')
        ) : (null)
        return <>{xrpData && <AboutXRP
            coinData={xrpData} 
            coinName={xrpData.name} 
            price = {xrpData.quote.USD.price} 
            hRate={xrpData.quote.USD.percent_change_24h}
            coinSymbol = {xrpData.symbol}
            rank ={xrpData.cmc_rank}/>}</>
    case 'Cardano':
        const cardanoData = coinData && coinData ? (
            coinData.find(coin => coin.name === 'Cardano')
        ) : (null)
        return <>{cardanoData && <AboutADA 
            coinData={cardanoData} 
            coinName={cardanoData.name} 
            price = {cardanoData.quote.USD.price} 
            hRate={cardanoData.quote.USD.percent_change_24h}
            coinSymbol = {cardanoData.symbol}
            rank ={cardanoData.cmc_rank}/>}</>
    case 'Dogecoin':
        const godeData = coinData && coinData ? (
            coinData.find(coin => coin.name === 'Dogecoin')
        ) : (null)
        return <>{godeData && <AboutDOGE 
            coinData={godeData} 
            coinName={godeData.name} 
            price = {godeData.quote.USD.price} 
            hRate={godeData.quote.USD.percent_change_24h}
            coinSymbol = {godeData.symbol}
            rank ={godeData.cmc_rank}/>}</>
    case 'Polygon':
        const maticData = coinData && coinData ? (
            coinData.find(coin => coin.name === 'Polygon')
        ) : (null)
        return <>{maticData && <AboutPolygon 
            coinData={maticData} 
            coinName={maticData.name} 
            price = {maticData.quote.USD.price} 
            hRate={maticData.quote.USD.percent_change_24h}
            coinSymbol = {maticData.symbol}
            rank ={maticData.cmc_rank}/>}</>
    case 'Solana':
        const solData = coinData && coinData ? (
            coinData.find(coin => coin.name === 'Solana')
        ) : (null)
        return <>{solData && <AboutSOL 
            coinData={solData} 
            coinName={solData.name} 
            price = {solData.quote.USD.price} 
            hRate={solData.quote.USD.percent_change_24h}
            coinSymbol = {solData.symbol}
            rank ={solData.cmc_rank}/>}</>
    case 'Tether':
        const usdtData = coinData && coinData ? (
            coinData.find(coin => coin.name === 'Tether')
        ) : (null)
        return <>{usdtData && <AboutUSDT 
            coinData={usdtData} 
            coinName={usdtData.name} 
            price = {usdtData.quote.USD.price} 
            hRate={usdtData.quote.USD.percent_change_24h}
            coinSymbol = {usdtData.symbol}
            rank ={usdtData.cmc_rank}/>}</>
    default:
        const usdcData = coinData && coinData ? (
            coinData.find(coin => coin.name === 'USD Coin')
        ) : (null)
        return <>{usdcData && <AboutUSDC 
            coinData={usdcData} 
            coinName={usdcData.name} 
            price = {usdcData.quote.USD.price} 
            hRate={usdcData.quote.USD.percent_change_24h}
            coinSymbol = {usdcData.symbol}
            rank ={usdcData.cmc_rank}/>}</>
}
}

export default Info