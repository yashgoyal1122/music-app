import React, { useContext } from 'react'
import { assets} from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'

export const Player = () => {
  const {track,seekSong,seekBar,seekBg,playStatus,play,pause,time,previous,next} = useContext(PlayerContext);
  return (
    <div className='h-[10%] bg-black flex justify-between items-center text-center text-white px-4'>
      <div className="hidden lg:flex items-center gap-4">
        <img className='w-12' src={track.image} alt="" />
        <div>
          <p>{track.name}</p>
          <p>{track.desc.slice(0, 12)}</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 m-auto">
        <div className="flex gap-4 ">
          <img className='cursor-pointer w-4' src={assets.shuffle_icon} alt="" />
          <img onClick={previous} className='cursor-pointer w-4' src={assets.prev_icon} alt="" />

          {playStatus
          ? <img onClick={pause} className='cursor-pointer w-4' src={assets.pause_icon} alt="" />
          :<img onClick={play} className='cursor-pointer w-4' src={assets.play_icon} alt="" />
          }
          
          <img onClick={next} className='cursor-pointer w-4' src={assets.next_icon} alt="" />
          <img className='cursor-pointer w-4' src={assets.loop_icon} alt="" />
        </div>
        <div className="flex items-center gap-5">
          <p> {time.currentTime.minute}:{time.currentTime.second}</p>
          <div onClick={seekSong} ref={seekBg} className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer">
            <hr ref={seekBar} className='h-1 border-none w-[0] bg-blue-500 rounded-full ' />
          </div>
          <p>{time.totalTime.minute}:{time.totalTime.second}</p>
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-2 opacity-72 ">
        <img className='w-4' src={assets.plays_icon} alt="" />
        <img className='w-4' src={assets.mic_icon} alt="" />
        <img className='w-4' src={assets.queue_icon} alt="" />
        <img className='w-4' src={assets.speaker_icon} alt="" />
        <img className='w-4' src={assets.volume_icon} alt="" />
        <div className="w-20 bg-slate-50 h-1 rounded"></div>
        <img className='w-4' src={assets.mini_player_icon} alt="" />
        <img className='w-4' src={assets.zoom_icon} alt="" />
      </div>
    </div>
  )
}
export default Player
