import React from 'react'
import { useEffect, useState } from 'react'
import AboutBTC from '../../components/aboutCoins/AboutBTC'
import AboutETH from '../../components/aboutCoins/AboutETH'
import AboutADA from '../../components/aboutCoins/AboutADA'
import AboutBNB from '../../components/aboutCoins/AboutBNB'
import AboutDOGE from '../../components/aboutCoins/AboutDOGE'
import AboutPolygon from '../../components/aboutCoins/AboutPolygon'
import AboutSOL from '../../components/aboutCoins/AboutSOL'
import AboutUSDT from '../../components/aboutCoins/AboutTether'
import AboutUSDC from '../../components/aboutCoins/AboutUSDC'
import AboutXRP from '../../components/aboutCoins/AboutXRP'


const styles = {
    activeTab: `p-1 px-2 mr-2 rounded-lg bg-[#171924]`,
    tabItem: `px-2`,
    tabCointainer: `flex items-center p-2 rounded-xl bg-[#222531] border border-gray-500/10 text-sm`,
    info: `min-h-screen`,
    main: `text-white mx-20 max-w-screen-2xl`,
    flexStart: `flex items-start`,
    flexBetween: `flex justify-between`,
    flexBetweenCenter: `flex justify-between items-center`,
    tabContainerWrapper: `p-10 pl-0 pr-0 w-1/3`,
    flexCenter: `flex items-center`
}

function Info() {
    
  const [coinName, setCoinName] = useState('')
  const [coinSymbol, setCoinSymbol]= useState('')
  const [price,setPrice] = useState('')

  useEffect(() => {
    getURLData()
  }, [])

  const getURLData = async () => {
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)

    setCoinName(urlParams.get('coin'))
    setPrice(urlParams.get('price').toLocaleString())
    setCoinSymbol(urlParams.get('symbol'))
  }


  switch (coinName) {
    case 'Bitcoin':
        return <AboutBTC />
        break;
    case 'Ethereum':
        return <AboutETH />
        break;
    case 'BNB':
        return <AboutBNB />
            break;
    case 'XRP':
        return <AboutXRP />
        break;
    case 'Cardano':
        return <AboutADA />
        break;
    case 'Dogecoin':
        return <AboutDOGE />
            break;
    case 'Polygon':
        return <AboutPolygon />
            break;
    case 'Solana':
        return <AboutSOL />
            break;
    case 'Tether':
        return <AboutUSDT />
            break;
    default:
        return <AboutUSDC />
        break;
}
}

export default Info