import React, { useState, useEffect } from 'react';
import fire from '../assets/fire.png';
import btc from '../assets/btc.png';
import usdt from '../assets/usdt.png';
import gainers from '../assets/gainers.png';
import recent from '../assets/recent.png';
import ReactSwitch from 'react-switch';
import { Rate } from '../components/cmc-table/Rate';
import TrendingCard from './TrendingCard';

const styles = {
  trendingWrapper: `mx-auto max-w-screen-2xl mx-[5rem]`,
  h1: `text-3xl text-white`,
  flexCenter: `flex items-center`,
};

const formatNum = num => {
  return Number(num.toFixed(2)).toLocaleString()
}

const trendingData = [
  {
    number: 1,
    symbol: 'BTC',
    name: 'Bitcoin',
    icon: btc,
    isIncrement: true,
    rate: '2.34',
  },
  {
    number: 2,
    symbol: 'USDT',
    name: 'Tether',
    icon: usdt,
    isIncrement: false,
    rate: '9.23',
  },
  {
    number: 3,
    symbol: 'BTC',
    name: 'Bitcoin',
    icon: btc,
    isIncrement: true,
    rate: '2.34',
  },
];

function Trending() {
  const [globalMarketCap, setGlobalMarketCap] = useState(null);
  const [marketCapChange, setMarketCapChange] = useState(null);

  useEffect(() => {
    fetchGlobalMarketData();
  }, []);

  const fetchGlobalMarketData = async () => {
    try {
      const response = await fetch('https://api.coingecko.com/api/v3/global');
      const data = await response.json();
      setGlobalMarketCap(data.data.total_market_cap.usd);
      setMarketCapChange(data.data.market_cap_change_percentage_24h_usd);
    } catch (error) {
      console.error('Failed to fetch global market data:', error);
    }
  };

  return (
    <div className="text-white">
      <div className={styles.trendingWrapper} id="Wrapper">
        <div className="flex justify-between">
          <h1 className={styles.h1}>Todays Cryptocurrency Prices by Market Cap</h1>
        </div>
        <br />
        <div className="flex">
          {globalMarketCap !== null && marketCapChange !== null && (
            <>
              <p>
                The global crypto market cap is ${formatNum(globalMarketCap)}, with a  &nbsp;
              </p>
              <span>
                <Rate isIncrement={marketCapChange > 0} rate={`${formatNum(marketCapChange)}`} />
              </span>
              <p>
                &nbsp; change over the last 24 hours.{' '}
                
              </p>
            </>
          )}
        </div>
        <br />

        <div className={styles.flexCenter}>
          <TrendingCard title="Trending" icon={fire} trendingData={trendingData} />
          <TrendingCard
            title="Biggest Gainers"
            icon={gainers}
            trendingData={trendingData}
          />
          <TrendingCard
            title="Recently Added"
            icon={recent}
            trendingData={trendingData}
          />
        </div>
      </div>
    </div>
  );
}

export default Trending;
