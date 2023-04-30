import React from 'react'
import Image from 'next/image'
import btc from '../../assets/btc.png'
import eth from '../../assets/eth.png'
import usdt from '../../assets/usdt.png'
import bnb from '../../assets/bnb.png'
import usdc from '../../assets/usdc.png'
import xrp from '../../assets/xrp.png'
import cardano from '../../assets/cardano.png'
import doge from '../../assets/dogecoin-doge-logo.png'
import matic from '../../assets/matic-logo.webp'
import solana from '../../assets/solana.png'


const styles = {
  coinNameRow: `flex items-center`,
  buyButton: `bg-[#1A1F3A] text-[#6188FF] p-1 px-3 text-sm rounded-lg cursor-pointer hover:opacity-50`
}

const CoinNameRow = ({name, icon,clicked}) => {
  const coinIcon = () => {
    switch(name){
      case 'Bitcoin':
        return (
          <Image 
            src={btc}
            className='rounded-full'
            width={20}
            height={20}
            alt=''/>
        )
        case 'Ethereum':
          return (
            <Image 
              src={eth}
              className='rounded-full'
              width={20}
              height={20}
              alt=''/>
          )
          case 'Tether':
        return (
          <Image 
            src={usdt}
            className='rounded-full'
            width={20}
            height={20}
            alt=''/>
        )
        case 'BNB':
        return (
          <Image 
            src={bnb}
            className='rounded-full'
            width={20}
            height={20}
            alt=''/>
        )
        case 'USD Coin':
        return (
          <Image 
            src={usdc}
            className='rounded-full'
            width={20}
            height={20}
            alt=''/>
        )
        case 'XRP':
        return (
          <Image 
            src={xrp}
            className='rounded-full'
            width={20}
            height={20}
            alt=''/>
        )
        case 'Cardano':
        return (
          <Image 
            src={cardano}
            className='rounded-full'
            width={20}
            height={20}
            alt=''/>
        )
        case 'Dogecoin':
        return (
          <Image 
            src={doge}
            className='rounded-full'
            width={20}
            height={20}
            alt=''/>
        )
        case 'Polygon':
        return (
          <Image 
            src={matic}
            className='rounded-full'
            width={20}
            height={20}
            alt=''/>
        )
        case 'Solana':
        return (
          <Image 
            src={solana}
            className='rounded-full'
            width={20}
            height={20}
            alt=''/>
        )
    }
  }

  return (
    <div className={styles.coinNameRow}>
        <div className='mr-3 flex' onClick={clicked}>
          <div className='mr-2'>{coinIcon()}</div>
          {name}
          
        </div>
    </div>
  )
}

export default CoinNameRow