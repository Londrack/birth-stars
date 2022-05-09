import { AppProps } from 'next/app'
import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { AppProvider } from '@context/AppContext';
import { BackgroundNightSky } from '@components/BackgroundNightSky';
import '../global.css';


const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <AppProvider>
            <div className='container'>
                <Header />
                <Component {...pageProps} />
                <Footer/>
            </div>
            <BackgroundNightSky />
            <style jsx>{`
                .container{
                    height:98vh;
                    width: 95vw;
                    position: relative;
                    z-index: 1;
                }
            `}</style>
        </AppProvider>
    )
}

export default MyApp
