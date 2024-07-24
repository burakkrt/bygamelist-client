import type { AppProps } from 'next/app'
import '../styles/main.scss'
import { Roboto, Barlow } from 'next/font/google'
import Header from '@/components/header'

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
    <div>
      <Header />
      {/* <main className={`${fontRoboto.variable} ${fontBarlow.variable}`}> */}
      <main>
        <Component {...pageProps} />
      </main>
      {/* </main> */}
    </div>
  )
}
