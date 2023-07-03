import React from 'react'
import Header from '../../components/Header'


const styles = {
  activeTab: `p-1 px-2 mr-2 rounded-lg bg-[#171924]`,
  infoBox: `p-1 px-2 mr-2 rounded-lg bg-[#2e2f39]`,
  tabItem: `px-2`,
  tabCointainer: `flex items-center p-2 rounded-xl bg-[#222531] border border-gray-500/10 text-sm`,
  info: `min-h-screen`,
  main: `text-white sm:mx-20 mx-5 max-w-screen-2xl`,
  flexStart: `flex sm:items-center sm:justify-center`,
  flexBetween: `flex flex-col justify-between`,
  flexBetweenCenter: `flex justify-between items-center`,
  tabContainerWrapper: `p-10 pl-0 pr-0 sm:w-2/3`,
  flexCenter: `flex items-center`,
  bigDetailsContainer: `flex flex-col sm:flex-row justify-between mb-20 `,
  bigDetailsContainerColumn: `flex flex-col mb-20`,
  detailsContainer: `flex w-1/2`,
  flexColumn: 'flex flex-col',
  imageContainer: `w-9 h-9`,
  detailsLine:`flex items-center my-1`,
  
}

function ErrorPage() {
  return (
    <div className={styles.info}>
        <Header />
        <main className={styles.main}>
            <h1>Uh Oh... Something went wrong</h1>
        </main>
    </div>
  )
}

export default ErrorPage;