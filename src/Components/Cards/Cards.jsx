import React, { use, useState } from 'react'
import { FaRegCheckCircle } from "react-icons/fa";
import Selectedcard from "./Selectedcard";


const Cards = ({ jasonProps, selected, setSelected }) => {

    const [showCart, setShowCart] = useState("products");

    const productData = use(jasonProps);
    const allData = productData.products;

    const BuyHandler = (id) => {

        const newData = allData.find((product) => product.id === id);

        setSelected([...selected, newData]);
        console.log(allData);
    }


    return (
        <div>
            <div className='max-w-[91%] mx-auto text-center my-30'>
                <h1 className='text-5xl font-bold'>Premium Digital Tools</h1>
                <p className='py-10 text-gray-400'>Choose from our curated collection of premium digital products designed
                    <br />to boost your productivity and creativity</p>
                <div className='flex gap-5  justify-center'>
                    <button onClick={()=>setShowCart("products")}
                    className='bg-gradient-to-r cursor-pointer from-blue-600 to-purple-700 px-5 py-2 rounded-full text-white'>Products</button>
                    <button className='px-5 py-2 rounded-full hover:bg-blue-200 cursor-pointer' onClick={() => setShowCart("cart")} >Card ({selected.length})</button>
                </div>
            </div>

            {
                showCart === "products" &&(
                    <div className='grid lg:grid-cols-3 gap-20 max-w-[91%] mx-auto'>
                        {
                            allData?.map((product) => {
                                return (
                                    <div className='shadow-md rounded-md p-8 transition-all duration-300 ease-in-out hover:scale-[1.02] hover:rotate-1 cursor-pointer ' key={product.id}>
                                        <img src={product.image} alt="" />
                                        <h1 className='text-3xl font-bold pt-5'>{product.name}</h1>
                                        <p className='py-5'>{product.description}</p>
                                        <div className='flex py-5 items-center'>
                                            <h2 className='text-3xl'>${product.price}</h2>/
                                            <p>{product.billing}</p>
                                        </div>
                                        <div>
                                            <ul className='space-y-2'>
                                                {
                                                    product.features.map((items, index) => {
                                                        return (
                                                            <li className='flex items-center gap-2' key={index}> <FaRegCheckCircle className='text-green-600' /> {items}</li>
                                                        )

                                                    })
                                                }
                                            </ul>
                                        </div>
                                        <div className='flex justify-center mt-5'>
                                            <button onClick={() => BuyHandler(product.id)}
                                                className='text-center text-white cursor-pointer bg-gradient-to-r from-blue-600 to-purple-700 w-full rounded-full py-3 justify-center'>
                                                {product.buttonText}</button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            }

            {
                showCart ==="cart" && (
                    <Selectedcard selected={selected} setSelected={setSelected} showCart={showCart} setShowCart={setShowCart} />
                )
            }

        </div>

    )
}

export default Cards