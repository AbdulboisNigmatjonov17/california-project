import React from 'react'
import TopCardsData from './data/TopCardsData'
import TopCardsCard from './TopCardsCard'

export default function TopCards() {
    return (
        <div className='w-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-between p-5 gap-5'>
            {
                TopCardsData.map((item) => (
                    <TopCardsCard key={item.id} {...item}/>
                ))
            }
        </div>
    )
}
