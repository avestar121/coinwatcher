import React from 'react'
import Header from '../../components/Header'
import solana from '../../assets/solana.png'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Chart from 'chart.js'
import Image from 'next/image'
import Graph from '../Graph'


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

function AboutBNB() {
    
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

  return (
    <div className={styles.info}>
        <Header />
        <main className={styles.main}>
            <div className = {styles.flexStart}>
                <div className={styles.tabContainerWrapper}>
                    <div className={styles.flexBetween}>
                        <Graph symbol={'BNBUSDT'}/>
                    </div>
                    <br />
                    {/* */}
                    <br />
                    <div className={styles.flexBetweenCenter}>
                        <p>
                            Want more data?{' '}
                            <span className='text-[#6188FF]'>Check out our API</span>
                        </p>
                    </div>
                    <br />
                    <br />
                    <p>{coinName}</p>
                </div>

                    <div className='pt-10 ml-5'>
                        {/* <Chat/>*/}
                    </div>

            </div>
        </main>
    </div>
  )
}

export default AboutBNB;