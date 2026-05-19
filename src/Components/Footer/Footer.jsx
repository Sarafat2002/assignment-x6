import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import { FaSquareFacebook, FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
    return (
        <div className='bg-blue-950 mt-20 p-20'>
            <div className='grid md:grid-cols-2 lg:grid-cols-5 gap-20 mx-auto w-[90%] text-gray-300 leading-loose'>
                <div>
                    <h1 className='font-bold text-3xl text-white'>DigiTools</h1>
                    <p className='pt-6'>Premium digital tools for creators,<br />professional and businesses.Work smarter<br />with our suite of powerful tools</p>
                </div>
                <div>
                    <h4 className='text-xl font-bold'>Product</h4>
                    <ul className='mt-6'>
                        <li><a href="">Features</a></li>
                        <li><a href="">Pricing</a></li>
                        <li><a href="">Template</a></li>
                        <li><a href="">intigration</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className='text-xl font-bold'>Company</h4>
                    <ul className='mt-6' >
                        <li><a href="">About</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Carrers</a></li>
                        <li><a href="">Press</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className='text-xl font-bold'>Resources</h4>
                    <ul className='mt-6' >
                        <li><a href="">Documantion</a></li>
                        <li><a href="">Help Center</a></li>
                        <li><a href="">Cummunity</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className='text-xl font-bold'>Social Links</h4>
                    <div className='flex gap-5 mt-5'>
                        <span className='w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center'><FaInstagram /></span>
                        <span className='w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center'><FaSquareFacebook /></span>
                        <span className='w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center'><FaXTwitter /></span>
                    </div>
                </div>
            </div>
            <hr className='text-gray-500 my-5' />
            <div className='flex flex-col md:flex-row md:justify-between w-[91%] mx-auto text-white'>
                <div>
                    <p>© 2026 Digitools. All rights reserved.</p>
                </div>
                <div className='flex gap-5'>
                    <p>Privacy Policy </p>
                    <p>Terms of Service </p>
                    <p> Cookies</p>
                </div>
            </div>

        </div>
    )
}

export default Footer