import React from 'react';
import Image from 'next/image';
import Search from '../assets/svg/search';
import { useRouter, useContext } from 'next/router';

const styles = {
  header: `bg-[#17171A] text-white h-20 flex justify-between items-center w-full sm:py-[30px] sm:px-[80px] px-[15px]`,
  headerWrapper: `flex justify-end h-full max-w-screen-xL sm:px-4`,
  nav: `flex sm:flex-row flex-col sm:justify-end justify-center items-center gap-[10px]`,
  smallNav:`mx-2`,
  navItem: `relative mr-1 cursor-pointer hover:opacity-60`,
  navLink: `text-white font-bold flex mx-[10px]`,
  badge: `rounded-full bg-blue-600 h-1 w-1 absolute bottom-5 right-0 top-1 ring-4`,
  inputContainer: `flex items-center justify-center p-2 rounded bg-[#171924]`,
  input: `bg-transparent outline-none text-white w-70 mL-3`,
  headerText: `font-bold text-xl line-height: 1 flex items-center`,
};

const Header = ({ badgeHome = false, badgeExchanges = false,  }) => {
  const router = useRouter();

  const navigateHome = () => {
    router.push('/');
  };

  const navigateToExchanges = () => {
    router.push('/exchanges');
  };

  return (
    <div className={styles.header}>
      <h1 className={styles.headerText} onClick={navigateHome} style={{ cursor: 'pointer' }}>
        CoinWatcher
      </h1>
      <div className={styles.headerWrapper}>
        <nav className={styles.nav}>
          <div className={styles.navItem} onClick={navigateHome}>
            <div className={styles.navLink}>Cryptocurrencies</div>
            {badgeHome && <div className={styles.badge} />}
          </div>
          <div className={styles.navItem}>
            <div className={styles.navLink} onClick={navigateToExchanges}>
              <div className={styles.navLink}>Exchanges</div>
              {badgeExchanges && <div className={styles.badge} />}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
