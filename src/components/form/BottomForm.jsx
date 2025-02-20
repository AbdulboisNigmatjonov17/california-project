import { Search } from '@mui/icons-material'
import appleImg from '../../assets/trioWithoutStars.png'
export default function BottomForm() {

  const btnTitle = [
    {
      id: 1,
      title: 'iPhone',
    },
    {
      id: 2,
      title: 'Charger',
    },
    {
      id: 3,
      title: 'Gift',
    },
    {
      id: 4,
      title: 'Google Pixel 3',
    },
    {
      id: 5,
      title: 'Keyboard',
    },
    {
      id: 6,
      title: '13 Pro Max',
    },
    {
      id: 7,
      title: 'iPhone 12',
    },
    {
      id: 8,
      title: 'Laptop',
    },
    {
      id: 9,
      title: 'Mobile',
    },
  ]

  return (
    <div className='flex flex-col items-center gap-5 mb-10'>
      <div className='max-w-[800px] flex flex-col items-center gap-5'>
        <h1 className='font-normal text-[42px] leading-[52px]'>Looking for anything else?</h1>
        <form className='border border-[#C5C5C5] bg-[#F8F9FA] rounded-[100px] w-full h-[60px] flex items-center px-5 gap-3 text-[14px] font-normal leading-[17px]'>
          <Search />
          <input type="text" placeholder='Search keyword' className='outline-none w-full h-full' />
        </form>
        <div className='flex gap-5 flex-wrap justify-center'>
          {
            btnTitle.map((item) => (
              <h3 key={item.id} className='border border-[#C5C5C5] py-2 px-5 rounded-[100px] font-normal text-[14px] leading-[17px] cursor-pointer'>{item.title}</h3>
            ))
          }
        </div>
      </div>
      <div className='bg-[#DCE5E2] rounded-2xl w-[935px] min-h-[450px] flex flex-col items-center justify-center gap-5'>
        <div className='flex flex-col items-center'>
          <h1 className='font-normal text-[42px] leading-[52px]'>Never miss a thing</h1>
          <p>Sign up for texts to be notified about our best offers on the perfect gifts.</p>
        </div>
        <div>
          <img src={appleImg} alt="" />
        </div>
        <form className='border rounded-[100px] w-[400px] h-[50px] pl-4 flex justify-between'>
          <input type="text" placeholder='Your email' className='outline-none w-full'/>
          <button className='bg-black text-white h-full w-[115px] cursor-pointer rounded-r-[100px]'>Sign up</button>
        </form>
      </div>
    </div>
  )
}
