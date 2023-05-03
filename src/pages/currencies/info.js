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
  const [hRate, setHrate] = useState('')

  useEffect(() => {
    getURLData()
  }, [])

  const getURLData = async () => {
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)

    setCoinName(urlParams.get('coin'))
    setPrice(urlParams.get('price').toLocaleString())
    setCoinSymbol(urlParams.get('symbol'))
    setHrate(urlParams.get('hRate'))
  }


  switch (coinName) {
    case 'Bitcoin':
        return <AboutBTC />
    case 'Ethereum':
        return <AboutETH />
    case 'BNB':
        return <AboutBNB />
    case 'XRP':
        return <AboutXRP />
    case 'Cardano':
        return <AboutADA />
    case 'Dogecoin':
        return <AboutDOGE />
    case 'Polygon':
        return <AboutPolygon />
    case 'Solana':
        return <AboutSOL />
    case 'Tether':
        return <AboutUSDT />
    default:
        return <AboutUSDC />
}
}

export default Info