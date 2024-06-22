import React from 'react'

const Subscribe = ({type}) => {
  return (
    <a>
        <div className=
        {`
         rounded-lg py-[9px] px-[18px] w-full border text-white border-white text-center transition-colors duration-300 ease-out cursor-pointer
         ${type !== "best" ? "hover:bg-white hover:text-black" : ""}
         ${type === 'best' ? "bg-radial2 shadow-button" : ""}

        `}>
            <span className=" ">Je m'abonne</span>
        </div>
    </a>
  )
}

export default Subscribe
