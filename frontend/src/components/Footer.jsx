import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Shopix.png'

const Footer = () => {
    return (
        <footer className="bg-[#131A22] text-gray-300 mt-10 border-t border-white/10 w-full">
            <div className="w-full px-4 sm:px-8 lg:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-6">

                {/* Logo - Fixed, No Glow */}
                <Link to="/" className="flex items-center gap-2.5">
                    <div className="bg-black rounded-[4px] p-1.5 flex items-center justify-center">
                        <img src={logo} alt="Shopix Logo" className="h-8 w-8 object-contain" />
                    </div>
                    <span className="text-white text-2xl font-extrabold tracking-tight">Shopix</span>
                    <span className="h-2 w-2 rounded-full bg-[#F9C301] ml-1 mt-1"></span>
                </Link>

                {/* Menu */}
                <ul className="flex flex-wrap items-center justify-center gap-5 sm:gap-8">
                    <li>
                        <Link to="/about" className="text-[14px] sm:text-[15px] font-bold tracking-wide text-white/60 hover:text-[#F9C301] transition-colors">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="text-[14px] sm:text-[15px] font-bold tracking-wide text-white/60 hover:text-[#F9C301] transition-colors">
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link to="/return-policy" className="text-[14px] sm:text-[15px] font-bold tracking-wide text-white/60 hover:text-[#F9C301] transition-colors">
                            Return Policy
                        </Link>
                    </li>
                    <li>
                        <Link to="/privacy" className="text-[14px] sm:text-[15px] font-bold tracking-wide text-white/60 hover:text-[#F9C301] transition-colors">
                            Privacy
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="border-t border-white/5 w-full px-4 sm:px-8 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-center">
                <p className="text-[12px] text-white/30">
                    © {new Date().getFullYear()} Shopix — Crafted with ❤️ for better shopping experience.
                </p>
                <p className="text-[11px] text-white/20">shopixecommerce0@gmail.com</p>
            </div>
        </footer>
    )
}
export default Footer;