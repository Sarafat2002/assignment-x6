import React from 'react'
import { FiShoppingCart } from "react-icons/fi";

const Selectedcard = ({ selected, setSelected,addData,setAddData }) => {
  const totall = selected.reduce((sum,product)=>sum+product.price,0);

  const deleteHandler = (id)=>{
    const deleteProduct = selected.filter((product)=>product.id!==id);
    setAddData(addData.filter(itemId => itemId !== id));
    setSelected(deleteProduct);
  }

  const checkHandler = () => {
   setAddData([]);
   setSelected([])
  }

  return (
    <div>
      {
        selected.length === 0 ? (
          <div className='w-[81%] bg-gray-100 shadow-md mx-auto p-10'>

            <h3 className='font-bold py-5'>Your Card</h3>

            <div className='flex justify-center'>
              <p className='text-8xl text-gray-300'><FiShoppingCart /></p>
            </div>
            <p className='text-center text-gray-500'>Your cart is empty</p>
          </div>
        ) : (
          <div className='w-[91%] mx-auto rounded-md bg-gray-100'>

            <h1 className='text-3xl'>Your Card</h1>

            <div className='p-5 space-y-5 shadow-md'>
              {
                selected.map((product) => {
                  return (
                    <div key={product.id} className='flex justify-between items-center rounded-md bg-white p-5' >
                      <div className='flex gap-5 items-center'>
                        <div>
                          <img src={product.image} alt="" />
                        </div>
                        <div>
                          <h4 className='text-2xl'>{product.name}</h4>
                          <p>${product.price}</p>
                        </div>
                      </div>
                      <div>
                        <button className='cursor-pointer' onClick={()=>deleteHandler(product.id)} >Remove</button>
                      </div>
                    </div>
                  )
                })
              }

              <div>
                <div className='flex justify-between'>
                  <p className='text-gray-500 text-2xl'>Total :</p>
                  <p className='font-bold text-2xl'>${totall}</p>
                </div>
                <div className='flex justify-center my-5'>
                  <button onClick={checkHandler }
                   className=' cursor-pointer w-full px-6 py-2 bg-purple-700 text-white rounded-full'>Proceed tocheckout</button>
                </div>
              </div>
            </div>
          </div>
        )
      }

    </div>
  )
}

export default Selectedcard