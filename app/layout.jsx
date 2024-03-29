import { Inter } from 'next/font/google'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './globals.css'
// import ThemeProvider from '@/components/ThemeProvider'

import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  style: ['italic', 'normal'],
  variable: '--font-poppins',
})

export const metadata = {
  title: 'ANU Hostel Management',
  description: 'All Nations Hostel Management',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {/* <ThemeProvider> */}

        <main>{children}</main>

        {/* </ThemeProvider> */}
      </body>
    </html>
  )
}
