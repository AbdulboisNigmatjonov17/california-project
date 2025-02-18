import React from 'react'
import TopCardsData from './data/TopCardsData'
import TopCardsCard from './TopCardsCard'

export default function TopCards() {
    return (
        <div className='w-full grid grid-cols-4 justify-between p-5 gap-5'>
            {
                TopCardsData.map((item) => (
                    <TopCardsCard key={item.id} {...item}/>
                ))
            }
        </div>
    )
}
