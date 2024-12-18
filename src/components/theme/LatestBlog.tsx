import Image from 'next/image'
import React from 'react'
import blog from '../../../public/images/blog.png'


export default function LatestBlog() {
  return (
    <div className='h-auto'>
    <h1 className='text-center font-bold text-1xl md:text-4xl mt-16'>Chocolate Truffle Cake With Honey Flavour</h1>

<p className='text-center mt-2'>Lorem Ipsum is simply dummy text of dummy text of the printing and type setting industry.
Lorem Ipsum is simply dummy text </p>

    <div className='grid grid-cols-1 md:grid-cols-3 p-10 md:gap-0 gap-2 md:ml-1 lg:ml-20 2xl:ml-40 2xl:mr-10'>
    
    {/* blog 1 */}
    <div className='bg-slate-100 w-[270px] md:w-[220px] lg:w-[270px] 2xl:w-[600px] 2xl:h-[680px]'>
    <Image src={blog} alt="" width={500} height={500} className='w-72 h-64 md:w-60 md:h-72 lg:w-96 lg:h-80 2xl:w-[700px] 2xl:h-[500px]'/>
    
    <h2 className='mt-2'><i className='bx bx-box bg-green-700'></i> 02 Jan 2022 <i className='bx bx-chat bg-green-700'></i> Comments(03)</h2>
    <h1 className='text-center font-bold text-xl mt-2'>Chocolate Truffle Cake With Honey Flavour</h1>
    <p className='text-center mt-2 p-1'>Lorem Ipsum is simply dummy text of dummy text of the printing and type setting industry.
    Lorem Ipsum is simply dummy text </p>
    <h2 className='mt-2 p-1'>Read now <i className='bx bx-right-arrow-alt'></i></h2>

   </div>

   {/* blog 2 */}
   <div className='bg-slate-100 w-[270px] md:w-[220px] lg:w-[270px] 2xl:w-[600px] 2xl:h-[680px]'>
    <Image src={blog} alt="" width={500} height={500} className='w-72 h-64 md:w-60 md:h-72 lg:w-96 lg:h-80 2xl:w-[700px] 2xl:h-[500px]'/>
    
    <h2 className='mt-2'><i className='bx bx-box bg-green-700'></i> 02 Jan 2022 <i className='bx bx-chat bg-green-700'></i> Comments(03)</h2>
    <h1 className='text-center font-bold text-xl mt-2'>Chocolate Truffle Cake With Honey Flavour</h1>
    <p className='text-center mt-2 p-1'>Lorem Ipsum is simply dummy text of dummy text of the printing and type setting industry.
    Lorem Ipsum is simply dummy text </p>
    <h2 className='mt-2 p-1'>Read now <i className='bx bx-right-arrow-alt'></i></h2>

   </div>

   {/* blog 3 */}
   <div className='bg-slate-100 w-[270px] md:w-[220px] lg:w-[270px] 2xl:w-[600px] 2xl:h-[680px]'>
    <Image src={blog} alt="" width={500} height={500} className='w-72 h-64 md:w-60 md:h-72 lg:w-96 lg:h-80 2xl:w-[700px] 2xl:h-[500px]'/>
    
    <h2 className='mt-2'><i className='bx bx-box bg-green-700'></i> 02 Jan 2022 <i className='bx bx-chat bg-green-700'></i> Comments(03)</h2>
    <h1 className='text-center font-bold text-xl mt-2'>Chocolate Truffle Cake With Honey Flavour</h1>
    <p className='text-center mt-2 p-1'>Lorem Ipsum is simply dummy text of dummy text of the printing and type setting industry.
    Lorem Ipsum is simply dummy text </p>
    <h2 className='mt-2 p-1'>Read now <i className='bx bx-right-arrow-alt'></i></h2>

   </div>

   </div>
    </div>
  )
}
