import React from 'react';
import Image from 'next/image';
import Search from '../assets/svg/search'
import { useRouter, useContext} from 'next/router'

const styles = {
  header: `bg-[#17171A] text-white h-20 flex gap-[100px] w-full p-[30px]`,
  headerWrapper: `flex justify-center h-full max-w-screen-xL mx-auto px-4`,
  nav:`flex justif-center items-center gap-[20px]`,
  navItem:`relative mr-1 cursor-pointer hover:opacity-60`,
  navLink:`text-white flex mx-[10px]`,
  badge:`rounded-full bg-blue-600 h-1 w-1 absolute bottom-5 right-0 top-1 ring-4`,
  inputContainer: `flex items-center justify-center p-2 rounded bg-[#171924]`,
  input: `bg-transparent outline-none text-white w-70 mL-3`,
  headerText: `font-bold text-xl line-height: 1 flex items-center justify-center`,
}



const Header = () => {

  const router = useRouter()

  const navigateHome = () => {
    router.push(
        `/`
    )
}
  return (
    <div className={styles.header} >
      <h1 className={styles.headerText} onClick={navigateHome} style={{ cursor: 'pointer' }}>
        CoinWatcher
      </h1>


      <div className={styles.headerWrapper}>
        <nav className={styles.nav}>
          <div className={styles.navItem} onClick={navigateHome}>
              <div className={styles.navLink}>Cryptocurrencies</div>
              <div className={styles.badge} />
          </div>

          <div className={styles.navItem}>
              <div className={styles.navLink}>Exchanges</div>
          </div>

          <div className={styles.navItem}>
              <div className={styles.navLink}>NFT</div>
              <div className={styles.badge} />
          </div>

          <div className={styles.navItem}>
              <div className={styles.navLink}>Cryptown</div>
              <div className={styles.badge} />
          </div>

          <div className={styles.navItem}>
              <div className={styles.navLink}>Portfolio</div>
          </div>

          <div className={styles.navItem}>
              <div className={styles.navLink}>WatchList</div>
          </div>

          <div className={styles.navItem}>
              <div className={styles.navLink}>Products</div>
              <div className={styles.badge} />
          </div>

          <div className={styles.navItem}>
              <div className={styles.navLink}>Learn</div>
          </div>
        </nav>

        <div className='flex items-center'>
          <div className={styles.inputContainer}>
            <Search />
            <input className={styles.input} placeholder='Search' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header