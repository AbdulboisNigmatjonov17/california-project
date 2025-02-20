import { ArrowDownward, Search, ShoppingCartOutlined } from '@mui/icons-material'
import Logo from '../../assets/navLogo.png'
export default function Navbar() {
    return (
        <nav className="w-full h-[10dvh] flex justify-between items-center">
            <img src={Logo} alt="california-logo" className='w-[170px] h-[20px]'/>
            <ul className='flex gap-10 items-center uppercase'>
                <li>all products</li>
                <li>Solutions <ArrowDownward /></li>
                <li>ABOUT</li>
                <li>Support</li>
            </ul>
            <div className='flex gap-3'>
                <Search />
                <ShoppingCartOutlined />
            </div>
        </nav>
    )
}
