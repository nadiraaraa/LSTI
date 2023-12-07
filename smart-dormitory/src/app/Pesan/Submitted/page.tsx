"use client";
import { Header, Sidebar, Back, Title, MenuCard} from "../../components"

const Pesan = () => {

  return (
    <>
    <div className="flex flex-col h-full md:flex-row md:overflow-hidden">
      <div className="fixed flex z-40 md:relative md:flex-none md:w-[17rem]">
        <Sidebar role="user"/>
      </div>
      <div className="md:flex-grow  w-full ">
        <Header role="user"/>
        <Back/>
        <div className="md:hidden">
          <img src="/images/menu_bg.png" className="w-screen"></img>
        </div>
      {/* <div className="h-44 z-0 relative"></div> */}
      <div className="bg-[#6E7B43] pt-4 md:align-middle md:pt-72  h-screen">
        <div className="pb-24 text-center">
            <div className='text-white text-center text-xl bg-[#DE521E] p-4 rounded-lg h-fit w-fit m-auto'>
                <p>Pesanan berhasil<br></br>ditambahkan!</p>
            </div>
        </div>
      </div>
      </div>
    </div>
  </>

  )
}

export default Pesan