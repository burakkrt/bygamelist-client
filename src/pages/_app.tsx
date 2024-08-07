import type { AppProps } from 'next/app'
import '../styles/main.scss'
import 'react-loading-skeleton/dist/skeleton.css'
import { Barlow, Poppins } from 'next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'

const fontBarlow = Barlow({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-barlow',
})

const fontPoppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${fontPoppins.variable} ${fontBarlow.variable} `}>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  )
}
