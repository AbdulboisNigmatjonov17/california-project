import Navbar from './components/navbar/Navbar'
import CarouselBanner from './components/banner/CarouselBanner'
import MainSection from './components/sections/MainSection'
import ProductsBanner from './components/sections/productsBanner/ProductsBanner'
import TopCards from './components/sections/TopCards'
import Footer from './components/footer/Footer'
import BottomCards from './components/sections/BottomCards'
import BookBanner from './components/sections/BookBanner'
import BottomForm from './components/form/BottomForm'

const App = () => {
  return (
    <>
      <div className='Container flex flex-col gap-10'>
        <Navbar />
        <CarouselBanner />
        <MainSection
          text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in est dui, aliquam, tempor. Faucibus morbi turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
          title={'Shop our latest offers and categories'}
          section={<ProductsBanner />}
        />
        <MainSection
          text={'Our new Limited Edition Winter Design BESPOKE 4-Door Flex™'}
          title={'Save on our most selled items.'}
          section={<TopCards />}
        />
        <MainSection
          text={'Our new Limited Edition Winter Design BESPOKE 4-Door Flex™'}
          title={'See the best around here'}
          section={<BottomCards />}
        />
        <MainSection
          text={'Our new Limited Edition Winter Design BESPOKE 4-Door Flex™'}
          title={'See the best around here'}
          section={<BookBanner />}
        />
        <BottomForm />
      </div>
      <Footer />
    </>
  )
}

export default App