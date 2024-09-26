import React from 'react'

function Card() {
  return (
    <div className='w-96 flex flex-wrap border-2 gap-5 justify-center bg-slate-100  p-2'>
       <div className='w-[35%]'>
            <img src="https://m.media-amazon.com/images/I/61otmDPQnPL._AC_UF1000,1000_QL80_.jpg" alt=""
                className='w-[200px] h-[200px]'
            />
       </div>
       <div className='w-[50%] grid items-center justify-center'>
            <h1>Catagory</h1>
            <h2>Sub-Catagory</h2>
            <h2>Sub-Catagory</h2>
            <h2>Sub-Catagory</h2>
            <h2>Sub-Catagory</h2>
            <h2>Sub-Catagory</h2>
       </div>
    </div>
    
  )
}

export default Card
