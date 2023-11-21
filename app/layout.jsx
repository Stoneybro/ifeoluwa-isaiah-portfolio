import './globals.css'
import { DM_Serif_Display } from 'next/font/google'
const DMSerifDisplay = DM_Serif_Display({weight:['400',], subsets: ['latin'] })
import localFont from 'next/font/local'
import Nav from './components/nav'
import Footer from './components/footer'
import Preloader from './components/Preloader'
const HKGrotesk=localFont({
  src:[
    {
      path: '../fonts/HKGrotesk-Regular.otf',
      weight: '400',
      style:'regular'
    },
    {
      path: '../fonts/HKGrotesk-Bold.otf',
      weight: '700',
      style:'bold'
    },
    {
      path: '../fonts/HKGrotesk-Light.otf',
      weight: '300',
      style:'light'
    },
    {
      path: '../fonts/HKGrotesk-SemiBold.otf',
      weight: '600',
      style:'semibold'
    },
    {
      path: '../fonts/HKGrotesk-Medium.otf',
      weight: '500',
      style:'medium'
    },

  ],variable:'--HKGrotesk'
})
import Provider from './components/hooks/Provider'
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${HKGrotesk.variable} ${DMSerifDisplay.variable}`}>
    
        <Provider>
        <Nav/>
        {children}
        </Provider>
        <Footer />
        </body>
    </html>
  )
}
