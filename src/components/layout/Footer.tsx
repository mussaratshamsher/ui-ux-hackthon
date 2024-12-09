import Image from 'next/image'
import React from 'react'

import f1 from "../../../public/images/f1.png"
import f2 from "../../../public/images/f2.png"
import f3 from "../../../public/images/f3.png"
import f4 from "../../../public/images/f4.png"
import f5 from "../../../public/images/f5.png"
import f6 from "../../../public/images/f6.png"
import fside1 from "../../../public/images/fside1.png"
import fside2 from "../../../public/images/fside2.png"
import Link from 'next/link'



export default function Footer() {
  return (
    <div className='w-full absolute h-auto md:p-20 p-3' id='footer'>

<div className='grid grid-cols-1 md:grid-cols-4'>

    <div >
    <h1 className='font-bold md:text-2xl text-1xl mb-5'>F<span id='clr'>oo</span>dtuck</h1>  
<p>Subscribe our newsletter & get discount 25% off</p>

< h1 className='flex'><input type="text" placeholder='Enter Your Email' className='p-3 w-40 h-8 mt-4'/>
<button><i className='bx bxs-right-arrow-square text-[40px] -ml-2 mt-3 ' id='clr'></i></button></h1>
   <h1 className='text-2xl mt-2'><i className='bx bxl-pinterest-alt text-red-600'></i><i className='bx bxl-twitter text-blue-600'></i>
   <i className='bx bxl-facebook text-blue-800'></i> <i className='bx bxl-instagram text-red-700'></i>
   <i className='bx bxl-youtube text-red-700'></i>
   </h1> 
    </div>

<div>
<h1 className='font-bold  text-1xl mb-5'>Contact us</h1>  
<p><i className='bx bx-map'></i> Abcd 89071,9170 </p>
<p><i className='bx bx-phone mt-2'></i> 08097916909740</p>
<p><i className='bx bx-envelope mt-2'></i>email@example.com</p>
<p><i className='bx bx-time'></i> Sun-Sat/10:00AM -8:00PM</p>

</div>

<div>
<h1 className='font-bold  text-1xl mb-5'>Links</h1>  

<ul>
<li><Link href="./" className='mt-2'>Home</Link></li>
<li><Link href="./../about" className='mt-2'>About Us</Link></li>
<li><Link href="./../contact" className='mt-2'>Contact</Link></li>
<li><Link href="./../menu" className='mt-2'>Our Menu</Link></li>
<li><Link href="./../team" className='mt-2'>Team</Link></li>
<li><Link href="./../faq" className='mt-2'>FAQ</Link></li>
</ul>
</div>

<div>
<h1 className='font-bold text-1xl mb-5'>Instagram Gallery</h1>  

<div className='grid grid-cols-3 grid-rows-2 gap-1'>

<Image src={f1} alt='' width={100} height={100} />
<Image src={f3} alt='' width={100} height={100} />
<Image src={f2} alt='' width={100} height={100} />
<Image src={f4} alt='' width={100} height={100} />
<Image src={f5} alt='' width={100} height={100} />
<Image src={f6} alt='' width={100} height={100} />

</div>
</div>

    

</div>
<Image src={fside2} alt='' width={100} height={100} className='absolute left-[1150px] hidden'/>


{/* <div className=' md:w-[1170px] bg-green-700 text-white flex justify-around absolute p-4 mt-24 -z-10'>
<p>@Designed by Mussarat Shamsher</p>
<p>privacy Policy Terms of Use Partner</p>
</div> */}
<Image src={fside1} alt='' width={100} height={100} className='absolute top-20 md:left-4 left-48'/>

    </div>
  )
}
