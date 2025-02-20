
import MainBannerImg from '../../assets/mainBannerImg.png';
import Button from '../button/Button';

export default function MainBanner() {
    return (
        <div className='bg-[#DCE5E2] mx-5 max-w-full rounded-2xl flex flex-col-reverse lg:flex-row justify-between items-center p-5 lg:p-10'>
            <div className='max-w-[600px] flex flex-col justify-center gap-5 text-center lg:text-left'>
                <h1 className='font-normal text-4xl md:text-5xl lg:text-6xl leading-tight'>
                    The new phones are here take a look.
                </h1>
                <p className='font-normal text-base md:text-lg leading-relaxed'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in est dui, aliquam, tempor. Faucibus morbi turpis.
                </p>
                <div className='flex justify-center lg:justify-start mb-3'>
                    <Button text={'explore'} />
                </div>
            </div>
            <div className='flex justify-center w-full lg:w-auto'>
                <img src={MainBannerImg} alt="banner" className='w-full max-w-[400px] md:max-w-[500px] lg:max-w-[600px] h-auto' />
            </div>
        </div>
    );
}
