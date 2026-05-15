import React, { use, useState } from 'react'
import { FaRegCheckCircle } from "react-icons/fa";
import Selectedcard from "./Selectedcard";
import { ToastContainer,Bounce,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Cards = ({ jasonProps, selected, setSelected }) => {

    const [showCart, setShowCart] = useState("products");
    const [addData, setAddData] = useState([]);

    const productData = use(jasonProps);
    const allData = productData.products;

    const BuyHandler = (id) => {

        const selectAlready = selected.find((product) => product.id === id);

        if (selectAlready) return;

        const newData = allData.find((product) => product.id === id);

        setSelected([...selected, newData]);
        setAddData([...addData, id]);
        toast.success("Added to cart");
    }


    return (
        <div>
            <div className='max-w-[91%] mx-auto text-center my-30'>
                <h1 className='text-5xl font-bold'>Premium Digital Tools</h1>
                <p className='py-10 text-gray-400'>Choose from our curated collection of premium digital products designed
                    <br />to boost your productivity and creativity</p>
                <div className='flex gap-5  justify-center'>
                    <button onClick={() => setShowCart("products")}
                        className='bg-gradient-to-r from-blue-600 to-purple-700 px-5 py-2 rounded-full text-white cursor-pointer hover:from-blue-200 hover:to-purple-300'>Products</button>
                    <button className='px-5 py-2 rounded-full hover:bg-blue-200 cursor-pointer' onClick={() => setShowCart("cart")} >Card ({selected.length})</button>
                </div>
            </div>

            {
                showCart === "products" && (
                    <div className='grid lg:grid-cols-3 gap-20 max-w-[91%] mx-auto'>
                        {
                            allData?.map((product) => {
                                return (
                                    <div className='shadow-md rounded-md p-8 transition-all duration-300 ease-in-out hover:scale-[1.02] hover:rotate-1 cursor-pointer ' key={product.id}>

                                        <div className='flex justify-end pb-2'>
                                            <button
                                                className={`px-4 py-1 rounded-full text-white text-sm

                                                       ${product.badge === "Best Seller" ? "bg-purple-300" : ""}
                                                       ${product.badge === "Popular" ? "bg-blue-300" : ""}
                                                       ${product.badge === "New" ? "bg-green-300" : ""}
                                                         `}
                                            >
                                                {product.badge}
                                            </button>
                                        </div>
                                        <span className='w-17 flex justify-center items-center h-17 rounded-full shadow-sm'><img src={product.image} alt="" /></span>
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
                                            <button
                                                onClick={() => BuyHandler(product.id)}
                                                className={`w-full rounded-full py-3 cursor-pointer ${addData.includes(product.id)
                                                    ? "bg-green-600 text-white"
                                                    : "bg-gradient-to-r from-blue-600 to-purple-700 text-white"
                                                    }`}
                                            >
                                                {
                                                    addData.includes(product.id)
                                                        ? "Added to cart"
                                                        : product.buttonText
                                                }
                                            </button>
                                       
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            }

            {
                showCart === "cart" && (
                    <Selectedcard selected={selected} setSelected={setSelected} showCart={showCart} setShowCart={setShowCart}
                        addData={addData} setAddData={setAddData} />
                )
            }

        </div>

    )
}

export default Cards