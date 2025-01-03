import Logo from '../image/Logo.png'
import { User, Menu } from 'lucide-react'

export function NavBar() {
    return(
        <nav className="flex items-center justify-between p-10">
          <img src={Logo} alt="Logo" className="h-14 w-14" />
            <div className='flex align-center gap-7'>
              <User className='h-8 w-8'/>
              <Menu className='h-8 w-8'/>
            </div>
        </nav>
    )
}