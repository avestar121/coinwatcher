import React, { useState, useEffect } from 'react';
import ReactSwitch from 'react-switch';
import { Rate } from '../components/cmc-table/Rate';
import TrendingCard from './TrendingCard';
import TrendingCard2 from './TrendingCard2';
import TrendingCard3 from './TrendingCard3';
import TrendingCard4 from './TrendingCard4';


const styles = {
  trendingWrapper: `mx-0.5 max-w-screen-2xl`,
  h1: `text-3xl text-white`,
  flexCenter: `flex flex-col sm:flex-row items-center`,
};


const formatNum = num => {
  return Number(num.toFixed(2)).toLocaleString()
}

const formatNumberToTrillions = (number) => {
  if (number >= 1_000_000_000_000) {
    return `$${(number / 1_000_000_000_000).toFixed(1)} Trillion`;
  } else if (number >= 1_000_000_000 && (number < 1_000_000_000)){
    return `$${(number / 1_000_000_000).toFixed(1)} Billion`;
  }else {
    return `$${number.toLocaleString()}`;
  }
};


function Trending() {
  const [globalMarketCap, setGlobalMarketCap] = useState(null);
  const [marketCapChange, setMarketCapChange] = useState(null);
  const [totalVolume, setTotalVolume] = useState(null)
  const [showTrendingCards, setShowTrendingCards] = useState(true);
  const [btcDominance, setBtcDominance] = useState(null)
  const [totalCoins, setTotalCoins]= useState(null)

  useEffect(() => {
    fetchGlobalMarketData();
  }, []);

  const fetchGlobalMarketData = async () => {
    try {
      const response = await fetch('https://api.coingecko.com/api/v3/global');
      const data = await response.json();
      setGlobalMarketCap(data.data.total_market_cap.usd);
      setMarketCapChange(data.data.market_cap_change_percentage_24h_usd);
      setTotalVolume(data.data.total_volume.usd)
      setBtcDominance(data.data.market_cap_percentage.btc)
      setTotalCoins(data.data.active_cryptocurrencies)
      
      console.log(data)
    } catch (error) {
      console.error('Failed to fetch global market data:', error);
    }
  };

  const handleSwitchToggle = () => {
    setShowTrendingCards(!showTrendingCards);
  };

  return (
    <div className="text-white">
      <div className="sm:ml-[5rem] sm:mr-[5rem] mx-3">
          <h1 className={styles.h1}>Todays Top 10 Cryptocurrencies Prices by Market Cap</h1>
        
        <br />
        <div className="flex justify-between">
          {globalMarketCap !== null && marketCapChange !== null && (
            <>
                <p className="sm:flex sm:items-center">
                  The global crypto market cap is {formatNumberToTrillions(globalMarketCap)}, with a 
                  <span className='ml-1 mr-1'>
                  <Rate isIncrement={marketCapChange > 0} rate={`${formatNum(marketCapChange)}`} chevron={true}/>
                  </span>
                  change over the last 24 hours.
                </p>
              <div className={styles.flexCenter}>
                <ReactSwitch
                  checked={showTrendingCards}
                  onChange={handleSwitchToggle}
                />
                <span className='ml-3 font-bold'>Show Statistics</span>
              </div>
            </>
          )}
        </div>
        <br />

        {showTrendingCards && (
        <div className={`mb-10 ${styles.flexCenter}` }>
          <TrendingCard cap={globalMarketCap} capChange={marketCapChange}/>
          <TrendingCard2 volume={totalVolume}/>
          <TrendingCard3 dominance={btcDominance} />
          <TrendingCard4 totalCoins={totalCoins}/>
        </div>
)}
      </div>
    </div>
  );
}

export default Trending;
