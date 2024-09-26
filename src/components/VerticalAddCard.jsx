import React from 'react'

function VerticalAddCard() {
    return (
        <div className="card h-[16em] bg-base-100 w-[15em] max-md:w-[25em] shadow-xl bg-[#f8f8f8]">
            <div className="card-body">
                <h1 className="text-center text-xl font-bold ">Pack 5 T-shirts For Summer</h1>
                <h1 className="text-center ">Starting at <span className='text-red-600 font-bold'>$99.99</span></h1>
            </div>
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" 
                     
                    />
            </figure>
        </div>
    )
}

export default VerticalAddCard
