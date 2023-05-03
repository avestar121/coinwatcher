import React from 'react'
import Header from '../../components/Header'
import { useEffect, useState } from 'react'
import Graph from '../Graph'
import btc from '../../assets/btc.png'
import Image from 'next/image'
import {Rate} from '../cmc-table/Rate'

const styles = {
    activeTab: `p-1 px-2 mr-2 rounded-lg bg-[#171924]`,
    tabItem: `px-2`,
    tabCointainer: `flex items-center p-2 rounded-xl bg-[#222531] border border-gray-500/10 text-sm`,
    info: `min-h-screen`,
    main: `text-white mx-20 max-w-screen-2xl`,
    flexStart: `flex items-start`,
    flexBetween: `flex justify-between`,
    flexBetweenCenter: `flex justify-between items-center`,
    tabContainerWrapper: `p-10 pl-0 pr-0 w-2/3`,
    flexCenter: `flex items-center`,
    bigDetailsContainer: `flex justify-between mb-20 `,
    detailsContainer: `flex w-1/2`,
    flexColumn: 'flex flex-col',
    imageContainer: `w-9 h-9`,
    detailsLine:`flex items-center`
}

function AboutBTC() {
  const [activeTab, setActiveTab] = useState('1M');
  const [coinName, setCoinName] = useState('')
  const [coinSymbol, setCoinSymbol]= useState('')
  const [price,setPrice] = useState(0)
  const [hRate, setHrate] = useState('')

  useEffect(() => {
    getURLData()
  }, [])

  useEffect(() => {
    <Graph symbol={'BTCUSDT'} activeTab={activeTab}/>
  }, [activeTab]);

  const getURLData = async () => {
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)

    setCoinName(urlParams.get('coin'))
    setPrice(Number(urlParams.get('price')).toLocaleString())
    setCoinSymbol(urlParams.get('symbol'))
    setHrate(urlParams.get('hRate'))
  }

  return (
    <div className={styles.info}>
        <Header />
        <main className={styles.main}>
            <div className = {styles.flexStart}>
                <div className={styles.tabContainerWrapper}>
                  <div className={styles.bigDetailsContainer}>
                    <div className={styles.detailsContainer}>

                      <div className={styles.detailsLine}>
                        <div className={styles.imageContainer}>
                          <Image src={btc} width="100%" height="100%"/>
                        </div>
                        <p className="ml-3 font-bold" style={{ fontSize: '2rem' }}>Bitcoin</p>
                        
                      </div>

                    </div>

                    <div className={styles.detailsContainer}>
                        <div className={styles.flexColumn}>
                          <p className='text-[#6f7577]'>{"Bitcoin Price(BTC)"}</p>
                            <div className={styles.detailsLine}>
                              <p className="mr-3 font-bold" style={{ fontSize: '1.5rem' }}>{price.toString().slice(0,-1)}</p>
                              <Rate isIncrement={true} rate={hRate.slice(0,4)}/>
                            </div>
                        </div>
                    </div>
                    
                  </div>
                    <div className={styles.flexBetween}>
                        <div className={styles.tabContainer}>
                            <p className={styles.tabItem}>Price chart</p>
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
                    <div className={styles.flexBetweenCenter}>
                        <p>
                            Want more data?{' '}
                            <span className='text-[#6188FF]'>Check out our API</span>
                        </p>
                    </div>
                    <br />
                    <br />
                    
                </div>

                    <div className='pt-10 ml-5'>
                        {/* <Chat/>*/}
                    </div>
            </div>
        </main>
    </div>
  )
}

export default AboutBTC;