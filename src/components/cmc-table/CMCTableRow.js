import React from 'react'
import More from '../../assets/svg/more'
import Star from '../../assets/svg/star'
import {Rate} from './Rate'
import { useRouter } from 'next/router'
import CoinNameRow from './CoinNameRow'
import SmallGraph from '../SmallGraph'

const styles = {
    tableRow: `text-white border-b border-gray-800 text-[0.93rem] items-center`,
}

const CMCtableRow = ({
    starNum,
    coinName,
    coinIcon,
    coinSymbol = '---',
    price = '---',
    hRate = '---',
    dRate = '---',
    marketCapValue = '---',
    volumeValue = '---',
    volumeCryptoValue = '---',
    circulatingSupply = '---',
}) => {

    let symbol;
    switch (coinName) {
        case 'Bitcoin':
            symbol = 'BTCUSDT';
            break;
        case 'Ethereum':
            symbol = 'ETHUSDT';
            break;
        case 'BNB':
                symbol = 'BNBUSDT';
                break;
        case 'XRP':
            symbol = 'XRPUSDT';
            break;
        case 'Cardano':
            symbol = 'ADAUSDT';
            break;
        case 'Dogecoin':
                symbol = 'DOGEUSDT';
                break;
        case 'Polygon':
                symbol = 'MATICUSDT';
                break;
        case 'Solana':
                symbol = 'SOLUSDT';
                break;
        default:
            symbol = 'USDCUSDT'; 
            break;
    }


    const router = useRouter()

    const viewCoinDetails = () => {
        router.push(
            `/info?coin=${coinName}`
        )
    }


    const formatNum = num => {
        return Number(num.toFixed(2)).toLocaleString()
    }


  return (
    <tbody className={styles.tableRow}>
        <tr>
            <td>
                <Star />
            </td>
            <td>{starNum}</td>

            {coinIcon && coinIcon ? (
                <td className="cursor-pointer">
                    <div style={{ width: '150px', height: '40px', display: 'flex', alignItems: 'center' }}>
                        <CoinNameRow name={coinName} icon={coinIcon} coinSymbol={coinSymbol} clicked={viewCoinDetails} />
                    </div>
                </td>
            ) : ( <></>
            )}

            <td className='cursor-pointer' onClick={viewCoinDetails}>
                <p>${formatNum(price)}</p>
            </td>
            <td>
                <Rate isIncrement={hRate > 0 ? true : false} rate = {`${formatNum(hRate)}`}/>
            </td>
            <td>
                <Rate isIncrement={dRate > 0 ? true : false} rate = {`${formatNum(dRate)}`}/>
            </td>

            <td>
                <div>
                    <p>${formatNum(marketCapValue)}</p>
                </div>
            </td>

            <td>
                <div>
                    <p>{formatNum(volumeValue)}</p>
                    <p className='text-gray-400'>
                        {formatNum(volumeCryptoValue)} {coinSymbol}
                    </p>
                </div>
            </td>
            <td>
                <div>
                    <p>{formatNum(circulatingSupply)}</p>
                </div>
            </td>
            <td style={{ verticalAlign: 'top' }}>
                <div style={{width: '10rem', height: '30px'}}>
                    <SmallGraph symbol={symbol} color={dRate > 0 ? '#17C784' : '#EA3943'}/>
                </div>
            </td>

            <td>
                <More />
            </td>
        </tr>
    </tbody>
  )
}

export default CMCtableRow