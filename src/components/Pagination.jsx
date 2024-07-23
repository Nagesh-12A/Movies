import React from 'react'

function Pagination({handelpre, handelnext , PageNo}) {
  return (
    <div className='bg-gray-400 text-center justify-center flex mt-8 p-4 '>
        <div onClick={handelpre} className='px-8'><i class="fa-solid fa-arrow-left"></i></div>
        <div className='font-bold'>{PageNo}</div>
        <div onClick={handelnext} className='px-8'><i class="fa-sharp fa-solid fa-arrow-right"></i></div>
        
        
    </div>
  )
}

export default Pagination
