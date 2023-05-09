import React from 'react';
import { Rate } from '../components/cmc-table/Rate';

const styles = {
  trendingCard: `
    w-full p-2 py-3 pb-0 bg-[#323546] rounded-xl text-white 
    mr-3 border-l-8 overflow-hidden mb-2
  `,
  trendingCardWrapper: `flex items-center justify-between`,
};

const formatNum = (num) => {
  if (typeof num !== 'undefined') {
    return Number(num.toFixed(2)).toLocaleString();
  }
  return '';
};

const TrendingCard = ({ icon, trendingData, cap, capChange }) => {
  const borderColor = capChange < 0 ? 'border-red-500' : 'border-green-500';
  const cardStyles = `${styles.trendingCard} ${borderColor}`;

  return (
    <div className={cardStyles}>
      <div className={styles.trendingCardWrapper}>
        <div className="flex">
          &nbsp;&nbsp;
          {cap !== null && capChange !== null && (
            <>
              <p className="mr-1" style={{ fontSize: '1.2rem' }}>
                ${formatNum(cap)}
              </p>
              <Rate isIncrement={capChange > 0} rate={`${formatNum(capChange)}`} chevron={true} />
            </>
          )}
        </div>
      </div>
      <p className="mx-2 mt-0.5 mb-3 text-[#bcbcbc]">Market Capitalization</p>
    </div>
  );
};

export default TrendingCard;
