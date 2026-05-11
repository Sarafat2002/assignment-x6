import React from 'react'
import { PiShoppingCart } from "react-icons/pi";

const Nav = ({selected}) => {
    return (
        <div className='shadow-md'>
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
                <button className='text-xl relative flex items-center'><PiShoppingCart /> <span>{selected.length}</span>  </button>
                <button>Login</button>
                <button className='px-6 py-2 text-white text-xl rounded-full bg-gradient-to-r from-blue-600 to-purple-700'>Get Started</button>
            </div>
        </div>
        </div>
    )
}

export default Nav