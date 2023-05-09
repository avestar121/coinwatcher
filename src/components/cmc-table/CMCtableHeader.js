import React, { useState } from 'react';
import ChevronDown from '@/assets/svg/chevronDown';
import Info from '@/assets/svg/info';

const styles = {
  textIcon: `flex items-center relative`,
  infoWindow: {
    position: 'absolute',
    top: '30px',
    left: '50%',
    width: '15rem',
    transform: 'translateX(-50%)',
    padding: '5px',
    backgroundColor: '#2e2f39',
    color: 'white',
    borderRadius: '4px',
    fontSize: '0.7rem',
    zIndex: 1,
  },
};

const CMCtableHeader = () => {
  const [infoMarketVisible, setinfoMarketVisible] = useState(false);
  const [infoVolumeVisible, setinfoVolumeVisible] = useState(false);
  const [infoSupplyVisible, setinfoSupplyVisible] = useState(false);

  const handleMarketInfoMouseEnter = () => {
    setinfoMarketVisible(true);
  };

  const handleMarketInfoMouseLeave = () => {
    setinfoMarketVisible(false);
  };

  const handleVolumeInfoMouseEnter = () => {
    setinfoVolumeVisible(true);
  };

  const handleVolumeInfoMouseLeave = () => {
    setinfoVolumeVisible(false);
  };

  const handleSupplyInfoMouseEnter = () => {
    setinfoSupplyVisible(true);
  };

  const handleSupplyInfoMouseLeave = () => {
    setinfoSupplyVisible(false);
  };

  return (
    <tbody>
      <tr>
        <th><b># &nbsp;</b></th>
        <th><ChevronDown /></th>
        <th>Name</th>
        <th>Price</th>
        <th>24h %</th>
        <th>7d %</th>
        <th>
          <div
            className={styles.textIcon}
          >
            <p className='mr-2'>Market Cap</p>
            <div            
            onMouseEnter={handleMarketInfoMouseEnter}
            onMouseLeave={handleMarketInfoMouseLeave}>
              <Info />
            </div>
            {infoMarketVisible && (
              <div style={styles.infoWindow}>The total market value of a cryptocurrency circulating supply. It is analogous to the free-float capitalization in the stock market.

              Market Cap = Current Price x Circulating Supply.</div>
            )}
          </div>
        </th>
        <th>
          <div
            className={styles.textIcon}
          >
            <p className='mr-2'>Volume</p>
            <div            
            onMouseEnter={handleVolumeInfoMouseEnter}
            onMouseLeave={handleVolumeInfoMouseLeave}>
              <Info />
            </div>
            {infoVolumeVisible && (
              <div style={styles.infoWindow}>A measure of how much of a cryptocurrency was traded.</div>
            )}
          </div>
        </th>
        <th>
          <div
            className={styles.textIcon}
          >
            <p className='mr-2'>Circulating Supply</p>
            <div            
            onMouseEnter={handleSupplyInfoMouseEnter}
            onMouseLeave={handleSupplyInfoMouseLeave}>
              <Info />
            </div>
            {infoSupplyVisible && (
              <div style={styles.infoWindow}>The amount of coins that are circulating in the market and are in public hands. It is analogous to the flowing shares in the stock market.</div>
            )}
          </div>
        </th>
        <th>Last 7 days</th>
      </tr>
    </tbody>
  );
};

export default CMCtableHeader;
