import { Inter } from 'next/font/google'
import Header from "../components/Header"
import Trending from "../components/Trending"
import CMCTable from '../components/cmc-table/CMCTable'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="mb-10">
      <Header badgeHome={true}/>
      <div className="mt-10" style={{ width: '100%' }}/>
      <Trending />
      <div className="bg-gray-500" style={{ width: '100%' }}/>
      <CMCTable />
    </div>
  )
}
