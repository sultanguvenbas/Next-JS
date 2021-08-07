import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import type {AppProps} from 'next/app'

function MyApp({Component, pageProps}: AppProps) {
    if (process.browser)
        return <Component {...pageProps} />
    else
        return <p>NOTHING</p>
}

export default MyApp
