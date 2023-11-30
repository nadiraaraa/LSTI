import React, {FC} from 'react'

interface TextIn{
    text: string;
}

const Title: FC<TextIn> = ({text}) => {
  return (
    <div className='static top-28 z-0'>
      <div className="px-12 py-2 bg-[#DE521E] rounded-md w-fit text-center m-auto">
          <p className="text-center text-white font-bold text-2xl">{text}</p>
      </div>
    </div>
    
  )
}

export default Title