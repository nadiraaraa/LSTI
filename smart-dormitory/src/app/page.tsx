import { Header, NavBar, Sidebar} from "./components"
// import {bg} from "public/images/home_bg.png"

const page = () => {
  return (
    <>
      <div className="flex flex-col h-full md:flex-row md:overflow-hidden">
        <div className="fixed flex z-40 md:relative md:flex-none md:w-[17rem]">
          <Sidebar role="user"/>
        </div>
        <div className="md:flex-grow  w-full ">
          <Header role="user"/>
          <div className="bg-cover bg-[url('/images/home_bg.png')] h-full w-full">
            <div className="align-middle pt-44 h-screen">
              <div className='bg-[#6E7B43] mx-6 md:mx-16 ld:mx-48  p-4 px-6 rounded-lg text-white text-center '>
                  <p className='py-4 text-xl font-bold'>Catering Smart Dormitory</p>
                  <p>Selamat datang di aplikasi Catering Smart Dormitory, Nama! Pesan menu catering yang akan diantar ke pintu kamarmu sesuai jadwal, dan gunakan kuota untuk tiap pesanan.</p>
                  <div className='text-center pt-4 px-6 justify-center flex'>
                    <a href="/Kuota" className=' border-2 border-white py-1 px-4 rounded-lg mx-2 ld:mx-8'>Tambah Kuota</a>
                    <a href="/Pesan" className=' bg-[#DE521E] border-2 border-white py-1 px-4 rounded-lg  mx-2 ld:mx-8'>Pesan Menu</a>
                  </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      
      {/* <NavBar role="user" view="home"/> */}
    </>
  )
}

export default page