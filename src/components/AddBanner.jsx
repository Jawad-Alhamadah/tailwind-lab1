import React from 'react'

function AddBanner() {
  return (
    <div className='flex  bg-slate-100 '>
      
  <div className="m-2 carousel h-[16em] w-[30em] max-md:w-[30em]   max-sm:w-[30em] max-[500px]:w-[25em]  max-[400px]:w-[15em] max-[400px]:grid max-[400px]:h-96" >
  <div id="slide1" className=" carousel-item relative w-full justify-end gap-10 max-[400px]:grid">
  <div className='flex flex-wrap flex-col ml-10 '>
    <div className='font-thin text-3xl '>Wooden</div>
    <div className='font-thin text-3xl'>Minimalistic</div>
    <div className='font-thin text-3xl'>Chair</div>
    <h2 className='mt-12'>Sale up to</h2>
    <h2 className='text-green-400 font-bold text-xl'> 40% Off </h2>
    <button className='bg-[#fdb737] mt-3 font-bold p-1 max-[400px]:flex max-[400px]:justify-center'> Shop Now</button>
    
  </div>
    <img
      src="https://w7.pngwing.com/pngs/849/119/png-transparent-table-chair-couch-brown-leather-chair-quilted-brown-leather-armchair-angle-furniture-recliner-thumbnail.png"
      className="w-[100%]" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  

  <div id="slide4" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    </div>
  )
}

export default AddBanner
