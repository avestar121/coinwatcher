import React from 'react'
import Header from '../../components/Header'
import { useEffect, useState } from 'react'
import Graph from '../Graph'
import xrp from '../../assets/xrp.png'
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

function AboutXRP({rank, coinName, price, hRate, coinSymbol,coinData, }) {
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
                          <Image src={xrp} width="100%" height="100%"/>
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
                  <p className='mb-10'>{`The live ${coinName} price today is $${price.toFixed(2)} USD with a 24-hour trading volume of $${formatNum(coinData.quote.USD.volume_24h)} USD. We update our ${coinSymbol} to USD price in real-time. The current CoinWatcher ranking is #${rank}, with a live market cap of $${formatNum(coinData.quote.USD.market_cap)} USD. It has a circulating supply of ${formatNum(coinData.circulating_supply)} ${coinSymbol} coins and a max. supply of 100,000,000,000 XRP coins.

If you would like to know where to buy ${coinName} at the current rate, the top cryptocurrency exchanges for trading in ${coinName} stock are currently Binance, OKX, Deepcoin, Bitrue, and CoinW. You can find others listed on our crypto exchanges page.`}</p>
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
                    <Graph symbol={'XRPUSDT'} activeTab={activeTab}/>
                    <br />
                    <p className="mb-3 font-bold" style={{ fontSize: '1.4rem' }}>What Is {coinName} ({coinSymbol}) / XRP Ledger?</p>
                  <p className='mb-10'>Launched in 2021, the XRP Ledger (XRPL) is an open-source, permissionless and decentralized technology. Benefits of the XRP Ledger include its low-cost ($0.0002 to transact), speed (settling transactions in 3-5 seconds), scalability (1,500 transactions per second) and inherently green attributes (carbon-neutral and energy-efficient). The XRP Ledger also features the first decentralized exchange (DEX) and custom tokenization capabilities built into the protocol. Since 2012, the XRP Ledger has been operating reliably, having closed 70 million ledgers.</p>
                  <p className="mb-3 font-bold" style={{ fontSize: '1.2rem' }}>Who Are the Founders of the XRP Ledger?</p>
                  <p className='mb-10'>In 2012, David Schwartz, Jed McCaleb and Arthur Britto launched the XRP Ledger with its native currency XRP as a faster, more energy-efficient alternative to the Bitcoin blockchain. In September that year, along with Chris Larsen, they founded the company that is today known as Ripple.</p>
                  <p className="mb-3 font-bold" style={{ fontSize: '1rem' }}>What Makes XRPL Unique?</p>
                  <p className ='mb-10'>The XRP Ledger presents a wide variety of applications and use cases related to payments including micropayments, DeFi, and, soon, NFTs. Deployed in 2012, the XRPL supports enterprises and Python, Java and JavaScript developers with powerful utility and flexibility. On the XRP website, developers can access different tutorials to help them get started using different coding languages, building apps, managing accounts and more.

Alongside its native coin, XRP, the XRP Ledger is used by developers to create solutions that solve inefficiencies, including remittance and asset tokenization. Currently, the five main applications of the XRP Ledger are payments, tokenization, DeFi, CBDCs and stablecoins.</p>
                  <p className="mb-3 font-bold" style={{ fontSize: '1rem' }}>How Many XRP Coins Are There in Circulation?</p>
                  <p className='mb-10'>The XRP Ledger architects gifted 80 billion XRP to Ripple so that the company could build use cases — including its global payments network, RippleNet — around the digital asset.

</p>
                  <p className="mb-3 font-bold" style={{ fontSize: '1.2rem' }}>How Is the XRP Ledger Network Secured?</p>
                  <p className='mb-10'>Unlike Bitcoin or Ethereum, the XRPL uses a unique Federated Consensus mechanism as its method of validating transactions. Transactions are confirmed on the XRPL through a consensus protocol, in which designated independent servers called validators come to an agreement on the order and outcome of XRP transactions. All servers in the network process each transaction according to the same rules, and any transaction that follows the protocol is confirmed right away. All transactions are public and transparent, and anyone can operate a validator. There are currently over 150 validators on the ledger, operated by universities, exchanges, businesses, and individuals around the world.

Through the Federated Consensus mechanism, all verified transactions can be processed without a single point of failure as no single participant makes a decision independently.</p>
                  <p className="mb-3 font-bold" style={{ fontSize: '1rem' }}>Where Can You Buy XRP?</p>
                  <p className='mb-10'>XRP is listed on many CeFi exchanges globally, including Binance, Huobi, FTX and Bitstamp.
</p>
                  <p className="mb-3 font-bold" style={{ fontSize: '1rem' }}>Ripple and the SEC</p>
                  <p className='mb-10'>Since late 2020, Ripple Labs, the creators of the XRP token, has been locked in a legal battle with the United States Securities and Exchange Commission. The big question is whether or not XRP is a security.

On Dec. 22, 2020, the SEC filed a lawsuit against Ripple Labs and two of its executives on the grounds that they traded $1.3 billion in their XRP token as security without registering it with the commission. There have been arguments for and against the lawsuit. However, Ripple has strongly countered the claims, arguing that the SEC has been biased in its assessment.

The SEC uses the “Howey test,” based on the Supreme Court ruling on SEC v. W.J. Howey Co in 1946, to determine whether a cryptocurrency is a security. An asset is considered a security if it is sold with the expectation of getting profits from the efforts of other parties. Based on the commission’s definition of XRP in its lawsuit, the cryptocurrency would pass the Howey test, and according to SEC regulations, all securities must be registered.

While most companies targeted by the SEC in a similar matter chose to settle, Ripple decided to fight. The outcome of the lawsuit will undoubtedly have far-reaching implications in the crypto space. If Ripple prevails, the SEC could lose some of its credibility, giving other crypto-based companies the confidence to revolt. On the flip side, if the SEC wins the case, it could upend the way crypto firms operate and usher in a new wave of registration rules that apply to securities.</p>
                </div>

            </div>
        </main>
    </div>
  )
}

export default AboutXRP;