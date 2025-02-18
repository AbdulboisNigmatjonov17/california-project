import MainBannerImg from '../../assets/mainBannerImg.png'
import Button from '../button/Button'

export default function MainBanner() {
    return (
        <div className='bg-[#DCE5E2] max-w-full rounded-2xl flex justify-between'>
            <div className='max-w-[600px] max-h-full flex flex-col justify-center gap-5 pl-10'>
                <h1 className='font-normal text-6xl leading-[70px]'>The new phones are here take a look.</h1>
                <p className='font-normal text-[16px] leading-[20px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in est dui, aliquam, tempor. Faucibus morbi turpis.</p>
                <Button text={'explore'}/>
            </div>
            <div>
                <img src={MainBannerImg} alt="" />
            </div>
        </div>
    )
}
