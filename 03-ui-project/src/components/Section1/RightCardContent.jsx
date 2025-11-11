import React from 'react'
import { MoveRight } from 'lucide-react'

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between gap-4'>
        <h2 className='bg-white rounded-full h-11 w-11 flex justify-center items-center text-2xl font-bold'>{props.index + 1}</h2>
        <div>
          <p className='text-shadow-2xs text-lg leading-relaxed text-white mb-7'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, sint? Voluptate minima enim fugiat eaque.</p>
          <div className='flex justify-between'>
            <button style={{backgroundColor:props.color}} className='text-white font-medium px-5 py-2 rounded-full'>{props.tag}</button>
            <button style={{backgroundColor:props.color}} className='text-white font-medium px-2 items-center py-2 rounded-full'><MoveRight /></button>
          </div>
        </div>

      </div>
  )
}

export default RightCardContent
