import React from 'react';
import ChevronDown from '../../assets/svg/chevronDown'
import ChevronUp from '../../assets/svg/chevronUp'

const styles = {
    rate: `rate flex items-center`,
    red: `ml-0.5 text-[#EA3943]`,
    green: `ml-0.5 text-[#17C784]`
}

export const Rate = ({ isIncrement, rate, chevron = false }) => {
  return (
    <div className={styles.rate}>
      {chevron && (isIncrement ? <ChevronUp fill="#17C784" /> : <ChevronDown fill="#EA3943" />)}
      <p className={isIncrement ? styles.green : styles.red}>{rate}%</p>
    </div>
  );
};

