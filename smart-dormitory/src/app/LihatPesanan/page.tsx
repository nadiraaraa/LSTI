import { Header, NavBar, Title} from "../components"

const Pesan = () => {
  return (
    <>
      <Header/>
        <div className="overflow-y-auto bg-[#6E7B43] mb-18 min-h-screen">
          <div className="pt-8 py-4">
            <Title text="Lihat Pesanan" />
          </div>
          <form className="flex justify-between px-4">
            <div className="p-2">
                <input type="date" id="date"
                className="border border-[#DE521E] rounded-md w-full"
                required></input>
              </div>
              <div className="p-2">
                <select id="kategori"
                className="border border-[#DE521E] rounded-md w-full"
                required>
                <option value="pagi" className=" text-sm">Pagi</option>
                <option value="malam" className=" text-sm">Malam</option>
                </select>
              </div>
          </form>
          <div className="bg-[#FFFCDB] p-4 m-4 mt-2 rounded-lg  text-left">
            <table className="">
              <tbody>
                <tr>
                  <th className="pr-3">Nama</th>
                  <th className="font-normal">Nama ABC</th>
                </tr>
                <tr>
                  <th className="pr-3">Kategori</th>
                  <th className="font-normal">Kategori ABC</th>
                </tr>
                <tr>
                  <th className="pr-3">Nomor Kamar</th>
                  <th className="font-normal">Nomor Kamar ABC</th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
      <NavBar/>
    </>
  )
}

export default Pesan