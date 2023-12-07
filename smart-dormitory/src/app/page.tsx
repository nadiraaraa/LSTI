import { Header, NavBar} from "./components"

const page = () => {
  return (
    <>
      <Header role="user"/>
        <div className="">
          <div className="fixed w-full z-[-10]">
            <img src="/images/home_bg.png" className="w-full"></img>
          </div>
          <div className="align-middle pt-36">
            <div className='bg-[#6E7B43] mx-6 p-4 px-6 rounded-lg text-white text-center'>
                <p className='py-4 text-xl font-bold'>Catering Smart Dormitory</p>
                <p>Selamat datang di aplikasi Catering Smart Dormitory, Nama! Pesan menu catering yang akan diantar ke pintu kamarmu sesuai jadwal, dan gunakan kuota untuk tiap pesanan.</p>
                <div className='text-center pt-4 px-6 justify-between flex'>
                  <a href="/Kuota" className=' border-2 border-white py-1 px-4 rounded-lg w-28'>Tambah Kuota</a>
                  <a href="/Pesan" className=' bg-[#DE521E] border-2 border-white py-1 px-4 rounded-lg w-28 '>Pesan Menu</a>
                </div>
            </div>
          </div>
          
        </div>
      <NavBar role="user" view="home"/>
    </>
  )
}

export default page