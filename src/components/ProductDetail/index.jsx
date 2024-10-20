import React from 'react'
import { useLocation } from 'react-router-dom'

export default function ProductDetail() {
  const location = useLocation()
  console.log('location: ', location)
  const {product} = location.state
  return (
    <section className='container mx-auto p-6'>
      <h2 className='text-2xl font-bold text-center'>Danh sách đồng hồ</h2>
      <div className="grid grid-cols-4">   
            <div className="bg-white shadow-lg p-4 rounded-lg">
              <img src={product.productImg} alt="" className='w-full object-cover rounded-tl-lg'/>
              <p className='text-lg font-semibold mt-5'>{product.productName}</p>
              <p>Giá: {product.price} vnd</p>
            
              <button className='w-full py-1 px-3 bg-blue-500 mt-5 text-white'>Thêm sản phẩm</button>
            </div>
      </div>
    </section>
  )
}
