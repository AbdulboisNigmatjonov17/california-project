import React from 'react'

export default function Button({text}) {
  return (
    <button className='rounded-[200px] border w-[170px] h-[50px] capitalize text-[18px] hover:bg-black hover:text-white cursor-pointer'>
        {text}
    </button>
  )
}
