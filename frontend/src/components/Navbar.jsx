import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Shopix.png'

const Navbar = () => {
    return (
        <nav className="bg-[#131A22] border-b border-white/5 sticky top-0 z-50 w-full">
            <div className="w-full px-4 sm:px-8 lg:px-12 py-4 flex items-center justify-between">

                {/* Logo */}
                <Link to="/" className="flex items-center gap-2.5 group">
                    <div className="relative">
                        <div className="absolute -inset-1.5 bg-[#F9C301]/40 blur-[10px] rounded-md"></div>
                        <div className="relative bg-black rounded-[4px] p-1.5 flex items-center justify-center">
                            <img src={logo} alt="Shopix Logo" className="h-8 w-8 object-contain" />
                        </div>
                    </div>
                    <span className="text-white text-2xl font-extrabold tracking-tight group-hover:text-[#F9C301] transition-colors">Shopix</span>
                    <span className="h-2 w-2 rounded-full bg-[#F9C301] ml-1 mt-1"></span>
                </Link>

                <ul className="flex items-center gap-7">
                    <li>
                        <Link to="/Shop" className="text-white/90 hover:text-[#F9C301] font-semibold uppercase text-[14px] transition-colors duration-200">Shop</Link>
                    </li>
                    <li>
                        <Link to="/cart" className="text-white/90 hover:text-[#F9C301] font-semibold uppercase text-[14px] transition-colors duration-200">Cart</Link>
                    </li>
                    <li>
                        <Link to="/profile" className="bg-[#F9C301] text-black font-bold px-6 py-2.5 rounded-sm text-[14px] hover:bg-[#ffcf1f] transition-colors">Profile</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;