import React from 'react'
import Header from '../../components/Header'
import { useEffect, useState } from 'react'
import Graph from '../Graph'
import btc from '../../assets/btc.png'
import Image from 'next/image'
import {Rate} from '../cmc-table/Rate'


const styles = {
    activeTab: `p-1 px-2 mr-2 rounded-lg bg-[#171924]`,
    infoBox: `p-1 px-2 mr-2 rounded-lg bg-[#2e2f39]`,
    tabItem: `px-2`,
    tabCointainer: `flex items-center p-2 rounded-xl bg-[#222531] border border-gray-500/10 text-sm`,
    info: `min-h-screen`,
    main: `text-white mx-20 max-w-screen-2xl`,
    flexStart: `flex items-center justify-center`,
    flexBetween: `flex justify-between`,
    flexBetweenCenter: `flex justify-between items-center`,
    tabContainerWrapper: `p-10 pl-0 pr-0 w-2/3`,
    flexCenter: `flex items-center`,
    bigDetailsContainer: `flex justify-between mb-20 `,
    detailsContainer: `flex w-1/2`,
    flexColumn: 'flex flex-col',
    imageContainer: `w-9 h-9`,
    detailsLine:`flex items-center my-1`
}

function AboutBTC({rank, coinName, price, hRate, coinSymbol,coinData, }) {
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
                          <Image src={btc} width="100%" height="100%"/>
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
                            {coinData.tags.slice(0,4).map(tag => {
                              return <p className='p-1 px-2 mr-2 rounded-lg bg-[#2e2f39] text-sm'>{tag}</p>
                            })}
                      </div>
                    </div>
                    {console.log(coinData)}
                    </div>
                    <div className={styles.detailsContainer}>
                        <div className={styles.flexColumn}>
                          <p className='text-[#6f7577]'>{"Bitcoin Price(BTC)"}</p>
                            <div className={styles.detailsLine}>
                              <p className="mr-3 font-bold" style={{ fontSize: '1.5rem' }}>{price.toFixed(2)}</p>
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
                  <p className="mb-3 font-bold" style={{ fontSize: '1.4rem' }}>BTC Price Live Data</p>
                  <p className='mb-10'>{`The live Bitcoin price today is $${price.toFixed(2)} USD with a 24-hour trading volume of $${formatNum(coinData.quote.USD.volume_24h)} USD. The current CoinWatcher ranking is #${rank}, with a live market cap of $${formatNum(coinData.quote.USD.market_cap)} USD. It has a circulating supply of ${formatNum(coinData.circulating_supply)} BTC coins and a max. supply of 21,000,000 BTC coins.
If you would like to know where to buy Bitcoin at the current rate, the top cryptocurrency exchanges for trading in Bitcoin stock are currently Binance, OKX, Deepcoin, CoinW, and Bitrue. You can find others listed on our crypto exchanges page.`}</p>
                    <div className={styles.flexBetween}>
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
                    </div>
                    <br />
                    <Graph symbol={'BTCUSDT'} activeTab={activeTab}/>
                    <br />
                    <p className="mb-3 font-bold" style={{ fontSize: '1.4rem' }}>What Is Bitcoin (BTC)?</p>
                  <p className='mb-10'>{`Bitcoin is a decentralized cryptocurrency originally described in a 2008 whitepaper by a person, or group of people, using the alias Satoshi Nakamoto. It was launched soon after, in January 2009.

Bitcoin is a peer-to-peer online currency, meaning that all transactions happen directly between equal, independent network participants, without the need for any intermediary to permit or facilitate them. Bitcoin was created, according to Nakamoto’s own words, to allow “online payments to be sent directly from one party to another without going through a financial institution.”

Some concepts for a similar type of a decentralized electronic currency precede BTC, but Bitcoin holds the distinction of being the first-ever cryptocurrency to come into actual use.`}</p>
                    
                </div>
            </div>
        </main>
    </div>
  )
}

export default AboutBTC;