import React, {FC} from 'react'

interface HistoryIn{
    date: Date;
    time: string;
    img: string;
    title: string;
    desc: string;
  }

const Sejarah: FC<HistoryIn> = ({date, time, img, title, desc}) => {
  return (
    <div className='p-4 w-72 md:w-96 align-top'>
        <img src={img} className="p-4"/>
            <table className="">
              <tbody className="align-text-top">
                <tr>
                  <th className="pr-3 md:w-28">Tanggal</th>
                  <th className="font-normal">Tanggal ABC</th>
                </tr>
                <tr>
                  <th className="pr-3">Kategori</th>
                  <th className="font-normal">{time}</th>
                </tr>
                <tr>
                  <th className="pr-3">Nama</th>
                  <th className="font-normal">{title}</th>
                </tr>
                <tr>
                  <th className="pr-3">Deskripsi</th>
                  <th className="font-normal">{desc}</th>
                </tr>
              </tbody>
            </table>
    </div>
  )
}

export default Sejarah