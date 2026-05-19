import React, { useEffect, useState } from 'react'
import { FaCheck } from 'react-icons/fa';

const Pricing = () => {

    const [pricing, setPricing] = useState([]);



    useEffect(() => {
        fetch("./Pricing.json")
            .then((res) => res.json())
            .then((data) => {
                setPricing(data.Pricing);
                console.log(data)
            })
    },[]);



    return (
        <div>
            <h1 className='text-3xl font-bold text-center'>Simple,Transparent Pricing</h1>
            <p className='text-center text-gray-500 py-10' >Choose the palns that fits your needs.Upgrade or downgrade anytime</p>

            <div className='grid grid-cols-3 gap-6 w-[91%] mx-auto'>
                {
                    pricing?.map((price,index) => {
                        return (
                            <div key={price.id} className={`
                            rounded-md p-10 transition-all duration-300 ease-in-out hover:-translate-y-5 cursor-pointer
                            ${index===1?"bg-gradient-to-r from-blue-600 to-purple-700 text-white":"bg-gray-200" }
                            `}>
                                <div>
                                    <h2 className='text-2xl font-bold'>{price.name}</h2>
                                    <p className={
                                        `py-3
                                         ${index===1?"text-white":"text-gray-500"}
                                        `
                                    } >{price.description}</p>
                                </div>
                                <div className='flex items-center pt-10'>
                                    <h4 className='text-3xl font-bold'>${price.price}/</h4>
                                    <p className={
                                        `text-xl
                                         ${index===1?"text-white":"text-gray-500"} ${index===1?"text-white":"text-gray-500"}
                                        `
                                    }>{price.billing}</p>
                                </div>
                                <div className='mt-8'>
                                 <ul className='space-y-2'>
                                    {
                                        price.features.map((item,feauterdex)=>{
                                            return(
                                                <li className={`
                                                     flex gap-3 items-center
                                                    ${index===1?"text-white":"text-gray-500"}
                                                    `} key={index}><FaCheck className={`
                                                        ${index===1?"text-white":"text-green-500"}
                                                        `}/>{item}</li>
                                            )
                                        })
                                    }
                                 </ul>
                                </div>
                                <button className={`
                                    w-full mx-auto mt-10 px-6 py-2 rounded-full
                                    ${index===1?"bg-white text-purple-600":"bg-purple-500 text-white"}
                                    `}>{price.btnText}</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Pricing