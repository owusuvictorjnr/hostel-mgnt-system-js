import { Inter } from 'next/font/google'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Header from '@/components/Header'
import './globals.css'
import Footer from '@/components/Footer'
// import ThemeProvider from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ANU Hostel Management',
  description: 'All Nations Hostel Management',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <ThemeProvider> */}

        <main>{children}</main>

        {/* </ThemeProvider> */}
      </body>
    </html>
  )
}
