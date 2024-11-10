import React from 'react'
import Image from "next/image"

const Deals = () => {
  return (
    <div className='bg-slate-100 w-full px-5'>
      <div className="flex flex-col sm:flex-row item-center justify-between border-b border-gray-400 px-5 py-5 mt-10">
        <h1 className='text-black text-2xl'>Deals of the day</h1>
        <h1 className='bg-orange-500 text-white font-bold rounded px-2 py-2 mt-2 sm:mt-0'>End in: 10 days</h1>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-5 cursor-pointer'>
      <div className='flex flex-col items-center'>
       <Image
       src="/image/Alexander-Palm.webp"
       alt='deal1'
       width={200}
       height={300}
       className='px-5 '>
       </Image>
       <h1 className='text-green-600 font-bold mt-2 hover:text-black'>Rs750.00</h1> 
       <h1 className='text-gray-400 font-thin line-through'>Rs1,200.00</h1>
       <h1 className='text-blue-600 font-thin hover:text-gray-500 '>Alexander Palm</h1>
      </div>
      <div className='flex flex-col items-center'>
       <Image
       src="/image/avacado.jpeg"
       alt='deal2'
       width={200}
       height={200}>
       </Image>
       <h1 className='text-green-600 font-bold mt-2 hover:text-black'>Rs3,500.00</h1> 
       <h1 className='text-gray-400 font-thin line-through'>Rs5,500.00</h1>
       <h1 className='text-blue-600 font-thin hover:text-gray-500'>Avacado</h1>
      </div>
      <div className='flex flex-col items-center'>
        <Image
        src="/image/bnana-palm.webp"
        alt='deal3'
        width={200}
        height={200}>
        </Image>
        <h1 className='text-green-600 font-bold mt-2 hover:text-black'>Rs850.00</h1> 
       <h1 className='text-gray-400 font-thin line-through'>Rs1,200.00</h1>
       <h1 className='text-blue-600 font-thin hover:text-gray-500'>Banana Palm</h1>
      </div>
      <div className='flex flex-col items-center'>
        <Image
        src="/image/corn leaf.jpeg"
        alt='deal4'
        width={200}
        height={200}>
        </Image>
        <h1 className='text-green-600 font-bold mt-2 hover:text-black'>Rs950.00- Rs2,850</h1> 
       <h1 className='text-gray-400 font-thin line-through'>Rs5,500.00</h1>
       <h1 className='text-blue-600 font-thin hover:text-gray-500'>Corn Leafs- Makki Patta</h1>
      </div>
      <div className='flex flex-col items-center'>
        <Image
        src="/image/Ravina palm.jpeg"
        alt='deal5'
        width={200}
        height={100}>
        </Image>
        <h1 className='text-green-600 font-bold mt-2 hover:text-black'>Rs750.00</h1> 
       <h1 className='text-gray-400 font-thiline-through'>Rs1,200</h1>
       <h1 className='text-blue-600 font-thin hover:text-gray-500'>Ravina Palm</h1>
      </div>
      </div>
      <div className="flex flex-col sm:flex-row item-center justify-between border-b border-gray-400 px-5 py-5"></div>
      <div className="flex flex-col sm:flex-row item-center justify-between border-b border-gray-400 px-5 py-5 mt-10">
      <h1 className='text-black text-2xl'>Winter flower seeds</h1>
      <h1 className='bg-orange-500 text-white font-bold rounded px-2 py-2 mt-2 sm:mt-0'>On Sale</h1>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-5 cursor-pointer'>
       <div className='flex flex-col items-center'>
        <Image
        src="/image/marigold.jpeg"
        alt='sale1'
        width={200}
        height={200}
        className='px-2'>
        </Image>
        <h1 className='text-green-600 font-bold mt-2 hover:text-black'>Rs3.50- Rs550.00</h1> 
       <h1 className='text-blue-600 font-thin px-7 hover:text-gray-500'>Marigold - Winter Seeds</h1>
       </div>
       <div className='flex flex-col items-center'>
        <Image
        src="/image/poppyseedmacro.jpg"
        alt='sale2'
        width={200}
        height={200}>
        </Image>
        <h1 className='text-green-600 font-bold mt-2 hover:text-black'>Rs8.0- Rs550.00</h1> 
       <h1 className='text-blue-600 font-thin hover:text-gray-500'>Poppy Mix - </h1>
       <h1 className='text-blue-600 font-thin hover:text-gray-500'>Spring & Winter Seeds</h1>
       </div>
       <div className='flex flex-col items-center'>
        <Image
        src="/image/salvia seed.jpeg"
        alt='sale3'
        width={200}
        height={200}>
        </Image>
        <h1 className='text-green-600 font-bold mt-2 hover:text-black'>Rs5.0- Rs350.00</h1> 
       <h1 className='text-blue-600 font-thin  hover:text-gray-500'>Salvia - </h1>
       <h1 className='text-blue-600 font-thin hover:text-gray-500'>Spring & Winter Seeds</h1>
       </div>
       <div className='flex flex-col items-center'>
        <Image
        src="/image/sweetpea.webp"
        alt='sale4'
        width={200}
        height={200}>
        </Image>
        <h1 className='text-green-600 font-bold mt-2 hover:text-black'>Rs10.00- Rs550.00</h1> 
       <h1 className='text-blue-600 font-thin hover:text-gray-500 '>Sweetpea Multiflora Mixed</h1>
       <h1 className='text-blue-600 font-thin hover:text-gray-500'>- Winter Seeds</h1>
       </div>
       <div className='flex flex-col items-center'>
        <Image
        src="/image/verbena.jpeg"
        alt='sale5'
        width={200}
        height={200}>
        </Image>
        <h1 className='text-green-600 font-bold mt-2 hover:text-black'>Rs10.00- Rs550.00</h1> 
       <h1 className='text-blue-600 font-thin hover:text-gray-500'>Verbana - </h1>
       <h1 className='text-blue-600 font-thin hover:text-gray-500'>Spring & Winter Seeds</h1>
       </div>
      </div>
    </div>
  )
}

export default Deals
