import React from 'react'
import { TbPlayerPlay } from "react-icons/tb";
import HeroImage from "../../assets/banner.png"

const Hero = () => {
    return (
        <div>
            <div className='flex max-w-[91%] items-center justify-center mx-auto gap-[27%] mt-40 '>
                <div>
                    <button className="flex items-center gap-2 px-6 py-3 bg-[#E8EBFD] text-[#8B3DFF] rounded-full font-medium transition-all hover:opacity-90">
                        <span className="relative flex h-5 w-5 items-center justify-center">
                            <span className="absolute inline-flex h-full w-full animate-pulse rounded-full bg-purple-400 opacity-25"></span>
                            <span className="relative flex h-3 w-3 rounded-full bg-[#8B3DFF] border-2 border-purple-300"></span>
                        </span>

                        <span>New: AI-Powered Tools Available</span>
                    </button>
                    <h1 className='text-5xl font-bold py-5'>Supercharge Your <br /> Digital Workflow</h1>
                    <p>Access premium AI tools, design assets, templates, and productivity<br />
                        software—all in one place. Start creating faster today.<br />
                        Explore Products
                    </p>
                    <div className='flex gap-10 items-center mt-6'>
                        <button className='text-white bg-gradient-to-r from-blue-600 to-purple-700 px-6 py-2 rounded-full'>Explore Products</button>
                        <button className='flex gap-2 items-center border-2 rounded-full px-6 py-2'><TbPlayerPlay /> Watch Demo</button>
                    </div>
                </div>

                <div>
                    <img src={HeroImage} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero