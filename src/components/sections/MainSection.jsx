import React from 'react'

export default function MainSection({ section, title, text }) {
    return (
        <main className='flex flex-col items-center'>
            <div className='text-center max-w-[1150px] flex flex-col justify-center gap-3'>
                <h1 className='font-normal text-[42px] leading-[52px]'>{title}</h1>
                <p className='max-w-[630px] text-[14px] font-normal leading-[17px] '>{text}</p>
            </div>
            {section}
        </main>
    )
}
