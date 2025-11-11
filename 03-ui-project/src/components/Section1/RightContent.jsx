import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id='right' className='h-full w-2/3 p-4 flex overflow-auto flex-nowrap gap-4 justify-start items-center'>
      {props.users.map((user, index) => (
        <RightCard key={index} img={user.img} tag={user.tag} index={index} color={user.color} />
      ))}
    </div>
  )
}

export default RightContent
