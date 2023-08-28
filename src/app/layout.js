import Header from './components/Header'
import './globals.css'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IMDb Clone',
  description: 'This is a IMDb clone made by next,js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Header */}
         <Header />
        {/* Navbar */}
        
        {/* SearchBox*/}
      {children}</body>
    </html>
  )
}
