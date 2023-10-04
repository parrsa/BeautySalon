import { Navbar, Banner, Aboute, Footer, Eyelash, Nails, Makeup, Hair } from '../../Data/Static/staticimport'
const index = () => {
  return (
    <div className='overflow-hidden relative'>
      <Navbar />
      {/* <Navbar2/> */}
      <Banner />
      <Eyelash />
      <Nails />
      <Makeup />
      <Hair />
      <Aboute />
      <Footer />
    </div>
  )
}

export default index