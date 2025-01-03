import { BarraLateral } from './components/BarraLateral'
import { Footer } from './components/Footer'
import { NavBar } from './components/NavBar'
import LogoBackground from './image/LogoBackground.png'

export function App() {
  return (
    <>
      <div className="h-screen w-screen bg-black text-white">
       <NavBar />
        <div className='flex justify-center items-center h-5/6'>
          <div className='h-full w-11/12 bg-gray-100 text-black rounded-3xl relative mb-14'>
            <BarraLateral />
            <div className='flex justify-center items-center h-full ml-80'>
              <img src={ LogoBackground } alt="Logo" className=" h-5/6 " />
            </div>
            
          </div>
        </div>
        <Footer />
      </div>

      
    </>
  )
}


