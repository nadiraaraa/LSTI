import { Header, Sidebar, Title} from "../components"

const Pesan = () => {
  return (
    <>
    <div className="flex flex-col h-full md:flex-row md:overflow-hidden">
      <div className="fixed flex z-40 md:relative md:flex-none md:w-[17rem]">
        <Sidebar role="caterer"/>
      </div>
      <div className="md:flex-grow  w-full bg-[#6E7B43]">
        <Header role="user"/>
        <div className=" bg-[#6E7B43] mb-18 min-h-screen">
          <div className="pt-8 py-4">
            <Title text="Lihat Pesanan" />
          </div>
          <form className="flex justify-between  my-4 mx-4 md:mx-36">
            <div className="">
                <input type="date" id="date"
                className="border border-[#DE521E] rounded-md w-full"
                required></input>
              </div>
              <div className="">
                <select id="kategori"
                className="border border-[#DE521E] rounded-md w-full"
                required>
                <option value="pagi" className=" text-sm">Pagi</option>
                <option value="malam" className=" text-sm">Malam</option>
                </select>
              </div>
          </form>
          <div className="bg-[#FFFCDB] p-4 m-4 mt-2 rounded-lg  text-left my-4 mx-4 md:mx-36">
            <img src="/images/menus/menu_1.png" className="p-4"/>
            <table className="">
              <tbody>
                <tr>
                  <th className="pr-3 md:w-60">Nama</th>
                  <th className="font-normal">Nama ABC</th>
                </tr>
                <tr>
                  <th className="pr-3">Deskripsi</th>
                  <th className="font-normal">Deskripsi ABC</th>
                </tr>
                <tr>
                  <th className="pr-3">Nomor Kamar</th>
                  <th className="font-normal">Nomor Kamar ABC</th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        </div>
        </div>
  </>
  )
}

export default Pesan