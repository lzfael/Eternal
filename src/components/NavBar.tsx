import Logo from '../image/Logo.png'
import { User, Menu } from 'lucide-react'

export function NavBar() {
    return(
        <nav className="flex items-center justify-between p-5 mb-6">
          <img src={Logo} alt="Logo" className="h-12 w-12" />
            <div className='flex align-center gap-7'>
              <User className='h-6 w-6'/>
              <Menu className='h-6 w-6'/>
            </div>
        </nav>
    )
}