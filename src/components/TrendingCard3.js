import React from 'react'
import Image from 'next/image'

const styles = {
    trendingCard: `w-full p-5 py-3 pb-0 bg-[#323546] rounded-xl text-white mr-3`,
    trendingCardWrapper: `flex items-center justify-between`
}

const formatNum = num => {
    if (typeof num !== 'undefined') {
      return Number(num.toFixed(2)).toLocaleString();
    }
    return "";
  };
  

const TrendingCard = ({dominance}) => {
  return (
    <div className={styles.trendingCard}>
        <div className={styles.trendingCardWrapper}>
            <div className='flex'>
                &nbsp;&nbsp;
                {dominance !== null && (
                <>
                    <p className='mr-2' style={{ fontSize: '1.2rem' }}>{formatNum(dominance)}%</p>
                    
                </>
                )}
            </div>
        </div>
        <p className='mx-2 mt-0.5 mb-3 text-[#bcbcbc]'>Bitcoin Market Cap Dominance</p>
    </div>
  )
}

export default TrendingCard