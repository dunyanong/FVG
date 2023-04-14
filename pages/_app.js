import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ToastContainer } from 'react-toastify'

function MyApp({ Component, pageProps }) {
  return (
    <div className='flex flex-col min-h-screen bg-white text-black'>      
      <div className='flex justify-center'>
        <Navbar />
        <ToastContainer limit={1}/>
      </div>
      <main className='flex-grow py-10 md:pt-40 lg:pt-20 px-10'>                
        <Component {...pageProps} />
      </main>
      <footer className='mt-auto'>
        <Footer />
      </footer>
    </div>
  )
}

export default MyApp;
