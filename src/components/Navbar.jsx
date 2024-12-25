import React from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <>
    <div className='w-full flex justify-between items-center font-semibold '>

      <div className="flex items-center gap-2"> 
      <img className='w-8 bg-black p-2 rounded-2xl cursor-pointer'  onClick={()=>navigate(-1)} src={assets.arrow_left} alt="" />
      <img className='w-8 bg-black p-2 rounded-2xl cursor-pointer' onClick={()=>navigate(+1)} src={assets.arrow_right} alt="" />
      </div>

      <div className="flex items-center gap-4">
        <p className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer'> Explore premium</p>
        <p className='bg-black py-1 px-3 rounded-2xl text-[15px]cursor-pointer cursor-pointer'>Install App</p>
        <p className='bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center cursor-pointer'>Y</p>
      </div>

    </div>

    <div className="flex items-center gap-2 cursor-pointer mt-4 ">
      <p className='bg-white text-black rounded-2xl px-4 py-1 cursor-pointer'>All</p>
      <p className='bg-black rounded-2xl px-4 py-1 cursor-pointer'>Music</p>
      <p className='bg-black rounded-2xl px-4 py-1 cursor-pointer'>Podcasts</p>
    </div> 
    </>
  )
}

export default Navbar
