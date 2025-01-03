import Logo from './image/Logo.png'

export function App() {
  return (
    <div className="h-screen w-screen bg-black text-white">
      <div className="flex align-center justify-between p-8">
        <img src={Logo} alt="Logo" className="h-14 w-14" />
        
      </div>
    </div>
  )
}


