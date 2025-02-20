import { ArrowOutward } from '@mui/icons-material'
import navLogo from '../../assets/navLogo.png'
import FooterData from './FooterData'

export default function Footer() {
    return (
        <footer className='bg-[#F8F9FA] h-full'>
            <div className="Container px-5">
                <div className='flex flex-col md:flex-row justify-between gap-10 py-8'>
                    <div className='flex flex-col gap-5 text-center md:text-left'>
                        <img src={navLogo} alt="Logo" className='w-[180px] mx-auto md:mx-0' />
                        <p className="max-w-[600px] mx-auto">
                            Sign up for texts to be notified about our best offers on the perfect gifts.
                        </p>
                    </div>

                    <div className='w-full grid lg:grid-cols-4 grid-cols-2 justify-center md:justify-between gap-5'>
                        {FooterData.map((item) => (
                            <ul key={item.id} className='flex flex-col gap-2 text-center md:text-left'>
                                <h3 className='mb-2 font-normal text-[22px] leading-7'>{item.h3}</h3>
                                <li>{item.li1}</li>
                                <li>{item.li2}</li>
                                <li>{item.li3}</li>
                                <li>{item.li4}</li>
                            </ul>
                        ))}
                    </div>
                </div>

                <hr />

                <div className='w-full flex flex-col md:flex-row justify-between items-center text-center md:text-left py-8'>
                    <p className='text-[18px] leading-[22px] font-normal'>
                        Made By: <span className="font-semibold">Azwedo</span> <ArrowOutward />
                    </p>
                    <p className='text-[18px] leading-[22px] font-normal'>
                        Powered by: <span className="font-semibold">Webflow</span> <ArrowOutward />
                    </p>
                </div>
            </div>
        </footer>
    )
}
