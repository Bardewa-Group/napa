import React from 'react'
import SignUp from './SignUp'
const Contact = () => {
  return (
    <>
        <SignUp />
        <div className='bg-gray-200'>
        <div className='p-10 bg-gray-800 text-gray-200'>
            <div className='max-w-7xl mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
                    <div className='mb-5'>
                        <h4 className='text-2xl pb-4'>NAPA Association</h4>
                       <p className='text-gray-500'> 
                        <span className='block mb-1'>Berkeley</span>
                        <span className='block mb-1'>California, 94704</span> 
                        <strong className='block mb-1'>Technical Support:</strong>sandeshnepali57@gmail.com
                        <strong className='block mb-1'>Email:</strong>napafamily2020@gmail.com
                        </p>
                    </div>
                    <div className='mb-5'>
                        <h4 className='text-2xl pb-4'>Useful links</h4>
                        <ul className='text-gray-500 cursor-pointer'>
                            <li className='pb-4 hover:underline'>Home</li>
                            <li className='pb-4 hover:underline'>About us</li>
                            <li className='pb-4 hover:underline'>Service</li>
                            <li className='pb-4 hover:underline'>Terms of services</li>
                            <li className='pb-4 hover:underline'>Privacy policy</li>
                        </ul>
                    </div>
                    <div className='mb-5'>
                        <h4 className='text-2xl pb-4'>Our services</h4>
                        <ul className='text-gray-500 cursor-pointer'>
                            <li className='pb-4 hover:underline'>Home</li>
                            <li className='pb-4 hover:underline'>About us</li>
                            <li className='pb-4 hover:underline'>Service</li>
                            <li className='pb-4 hover:underline'>Terms of services</li>
                            <li className='pb-4 hover:underline'>Privacy policy</li>
                        </ul>
                    </div>
                    <div className='mb-5'>
                        <h4 className='text-2xl pb-4'>Stay connected with us</h4>
                        <p className='text-gray-500 pb-2 mb-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum, dolor.</p>
                        <form className='flex flex-row flex-wrap' action="#">
                            <input className='text-gray-500 w-2/3 p-2 focus:border-blue-500 rounded-sm' type="text" placeholder='Enter your email address' />
                            <button className='p-2 w-1/3 bg-blue-500 text-white hover:bg-blue-600'>Submit</button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    </div>
    </>

  )
}

export default Contact