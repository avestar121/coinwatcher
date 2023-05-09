import React, {useState,useEffect} from 'react';
import Image from 'next/image';

const styles = {
  exchangeRow: `flex items-center justify-between`,
};

const ExchangeRow = ({ name, image, year, link, volume, showBTC }) => {
  const [showEstablishedIn, setShowEstablishedIn] = useState(true);

  useEffect(() => {
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize); 
    };
  }, []);

  const handleWindowResize = () => {
    setShowEstablishedIn(window.innerWidth >= 425);
  };

  return (
    <div className={styles.exchangeRow}>
      <div style={{ width: '25%', height: '40px', display: 'flex', alignItems: 'center' }}>
        <Image src={image} width={30} height={30} alt={name} />
        <p className='sm:ml-3 ml-1 sm:font-bold font-thin' style={{ fontSize: '1rem' }}>{name}</p>
      </div>
      <div style={{ width: '25%', height: '40px', display: 'flex', alignItems: 'center' }}>
        {volume && volume ? (
          <p className='ml-1 sm:font-bold font-thin' style={{ fontSize: '1rem' }}>{`${volume.toLocaleString()}`}</p>
        ) : null}
        {showBTC && (
          <p className='text-[#6f7577] ml-2' style={{ fontSize: '1rem' }}>BTC</p>
        )}
      </div>
      {showEstablishedIn && <div style={{ width: '25%', height: '40px', display: 'flex', alignItems: 'center' }}>
        <p className='sm:ml-3 ml-1 sm:font-bold font-thin' style={{ fontSize: '1rem' }}>{year}</p>
      </div>}
      <div className='sm:ml-3 sm:font-bold' style={{ width: '25%', height: '40px', display: 'flex', alignItems: 'center' }}>
        {link ? (
          <a
            href="#"
            onClick={() => window.open(link, '_blank')}
            rel="noopener noreferrer"
            style={{ fontSize: '1rem', color: '#2565be', textDecoration: 'underline' }}
          >
            Link
          </a>
        ) : (
          'Link not provided'
        )}
      </div>
    </div>
  );
};

export default ExchangeRow;
