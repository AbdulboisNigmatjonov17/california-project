import React from 'react'
import Book from '../../assets/Books.png'
import { ArrowOutward } from '@mui/icons-material'

export default function BookBanner() {
    return (
        <div className='pt-10 flex flex-col items-center px-5'>
            <div className='w-full grid lg:grid-cols-2 sm:grid-cols-1 gap-5 items-start'>
                <div className='lg:max-w-[620px] w-full mx-auto'>
                    <img src={Book} alt="book-img" className='w-full' />
                </div>

                <div className='flex flex-col gap-6'>
                    <p className='font-normal text-[24px] sm:text-[20px] leading-[30px]'>
                        We Make It Easy To Find The Great Design Talent, Easier...
                    </p>
                    <p className='font-normal text-[24px] sm:text-[20px] leading-[30px]'>
                        We Make It Easy To Find The Great Design Talent, Easier...
                    </p>
                    <p className='lg:font-normal text-[24px] sm:text-[20px] leading-[30px] font-semibold'>
                        The Best Kept Secrets About Creative People
                    </p>
                    <p className='font-normal text-[24px] sm:text-[20px] leading-[30px]'>
                        We Make It Easy To Find The Great Design Talent, Easier...
                    </p>
                </div>
            </div>

            <button className='mt-5 flex items-center gap-2 text-lg font-medium hover:border-b cursor-pointer'>
                See all <ArrowOutward fontSize="small" />
            </button>
        </div>
    )
}
