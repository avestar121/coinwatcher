import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Image from 'next/image';
import ExchangeRow from './ExchangeRow';

const styles = {
  tableRow: `
    text-white 
    border-b border-gray-800 
    text-sm sm:text-base 
    items-center 
    py-2 sm:py-4 
    pb-2 sm:pb-4 
    pt-2 sm:pt-4
  `,
  scrollableContainerX: `
    overflow-x: auto; /* Enable horizontal scrolling */
  `,
};

const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [showBTC, setShowBTC] = useState(true);
  const [showEstablishedIn, setShowEstablishedIn] = useState(true);

  useEffect(() => {
    fetchExchanges();
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize); 
    };
  }, []);

  const fetchExchanges = async () => {
    try {
      const response = await fetch('https://api.coingecko.com/api/v3/exchanges');
      const data = await response.json();
      const sortedExchanges = data.sort(
        (a, b) => b.trade_volume_24h_normalized - a.trade_volume_24h_normalized
      );
      setExchanges(sortedExchanges.slice(0, 10));
    } catch (error) {
      console.log('Error fetching exchanges:', error);
    }
  };

  const handleWindowResize = () => {
    setShowBTC(window.innerWidth >= 640);
    setShowEstablishedIn(window.innerWidth >= 425);
  };

  return (
    <div className="mb-10">
      <Header badgeExchanges={true} />
      <div className={`mx-4 sm:mx-20 ${styles.scrollableContainerX}`}>
        <h2 className="text-2xl sm:text-3xl text-white mt-6 sm:mt-10 mb-6 sm:mb-5">
          Top 10 Exchanges according to CoinWatcher
        </h2>
        <p className='text-white'>As of today, we track top 5 crypto exchanges to provide you with the best possible experience!</p>
        <div className="flex items-center justify-between text-sm sm:text-base font-bold text-white mt-6 sm:mt-10 mb-3">
          <p style={{ width: '25%' }}>Name</p>
          <p style={{ width: '25%' }}>Trade Volume 24h</p>
          {showEstablishedIn && <p style={{ width: '25%' }}>Established in:</p>}
          <p style={{ width: '25%' }}>Exchange link</p>
        </div>
        <ul>
          {exchanges.map((exchange) => (
            <li key={exchange.id} className={styles.tableRow}>
              <ExchangeRow
                name={exchange.name}
                image={exchange.image}
                year={exchange.year_established}
                link={exchange.url}
                volume={exchange.trade_volume_24h_btc_normalized}
                showBTC={showBTC}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Exchanges;
