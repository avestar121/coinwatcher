import React from 'react'

const styles = {
  trendingCard: `
  w-full p-2 py-3 pb-0 bg-[#323546] rounded-xl text-white 
  mr-3 border-l-8 overflow-hidden mb-2
  `,
  trendingCardWrapper: `flex items-center justify-between`
}

const formatNum = num => {
    if (typeof num !== 'undefined') {
      return Number(num.toFixed(2)).toLocaleString();
    }
    return "";
  };
  

const TrendingCard = ({totalCoins}) => {
  return (
    <div className={styles.trendingCard}>
        <div className={styles.trendingCardWrapper}>
            <div className='flex'>
                &nbsp;&nbsp;
                {totalCoins !== null && (
                <>
                    <p className='mr-2' style={{ fontSize: '1.2rem' }}>{formatNum(totalCoins)}</p>
                    
                </>
                )}
            </div>
        </div>
        <p className='mx-2 mt-0.5 mb-3 text-[#bcbcbc]'>Total Amount of Coins</p>
    </div>
  )
}

export default TrendingCard