import React from 'react'
import Header from '../../components/Header'
import { useEffect, useState } from 'react'
import Graph from '../Graph'
import usdc from '../../assets/usdc.png'
import Image from 'next/image'
import {Rate} from '../cmc-table/Rate'


const styles = {
  activeTab: `p-1 px-2 mr-2 rounded-lg bg-[#171924]`,
  infoBox: `p-1 px-2 mr-2 rounded-lg bg-[#2e2f39]`,
  tabItem: `px-2`,
  tabCointainer: `flex items-center p-2 rounded-xl bg-[#222531] border border-gray-500/10 text-sm`,
  info: `min-h-screen`,
  main: `text-white sm:mx-20 mx-5 max-w-screen-2xl`,
  flexStart: `flex sm:items-center sm:justify-center`,
  flexBetween: `flex flex-col justify-between`,
  flexBetweenCenter: `flex justify-between items-center`,
  tabContainerWrapper: `p-10 pl-0 pr-0 sm:w-2/3`,
  flexCenter: `flex items-center`,
  bigDetailsContainer: `flex flex-col sm:flex-row justify-between mb-20 `,
  detailsContainer: `flex w-1/2`,
  flexColumn: 'flex flex-col',
  imageContainer: `w-9 h-9`,
  detailsLine:`flex items-center my-1`
}

function AboutUSDC({rank, coinName, price, hRate, coinSymbol,coinData, }) {
  const [activeTab, setActiveTab] = useState('1M');


  const formatNum = num => {
    return Number(num.toFixed(2)).toLocaleString()
}


  return (
    <div className={styles.info}>
        <Header />
        <main className={styles.main}>
            <div className = {styles.flexStart}>
                <div className={styles.tabContainerWrapper}>
                  <div className={styles.bigDetailsContainer}>
                    <div className={styles.detailsContainer}>
                    <div className={styles.flexColumn}>
                      <div className={styles.detailsLine}>
                        <div className={styles.imageContainer}>
                          <Image src={usdc} width="100%" height="100%"/>
                        </div>
                        <p className="ml-3 font-bold" style={{ fontSize: '2rem' }}>{coinName}</p>
                        <p className='p-1 px-2 mr-2 rounded-lg bg-[#2e2f39] ml-3'>{coinSymbol}</p>
                      </div>
                      <div className={styles.detailsLine}>
                          <div className={styles.infoBox}>Rank #{rank}</div>
                      </div>
                      <div className={styles.detailsLine}> 
                            <p className='text-[#6f7577] text-sm mt-8'>Tags:  </p>
                      </div>
                      <div className={styles.detailsLine}> 
                            {coinData.tags.slice(0,3).map((tag,index) => {
                              return <p key={index} className='p-1 px-2 mr-2 rounded-lg bg-[#2e2f39] text-sm'>{tag}</p>
                            })}
                      </div>
                    </div>
                    {console.log(coinData)}
                    </div>
                    <div className={styles.detailsContainer}>
                        <div className={styles.flexColumn}>
                          <p className='text-[#6f7577]'>{`${coinName} Price(${coinSymbol})`}</p>
                            <div className={styles.detailsLine}>
                              <p className="mr-3 font-bold" style={{ fontSize: '1.5rem' }}>${price.toFixed(2)}</p>
                              <div className={styles.infoBox}><Rate isIncrement={hRate > 0 ? true : false} rate={hRate.toString().slice(0,4)}/></div>
                              </div>
                        <div className={styles.detailsLine}> 
                            <p className='text-[#6f7577] text-sm'>Market Cap :  </p>
                            <p className='ml-2 text-sm'>${formatNum(coinData.quote.USD.market_cap)}</p>
                        </div>
                        <div className={styles.detailsLine}> 
                            <p className='text-[#6f7577] text-sm'>Fully Diluted Market Cap :  </p>
                            <p className='ml-2 text-sm'>${formatNum(coinData.quote.USD.fully_diluted_market_cap)}</p>
                        </div>
                        <div className={styles.detailsLine}> 
                            <p className='text-[#6f7577] text-sm mt-8'>Volume 24h :  </p>
                            <p className='ml-2 text-sm mt-8'>${formatNum(coinData.quote.USD.volume_24h)}</p>
                            <div className='mt-8 ml-2 text-sm p-1 px-2 mr-2 rounded-lg bg-[#2e2f39]'><Rate isIncrement={coinData.quote.USD.volume_change_24h > 0 ? true : false} rate={coinData.quote.USD.volume_change_24h.toFixed(1)}/></div>
                        </div>
                        </div>
                        
                    </div>
                  </div>
                  <p className="mb-3 font-bold" style={{ fontSize: '1.4rem' }}>{coinSymbol} Price Live Data</p>
                  <p className='mb-10'>{`The live ${coinName} price today is $${price.toFixed(2)} USD with a 24-hour trading volume of $${formatNum(coinData.quote.USD.volume_24h)} USD. We update our ${coinSymbol} to USD price in real-time. The current CoinWatcher ranking is #${rank}, with a live market cap of $${formatNum(coinData.quote.USD.market_cap)} USD. It has a circulating supply of ${formatNum(coinData.circulating_supply)} ${coinSymbol} coins and the max. supply is not available.

If you would like to know where to buy ${coinName} at the current rate, the top cryptocurrency exchanges for trading in ${coinName} stock are currently Binance, OKX, Bitrue, CoinW, and Bybit. You can find others listed on our crypto exchanges page.`}</p>
                    <div className={styles.flexBetween} style={{ width: '90%' }}>
                        <div className={styles.tabContainer}>
                            <p className={styles.tabItem}>{coinSymbol} Price chart</p>
                        </div>
                         <div>
                            <button className={activeTab === '15m' ? styles.activeTab : styles.tabItem} onClick={() => setActiveTab('15m')}>15m</button>
                            <button className={activeTab === '30m' ? styles.activeTab : styles.tabItem} onClick={() => setActiveTab('30m')}>30m</button>
                            <button className={activeTab === '1h' ? styles.activeTab : styles.tabItem} onClick={() => setActiveTab('1h')}>1h</button>
                            <button className={activeTab === '4h' ? styles.activeTab : styles.tabItem} onClick={() => setActiveTab('4h')}>4h</button>
                            <button className={activeTab === '1d' ? styles.activeTab : styles.tabItem} onClick={() => setActiveTab('1d')}>1d</button>
                            <button className={activeTab === '1M' ? styles.activeTab : styles.tabItem} onClick={() => setActiveTab('1M')}>1M</button>
                         </div>
                         <Graph symbol={'USDCUSDT'} activeTab={activeTab}/>
                    </div>
                    <br />
                    <p className="mb-3 font-bold" style={{ fontSize: '1.4rem' }}>What Is {coinName} ({coinSymbol})?</p>
                  <p className='mb-10'>{`USD Coin (known by its ticker USDC) is a stablecoin that is pegged to the U.S. dollar on a 1:1 basis. Every unit of this cryptocurrency in circulation is backed up by $1 that is held in reserve, in a mix of cash and short-term U.S. Treasury bonds. The Centre consortium, which is behind this asset, says USDC is issued by regulated financial institutions.

The stablecoin originally launched on a limited basis in September 2018. Put simply, USD Coin's mantra is “digital money for the digital age” — and the stablecoin is designed for a world where cashless transactions are becoming more common.

Several use cases have been unveiled for the USD Coin. As well as providing a safe haven for crypto traders in times of volatility, those behind the stablecoin say it can also allow businesses to accept payments in digital assets, and shake up an array of sectors including decentralized finance and gaming.

Overall, the goal is to create an ecosystem where USDC is accepted by as many wallets, exchanges, service providers and dApps as possible.`}</p>
                    
                </div>

            </div>
        </main>
    </div>
  )
}

export default AboutUSDC;