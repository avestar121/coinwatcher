import { Inter } from 'next/font/google'
import Header from "../components/Header"
import Trending from "../components/Trending"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="min-h-screen ">
      <Header />
      <div className="mt-10"/>
      <Trending />
      <div className="mt-20 bg-gray-500"/>
    </div>
  )
}
