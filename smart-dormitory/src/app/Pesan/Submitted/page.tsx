"use client";
import { Header, NavBar, Back, Title, MenuCard} from "../../components"

const Pesan = () => {

  return (
    <>
      <Header role="user"/>
      <Back/>
      <div className=" z-0">
        <img src="/images/menu_bg.png" className="w-screen"></img>
      </div>
      {/* <div className="h-44 z-0 relative"></div> */}
      <div className="bg-[#6E7B43] pt-4">
        <div className="pb-24 h-screen text-center">
            <div className='text-white text-center text-xl bg-[#DE521E] p-4 rounded-lg h-fit w-fit m-auto'>
                <p>Pesanan berhasil<br></br>ditambahkan!</p>
            </div>
        </div>
      </div>
        <NavBar role="user" view="menu"/>
    </>
  )
}

export default Pesan