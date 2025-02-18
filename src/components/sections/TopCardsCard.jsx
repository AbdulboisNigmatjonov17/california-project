import React from 'react'

export default function TopCardsCard({ img, title, text, price }) {
    return (
        <div>
            <div className='w-full flex justify-center items-center'>
                <img src={img} alt={`card` + `${title}`} />
            </div>
            <div className='flex flex-col gap-2'>
                <h3 className='font-normal text-[22px] leading-7'>{title}</h3>
                <p className='text-[#4B4B4B] font-normal text-[14px] leading-[17px]'>{text}</p>
                <h4 className='font-normal text-[18px] leading-[22px] mt-3'>$ {price} USD</h4>
            </div>
        </div>
    )
}
