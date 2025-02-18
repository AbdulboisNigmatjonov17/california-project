import { iPad, iPhone, iWatch, macBook } from '../../assets/products-banner/index'
import './ProductsBanner.css'
export default function ProductsBanner() {
    return (
        <div className='w-full grid grid-cols-2 justify-between gap-5 p-5'>
            <div className='flex flex-col gap-10'>
                <div className='shadow-2xl px-10'>
                    <img src={macBook} alt="macBook-img" />
                    <div className='px-5 flex flex-col items-end'>
                        <h4>Laptops</h4>
                        <h2>True Laptop Solution</h2>
                    </div>
                </div>
                <div className='flex shadow-2xl items-center'>
                    <img src={iWatch} alt="macBook-img" />
                    <div className='px-5 flex flex-col items-end'>
                        <h4>Laptops</h4>
                        <h2>True Laptop Solution</h2>
                    </div>
                </div>
            </div>
            <div className='w-full flex justify-between'>
                <div className='shadow-2xl flex flex-col justify-center'>
                    <img src={iPhone} alt="" />
                    <div className='px-5'>
                        <h4>Phones</h4>
                        <h2>Your day to day life</h2>
                    </div>
                </div>
                <div className='shadow-2xl  flex flex-col justify-center'>
                    <div className='px-5'>
                        <h4>Phones</h4>
                        <h2>Your day to day life</h2>
                    </div>
                    <img src={iPad} alt="" />
                </div>
            </div>
        </div>
    )
}
