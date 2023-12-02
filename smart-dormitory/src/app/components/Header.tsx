import React from 'react'

const Header = () => {
  return (
    <div className="h-[76px] z-20 relative">
        <div className="h-fit w-screen fixed top-0">
            <div className= " bg-[#FFFCDB] flex justify-between">
                <a href="/" className="box pl-4 py-2">
                    <img src="/images/logo.png" className="h-16"></img>
                </a>
                <div className="pr-4 flex align-middle pt-4">
                    <div className="box bg-[#DE521E] rounded-md px-4 py-2 h-fit right-4 align-middle text-center">
                        <p className='text-white'>
                            Your Quota: ##
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    
  )
}

export default Header