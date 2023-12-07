import React, { FC } from 'react'

interface HeaderIn {
    role: string;
}

const Header: FC<HeaderIn> = ({role}) => {
  return (
    <div className="z-20 sticky top-0 w-full">
        <div className="h-fit top-0">
            <div className= " bg-[#FFFCDB] flex justify-end pl-12 w-full">

                <div className="pr-4 flex align-middle py-4">
                    {/* {role == "user" ? */}
                    <div className="box bg-[#DE521E] rounded-md px-4 py-2 h-fit right-4 align-middle text-center">
                    <p className='text-white'>
                        Kuota Tersisa: ##
                    </p>
                    </div>
                    {/* :
                    <div></div>
                    } */}
                    
                </div>
            </div>
            
        </div>
    </div>
    
  )
}

export default Header