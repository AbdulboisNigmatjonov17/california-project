import { ArrowOutward } from '@mui/icons-material'
import navLogo from '../../assets/navLogo.png'
import FooterData from './FooterData'
export default function Footer() {
    return (
        <footer className='bg-[#F8F9FA] h-full'>
            <div className="Container">
                <div className='flex justify-between gap-40 py-8'>
                    <div className='flex flex-col gap-5'>
                        <img src={navLogo} alt="" className='w-[180px] ' />
                        <p>Sign up for texts to be notified about our best offers on the perfect gifts.</p>
                    </div>
                    <div className='w-full flex justify-between'>
                        {
                            FooterData.map((item) => (
                                <ul key={item.id} className='flex flex-col gap-2'>
                                    <h3 className='mb-2 font-normal text-[22px] leading-7'>{item.h3}</h3>
                                    <li>{item.li1}</li>
                                    <li>{item.li2}</li>
                                    <li>{item.li3}</li>
                                    <li>{item.li4}</li>
                                </ul>
                            ))
                        }
                    </div>
                </div>
                <hr />
                <div className='w-full flex justify-between py-8'>
                    <div>
                        <p className='text-[18px] leading-[22px] font-normal'>Made By: <span>Azwedo</span><ArrowOutward /></p>
                    </div>
                    <div>
                        <p className='text-[18px] leading-[22px] font-normal'>Powered by: <span>Webflow</span><ArrowOutward /></p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
