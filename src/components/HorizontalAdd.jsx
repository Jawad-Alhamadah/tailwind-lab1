import React from 'react'

function HorizontalAdd() {
  return (
   <div className='w-[80%] bg-slate-100 flex justify-around'>
        
        <div className='w-[30%]'>
            <h2 className='text-xl'>Bose BlueTooth Wireless HeadPhones</h2>
            <h2 className='text-sm'>Bose BlueTooth Wireless HeadPhones</h2>
        </div>
        <div className='w-[10%] mt-5'>
            <h1 className='text-gray-500'><s>$265</s></h1>
            <h1 className='text-green-500 text-2xl font-bold mb-5'><s>$265</s></h1>
            <button className='bg-orange-400 font-bold'>Shop Now</button>
           
        </div>
       
        <div className='w-[200px] h-[200px]'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTqOINsWZY42exRqg02Hs5TmLilF2ayLMgPw&s" alt="" />
        </div>
   </div>
  )
}

export default HorizontalAdd
