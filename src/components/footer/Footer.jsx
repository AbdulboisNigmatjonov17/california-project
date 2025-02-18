import navLogo from '../../assets/navLogo.png'
export default function Footer() {
    return (
        <footer className='bg-[#F8F9FA]'>
            <div className="Container">
                <div className='flex justify-between'>
                    <div>
                        <img src={navLogo} alt="" />
                        <p>Sign up for texts to be notified about our best offers on the perfect gifts.</p>
                    </div>
                </div>
                <hr />
                <div></div>
            </div>
        </footer>
    )
}
