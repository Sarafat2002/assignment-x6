import React from 'react'



const Step = ({ steps, setSteps }) => {
    return (
        <div className='bg-gray-100 my-30 text-center items-center'>
            <h1 className='text-3xl font-bold pt-10'>Get Started 3 Steps</h1>
            <p className='text-gray-500 py-5'>start using primium</p>

            <div className='grid grid-cols-3 gap-10 w-[91%] mx-auto p-14  cursor-pointer '>
                {
                    steps?.map((step) => {
                        return (
                            <div key={step.id} className=' bg-white shadow-md rounded-md text-center p-10 transition-all duration-300 hover:-translate-y-3'>

                                <span className='w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center ml-auto text-white'><p>{step.circle}</p></span>
                                <span className='w-30 h-30 rounded-full bg-purple-200 flex items-center justify-center mx-auto my-5'><img className='w-20' src={step.image} alt="" /></span>
                                <h4 className='text-2xl font-bold py-3'>{step.name}</h4>
                                <p className='text-gray-500'>{step.description}</p>

                            </div>
                        )
                    })
                }
            </div>


        </div>
    )
}

export default Step