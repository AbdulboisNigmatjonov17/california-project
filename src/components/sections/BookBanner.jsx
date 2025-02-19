import React from 'react'
import Book from '../../assets/Books.png'
import { ArrowOutward } from '@mui/icons-material'
export default function BookBanner() {
    return (
        <div className='pt-10 flex flex-col items-center'>
            <div className='w-full flex justify-between'>
                <div className='w-[50%]'>
                    <img src={Book} alt="" />
                </div>
                <div className='w-[50%] flex flex-col gap-10'>
                    <p className='w-full font-normal text-[24px] leading-[30px]'>We Make It Easy To Find The Great Design Talent, Easier...</p>
                    <p className='w-full font-normal text-[24px] leading-[30px]'>We Make It Easy To Find The Great Design Talent, Easier...</p>
                    <p className='w-full font-normal text-[24px] leading-[30px]'>The Best Kept Secrets About Creative People</p>
                    <p className='w-full font-normal text-[24px] leading-[30px]'>We Make It Easy To Find The Great Design Talent, Easier...</p>
                </div>
            </div>
            <p>See all<ArrowOutward /></p>
        </div>
    )
}
