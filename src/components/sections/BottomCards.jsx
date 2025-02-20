import Button from '../button/Button'
import BottomCardsData from './data/BottomCardsData'

export default function BottomCards() {
    return (
        <div className='w-full flex lg:justify-between py-10 flex-wrap justify-center gap-5 lg:px-0 px-10'>
            {
                BottomCardsData.map((item) => (
                    <div className='w-[415px] bg-[#F8F9FA] rounded-2xl py-5 px-10 flex flex-col items-center justify-center gap-5' key={item.id}>
                        <div className='flex flex-col items-center justify-center'>
                            <p>{item.text}</p>
                            <h3>{item.title}</h3>
                        </div>
                        <Button text={'explore'} />
                        <div>
                            <img src={item.img} alt="" />
                        </div>
                    </div>
                ))
            }
            <div></div>
        </div>
    )
}
