// import { iPad, iPhone, iWatch, macBook } from '../../../assets/products-banner/index'
// import './ProductsBanner.css'
// export default function ProductsBanner() {
//     return (
//         <div className='w-full grid grid-cols-2 justify-between gap-5 p-5'>
//             <div className='flex flex-col gap-10'>
//                 <div className='shadow-2xl px-10'>
//                     <img src={macBook} alt="macBook-img" />
//                     <div className='px-5 flex flex-col items-end'>
//                         <h4>Laptops</h4>
//                         <h2>True Laptop Solution</h2>
//                     </div>
//                 </div>
//                 <div className='flex shadow-2xl items-center'>
//                     <img src={iWatch} alt="macBook-img" />
//                     <div className='px-5 flex flex-col items-end'>
//                         <h4>Laptops</h4>
//                         <h2>True Laptop Solution</h2>
//                     </div>
//                 </div>
//             </div>
//             <div className='w-full flex justify-between'>
//                 <div className='shadow-2xl flex flex-col justify-center'>
//                     <img src={iPhone} alt="" />
//                     <div className='px-5'>
//                         <h4>Phones</h4>
//                         <h2>Your day to day life</h2>
//                     </div>
//                 </div>
//                 <div className='shadow-2xl  flex flex-col justify-center'>
//                     <div className='px-5'>
//                         <h4>Phones</h4>
//                         <h2>Your day to day life</h2>
//                     </div>
//                     <img src={iPad} alt="" />
//                 </div>
//             </div>
//         </div>
//     )
// }
import { iPad, iPhone, iWatch, macBook } from '../../../assets/products-banner/index';
import './ProductsBanner.css';

export default function ProductsBanner() {
    return (
        <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-5 p-5'>
            <div className='flex flex-col gap-10'>
                <div className='shadow-2xl px-10 flex flex-col items-center'>
                    <img src={macBook} alt="macBook-img" className='w-full max-w-[300px] md:max-w-[400px] lg:max-w-[500px]' />
                    <div className='w-full flex flex-col px-5 text-center md:text-right'>
                        <h4 className='text-lg md:text-xl'>Laptops</h4>
                        <h2 className='text-2xl md:text-3xl font-semibold'>True Laptop Solution</h2>
                    </div>
                </div>
                <div className='shadow-2xl flex flex-col md:flex-row items-center px-5 gap-5'>
                    <img src={iWatch} alt="iWatch-img" className='w-full max-w-[200px] md:max-w-[150px] lg:max-w-[300px]' />
                    <div className='px-5 text-center md:text-right'>
                        <h4 className='text-lg md:text-xl'>Watch</h4>
                        <h2 className='text-2xl md:text-3xl font-semibold'>Not just stylisht</h2>
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row justify-between gap-5'>
                <div className='shadow-2xl flex flex-col justify-center items-center py-5 gap-10'>
                    <img src={iPhone} alt="iPhone-img" className='w-full max-w-[250px] md:max-w-[300px] lg:max-w-[350px]' />
                    <div className='px-5 text-center'>
                        <h4 className='text-lg md:text-xl'>Phones</h4>
                        <h2 className='text-2xl md:text-3xl font-semibold'>Your Day-to-Day Life</h2>
                    </div>
                </div>
                <div className='shadow-2xl flex flex-col items-center justify-center py-5 gap-10'>
                    <div className='px-5 text-center'>
                        <h4 className='text-lg md:text-xl'>Tablets</h4>
                        <h2 className='text-2xl md:text-3xl font-semibold'>Work & Play</h2>
                    </div>
                    <img src={iPad} alt="iPad-img" className='w-full max-w-[250px] md:max-w-[300px] lg:max-w-[350px]' />
                </div>
            </div>
        </div>
    );
}
