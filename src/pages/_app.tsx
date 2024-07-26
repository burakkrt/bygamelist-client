import type { AppProps } from 'next/app'
import '../styles/main.scss'
import 'react-loading-skeleton/dist/skeleton.css'
import { Roboto, Barlow } from 'next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'

const fontRoboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--font-roboto',
})

const fontBarlow = Barlow({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-barlow',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${fontRoboto.variable} ${fontBarlow.variable}`}>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  )
}
