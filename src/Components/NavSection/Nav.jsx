import React from 'react'
import { PiShoppingCart } from "react-icons/pi";

const Nav = ({selected}) => {
    return (
        <div className='sticky top-0 z-50 bg-white shadow-md'>
            <div className='flex justify-center gap-70 p-4 max-w-[91%] mx-auto items-center'>
            <div>
                <h1 className='text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent'>DigiTools</h1>
            </div>

            <div>
                <ul className='flex gap-10 text-xl'>
                    <li><a href="">Products</a></li>
                    <li><a href="">Features</a></li>
                    <li><a href="">Pricing</a></li>
                    <li><a href="">Testimonials</a></li>
                    <li><a href="">FAQ</a></li>
                </ul>
            </div>
            <div className='flex gap-5 justify-center'>
                   <button className="relative text-xl flex items-center">
      <PiShoppingCart />

      <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
        {selected.length}
      </span>
    </button>
                <button>Login</button>
                <button className='px-6 py-2 text-white text-xl rounded-full bg-gradient-to-r from-blue-600 to-purple-700'>Get Started</button>
            </div>
        </div>
        </div>
    )
}

export default Nav