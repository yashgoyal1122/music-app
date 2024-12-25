import React from 'react'
import { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'

const SongItems = ({name , image , desc , id}) => {
  const {playWithId} = useContext(PlayerContext)
  return (
    <>
    <div onClick={()=>playWithId(id)} className='min-w-[180px] p-2 px-3 rounded cursor-pointer overflow-auto hover:bg-[#ffffff26]'>
    <img className='rounded' src={image} alt="" />
    <p className="text-semibold mt-2 mb-1">{name}</p>
    <p  className='text-slate-200 text-sm'>{desc}</p>
    </div>
    </>
  )
}

export default SongItems