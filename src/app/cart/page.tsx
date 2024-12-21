import React from 'react'
import themebg from '../../../public/images/themebg.png'
import Image from 'next/image'
import Link from 'next/link'

import cart1 from '../../../public/images/cart1.png'
import cart2 from '../../../public/images/cart2.png'
import cart3 from '../../../public/images/cart3.png'
import cart4 from '../../../public/images/cart4.png'
import cart5 from '../../../public/images/cart5.png'



export default function cart() {
  return (
    <div>
{/* landing title */}

<div className=' h-[200px] text-green-500' >
<h1 className='absolute mt-10 md:mt-20 text-2xl md:text-5xl  md:ml-[500px] ml-5'>Shopping Cart</h1>
<Image src={themebg} alt='' width={500} height={500} className='w-full md:h-[250px] h-[100px] relative -z-10'/>

<div className='flex flex-row justify-center -mt-20 md:ml-40 '><Link href='/'>Home
<i className='bx bx-chevron-right '></i>  </Link>
 <Link href='./../shop' className='text-white'> Shopping Cart</Link></div>
</div>

{/* Product List */}
 
<div className='grid grid-cols-6 gap-2  md:text-xl -mt-20 md:mt-14 lg:mt-20 md:ml-2 md:mr-2 md:px-0 lg:ml-32 lg:mr-32 py-3 lg:py5 2xl:py-10 2xl:px-96'>

    {/* row 1  */}
    <h1 className='col-span-2  text-xs font-thin md:font-bold md:text-xl'>Product</h1>
    <h1 className='md:font-bold text-xs font-thin md:text-xl'>Price</h1>
    <h1 className='text-xs font-thin md:font-bold md:text-xl'>Quantity</h1>
    <h1 className='text-xs font-thin md:font-bold md:text-xl'>Total</h1>
    <h1 className='text-xs font-thin md:font-bold md:text-xl'>Remove</h1>
    
     {/* row 2  */} 
     
     <div className='col-span-2 grid grid-cols-2 gap-1'>
<Image src={cart1} alt='' width={500} height={500} className=' w-8 md:w-20 mt-1 md:mt-2'/>
<div className='text-xs font-thin md:text-lg -ml-5 md:-ml-10 lg:-ml-8 xl:-ml-20'>
  <p><b>Burger</b></p>
  <i className='bx bxs-star text-yellow-500 text-xs md:text-lg '></i>
  <i className='bx bxs-star text-yellow-500 '></i>
  <i className='bx bxs-star text-gray-400 '></i>
  <i className='bx bxs-star text-gray-400 '></i>
  <i className='bx bxs-star text-gray-400 '></i>
    </div>
</div>
<p>$35.00</p>
<h1 className='md:w-16 lg:w-32 h-6 border rounded-sm text-center'> -1 +1 </h1>
<p className=' text-xs md:text-lg md:font-bold'>$230.00</p>
<i className='bx bx-x hover:text-orange-500 ml-5'></i>

    {/* row 3  */} 
    <div className='col-span-2 grid grid-cols-2 gap-1'>
<Image src={cart2} alt='' width={500} height={500} className=' w-8 md:w-20 mt-1 md:mt-2'/>
<div className='text-xs font-thin md:text-lg -ml-5 md:-ml-10 lg:-ml-8 xl:-ml-20'>
  <p><b>Burger</b></p>
  <i className='bx bxs-star text-yellow-500 text-xs md:text-lg '></i>
  <i className='bx bxs-star text-yellow-500 '></i>
  <i className='bx bxs-star text-gray-400 '></i>
  <i className='bx bxs-star text-gray-400 '></i>
  <i className='bx bxs-star text-gray-400 '></i>
    </div>
</div>
<p>$35.00</p>
<h1 className='md:w-16 lg:w-32 h-6 border rounded-sm text-center'> -1 +1 </h1>
<p className=' text-xs md:text-lg md:font-bold'>$230.00</p>
<i className='bx bx-x hover:text-orange-500 ml-5'></i>
{/* row 4  */}
<div className='col-span-2 grid grid-cols-2 gap-1'>
<Image src={cart3} alt='' width={500} height={500} className=' w-8 md:w-20 mt-1 md:mt-2'/>
<div className='text-xs font-thin md:text-lg  -ml-5 md:-ml-10 lg:-ml-8 xl:-ml-20'>
  <p><b>Burger</b></p>
  <i className='bx bxs-star text-yellow-500 text-xs md:text-lg '></i>
  <i className='bx bxs-star text-yellow-500 '></i>
  <i className='bx bxs-star text-gray-400 '></i>
  <i className='bx bxs-star text-gray-400 '></i>
  <i className='bx bxs-star text-gray-400 '></i>
    </div>
</div>
<p>$35.00</p>
<h1 className='md:w-16 lg:w-32 h-6 border rounded-sm text-center'> -1 +1 </h1>
<p className=' text-xs md:text-lg md:font-bold'>$230.00</p>
<i className='bx bx-x hover:text-orange-500 ml-5'></i>

 {/* row 5 */}
 <div className='col-span-2 grid grid-cols-2 gap-1'>
<Image src={cart4} alt='' width={500} height={500} className=' w-8 md:w-20 mt-1 md:mt-2'/>
<div className='text-xs font-thin md:text-lg - -ml-5 md:-ml-10 lg:-ml-8 xl:-ml-20'>
  <p><b>Burger</b></p>
  <i className='bx bxs-star text-yellow-500 text-xs md:text-lg '></i>
  <i className='bx bxs-star text-yellow-500 '></i>
  <i className='bx bxs-star text-gray-400 '></i>
  <i className='bx bxs-star text-gray-400 '></i>
  <i className='bx bxs-star text-gray-400 '></i>
    </div>
</div>
<p>$35.00</p>
<h1 className='md:w-16 lg:w-32 h-6 border rounded-sm text-center'> -1 +1 </h1>
<p className=' text-xs md:text-lg md:font-bold'>$230.00</p>
<i className='bx bx-x hover:text-orange-500 ml-5'></i>

 {/* row 6  */}
 <div className='col-span-2 grid grid-cols-2 gap-1'>
<Image src={cart5} alt='' width={500} height={500} className=' w-8 md:w-20 mt-1 md:mt-2'/>
<div className='text-xs font-thin md:text-lg  -ml-5 md:-ml-10 lg:-ml-8 xl:-ml-20'>
  <p><b>Burger</b></p>
  <i className='bx bxs-star text-yellow-500 text-xs md:text-lg '></i>
  <i className='bx bxs-star text-yellow-500 '></i>
  <i className='bx bxs-star text-gray-400 '></i>
  <i className='bx bxs-star text-gray-400 '></i>
  <i className='bx bxs-star text-gray-400 '></i>
    </div>
</div>
<p>$35.00</p>
<h1 className='md:w-16 lg:w-32 h-6 border rounded-sm text-center'> -1 +1 </h1>
<p className=' text-xs md:text-lg md:font-bold'>$230.00</p>
<i className='bx bx-x hover:text-orange-500 ml-5'></i>
</div>
{/* lower layout  */}
<div className='grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-3 lg:gap-5 2xl:gap-10 ml-2 mr-2
md:ml-5 md:mr-5 lg:ml-16 lg:mr-16 mb-2 md:mb-3 lg:mb-5 2xl:mb-10 mt-2 lg:mt-10 2xl:ml-40 2xl:mr-40'>

{/* Coupon Code  */}
<div>
    <h1 className='text-2xl md:text-3xl lg:text-4xl 2xl:text-7xl font-bold mb-5'>Coupon Code</h1>
    <div className='border p-2 md:p-3 2xl:p-5'>
     <p className='mb-2 md:mb-4'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores neque, similique obcaecati cupiditate doloremque sunt consectetur a modi ea voluptates alias 
      reprehenderit nihil tempore, harum, consequuntur optio. Amet, tenetur nihil?</p>
    <input type="password" placeholder='Enter Here code' className='border rounded-sm p-2 md:p-4' />
    <button className='p-2 md:p-4 rounded-sm bg-green-800 text-white'>Apply</button>
    </div>
</div>
{/* bill section  */}
<div>
<h1 className='text-2xl md:text-3xl lg:text-4xl 2xl:text-7xl font-bold mb-5'>Total Bill</h1>
{/* main layout  */}
<div className='border p-2 md:p-3 2xl:-p-5'>
  {/* sec 1  */}
  <div className='flex justify-around p-2 md:p-3 2xl:-p-5'>
  <h1 className='text-xl 2xl:text-3xl lg:-ml-14 font-bold'>Cart Subtotal</h1>
<p className='font-bold lg:-mr-14'>$120.00</p>
  </div>
  {/* sec 2  */}
  <div className='flex justify-around p-2 md:p-3 2xl:-p-5 font-thin'>
  <h1 className='text-xl 2xl:text-3xl lg:-ml-14'>Shipping Charge</h1>
<p className='lg:-mr-14'>$00.00</p>
  </div>
  <hr />
  {/* sec 3  */}
  <div className='flex justify-around p-2 md:p-3 2xl:-p-5 mt-2'>
  <h1 className='text-xl 2xl:text-3xl lg:-ml-14 font-bold'>Total Amount</h1>
<p className='font-bold lg:-mr-14'>$205.00</p>
  </div>
</div>
<button className='bg-green-700 text-white mt-2 lg:mt-5 2xl:mt-10 p-2 md:p-3 lg:p-4 text-center 
 rounded-sm w-[299px] sm:w-[400px] md:w-[725px] lg:w-[440px] xl:w-[557px] 2xl:w-[1100px]'>
  Proceed to Checkout </button>

</div>

</div>



    </div>
  )
}
