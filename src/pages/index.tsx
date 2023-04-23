import { Inter } from 'next/font/google'
import Header from "../components/Header"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="min-h-screen ">
      <Header />
      <div className="mt-10 "/>
      <div className="mt-20 bg-gray-500"/>
    </div>
  )
}
