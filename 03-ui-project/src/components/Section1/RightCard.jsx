import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='h-full w-70 shrink-0 overflow-hidden rounded-4xl relative'>
      <img className='h-full w-full object-cover' src={props.img} alt="" />

      <RightCardContent tag={props.tag} index={props.index} color={props.color} />

    </div>
  )
}

export default RightCard
