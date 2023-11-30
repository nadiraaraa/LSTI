import React, {FC} from 'react'

interface ButtonIn{
    text: string;
    id: string;
}

const Title: FC<ButtonIn> = ({text, id}) => {
  return (
    <button id={id} className="px-12 py-2 bg-[#DE521E] rounded-md w-fit text-center m-auto">
        <p className="text-center text-white font-bold text-2xl">{text}</p>
    </button>
  )
}

export default Title