import Image from 'next/image'
import React from 'react'
import blog from '../../../public/images/blog.png'


export default function LatestBlog() {
  return (
    <div className='h-auto'>
    <h1 className='text-center font-bold text-1xl md:text-4xl mt-16'>Chocolate Truffle Cake With Honey Flavour</h1>

<p className='text-center mt-2'>Lorem Ipsum is simply dummy text of dummy text of the printing and type setting industry.
Lorem Ipsum is simply dummy text </p>

    <div className='grid md:grid-cols-3 grid-cols-1 p-10 md:gap-5 gap-2 md:ml-20'>
    
    {/* blog 1 */}
    <div className='bg-slate-100 w-[270px]'>
    <Image src={blog} alt="" width={500} height={500} className='md:w-96 md:h-80 w-72 h-64'/>
    
    <h2 className='mt-2'><i className='bx bx-box bg-green-700'></i> 02 Jan 2022 <i className='bx bx-chat bg-green-700'></i> Comments(03)</h2>
    <h1 className='text-center font-bold text-xl mt-2'>Chocolate Truffle Cake With Honey Flavour</h1>
    <p className='text-center mt-2'>Lorem Ipsum is simply dummy text of dummy text of the printing and type setting industry.
    Lorem Ipsum is simply dummy text </p>
    <h2 className='mt-2'>Read now <i className='bx bx-right-arrow-alt'></i></h2>

   </div>

   {/* blog 2 */}
   <div className='bg-slate-100 w-[270px]'>
    <Image src={blog} alt="" width={500} height={500} className='md:w-96 md:h-80 w-72 h-64'/>
    
    <h2 className='mt-2'><i className='bx bx-box bg-green-700'></i> 02 Jan 2022 <i className='bx bx-chat bg-green-700'></i> Comments(03)</h2>
    <h1 className='text-center font-bold text-xl mt-2'>Chocolate Truffle Cake With Honey Flavour</h1>
    <p className='text-center mt-2'>Lorem Ipsum is simply dummy text of dummy text of the printing and type setting industry.
    Lorem Ipsum is simply dummy text </p>
    <h2  className='mt-2'>Read now <i className='bx bx-right-arrow-alt'></i></h2>

   </div>

   {/* blog 3 */}
   <div className='bg-slate-100 w-[270px]'>
    <Image src={blog} alt="" width={500} height={500} className='md:w-96 md:h-80 w-72 h-64'/>
    
    <h2 className='mt-2'><i className='bx bx-box bg-green-700'></i> 02 Jan 2022 <i className='bx bx-chat bg-green-700'></i> Comments(03)</h2>
    <h1 className='text-center font-bold text-xl mt-2'>Chocolate Truffle Cake With Honey Flavour</h1>
    <p className='text-center mt-2'>Lorem Ipsum is simply dummy text of dummy text of the printing and type setting industry.
    Lorem Ipsum is simply dummy text </p>
    <h2 className='mt-2'>Read now <i className='bx bx-right-arrow-alt'></i></h2>

   </div>







   </div>
    </div>
  )
}
