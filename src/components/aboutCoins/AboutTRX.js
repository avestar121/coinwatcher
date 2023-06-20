import React from 'react'
import Header from '../Header'
import { useEffect, useState } from 'react'
import Graph from '../Graph'
import tron from '../../assets/tron-trx-logo.png';
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

function AboutTRX({rank, coinName, price, hRate, coinSymbol,coinData, }) {
  const [activeTab, setActiveTab] = useState('1M');


  const formatNum = num => {
    return Number(num.toFixed(2)).toLocaleString()
}


const [windowWidth, setWindowWidth] = useState(0);

useEffect(() => {
  setWindowWidth(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);

const determineContainerStyle = () => {
  if (windowWidth < 950) {
    return styles.bigDetailsContainerColumn;
  }
  return styles.bigDetailsContainer;
};

const containerStyle = determineContainerStyle();


  return (
    <div className={styles.info}>
        <Header />
        <main className={styles.main}>
            <div className = {styles.flexStart}>
                <div className={styles.tabContainerWrapper}>
                  <div className={containerStyle}>
                    <div className={styles.detailsContainer}>
                    <div className={styles.flexColumn}>
                      <div className={styles.detailsLine}>
                        <div className={styles.imageContainer}>
                          <Image src={tron} width="100%" height="100%"/>
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
                            {coinData.tags.slice(0,4).map((tag,index) => {
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
                  <p className="mb-3 font-bold" style={{ fontSize: '1.4rem' }}>TRON Price Live Data</p>
                  <p className='mb-10'>{`The live TRON price today is $${price.toFixed(2)} USD with a 24-hour trading volume of $${formatNum(coinData.quote.USD.volume_24h)} USD. We update our TRON to USD price in real-time. The current CoinWatcher ranking is #${rank}, with a live market cap of $${formatNum(coinData.quote.USD.market_cap)} USD. It has a circulating supply of ${formatNum(coinData.circulating_supply)} TRON coins and a max. supply is not available.

If you would like to know where to buy TRON at the current rate, the top cryptocurrency exchanges for trading in TRON stock are currently Binance, OKX, Deepcoin, CoinW, and Bitrue. You can find others listed on our crypto exchanges page.`}</p>
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
                         <Graph symbol={'TRXUSDT'} activeTab={activeTab}/>
                    </div>
                    <br />
                    <p className="mb-3 font-bold" style={{ fontSize: '1.4rem' }}>What Is TRON (TRX)?</p>
                  <p className='mb-10'>{`TRON (TRX) is a decentralized blockchain-based operating system developed by the Tron Foundation and launched in 2017. Originally TRX tokens were ERC-20-based tokens deployed on Ethereum, but a year later they were moved to their own network.

Initially, the project was created with the aim of providing full ownership rights to makers of digital content. The main goal is to help content creators (who receive only a small part of the income) and encourage them with more rewards for their work. How: invite content consumers to reward content makers directly (without intermediaries like YouTube, Facebook or Apple).

The TRON software supports smart contracts, various kinds of blockchain systems, and decentralized applications aka dApps. The cryptocurrency platform uses a transaction model similar to Bitcoin (BTC), namely UTXO. Transactions take place in a public ledger, where users can track the history of operations.

Therefore, the platform was built to create a decentralized Internet and serves as a tool for developers to create dApps, acting as an alternative to Ethereum. Anyone can create dApps on the TRON network, offer content, and in return receive digital assets as compensation for their efforts. The ability to create content and share it openly without hesitation regarding transaction fees is an undeniable advantage of TRON.`}</p>
                    
                </div>

                    <div className='pt-10 ml-5'>
                        {/* <Chat/>*/}
                    </div>
            </div>
        </main>
    </div>
  )
}

export default AboutTRX;