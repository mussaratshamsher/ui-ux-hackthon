import {  Mail } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


import themebg from '../../../public/images/themebg.png'
import { Button } from '@/components/ui/button'


export default function Contact() {
  return (
    <div className='w-full'>

        {/* landing page */}
<div className=' h-[200px] text-green-500' >
<h1 className='absolute mt-10 md:mt-20 text-2xl md:text-5xl z- md:ml-[500px] ml-5'>Contact Us</h1>
<Image src={themebg} alt='' width={500} height={500} className='w-full md:h-[250px] h-[100px] relative -z-10'/>
<div className='flex flex-row justify-center -mt-20 md:ml-40 '><Link href='/'>Home<i className='bx bx-chevron-right '></i>  </Link>
 <Link href='./../contact' className='text-white'> Contact</Link></div>
</div>

      <h1 className='md:text-2xl text-1xl text-center md:mt-20 -mt-20 font-bold text-green-800' id='myfont'>Contact Us</h1>
      <h1 className='md:text-3xl text-2xl md:ml-14 ml-2 mt-5 font-bold font-serif'>Contact for any Query</h1>

      <div className=' grid md:grid-cols-2 grid-cols-1 mt-5 m-5'>
{/* maingrid 1 */}
        <div className='md:ml-20 ml-2'>
         
          <div> <h1 className='md:text-2xl text-1xl' id='clr2'> Booking <hr className='md:w-20 w-12 border-gray-400 border'/></h1> 
          <Mail className='mt-4' id='clr2'/><Link href="">book@foodtuck.com</Link>  </div>
          <div> <h1 className='md:text-2xl text-1xl mt-5' id='clr2'>General<hr className='md:w-20 w-12 border-gray-400 border'/></h1> 
          <Mail className='mt-4' id='clr2'/><Link href="">info@foodtuck.com</Link> </div>
          <div> <h1 className='md:text-2xl text-1xl mt-5' id='clr2'>Technical<hr className='w-20 border-gray-400 border'/></h1> 
         <Mail className='mt-4' id='clr2'/><Link href="">tech@foodtuck.com</Link> </div>
        </div>
{/* maingrid 2 */}
         <div className='ml-2 box-border shadow-lg mb-2 p-4'>

         <h1 className='text-2xl mt-5 mb-5 ml-2 md:hidden'> Send Your Message<hr className='w-60 border-gray-400 border'/></h1>


          <input type="text" placeholder='your name here' className='md:w-[248px] w-[230px] p-2 h-14 border border-green-800 rounded-md mr-2 mb-5'/> 
          <input type="text" placeholder='your email here' className='md:w-[246px] w-[230px] p-2 h-14 border border-green-800 rounded-md' /> <br />
          
          <input type="text" placeholder='Subject ' className='md:w-[500px] w-[230px] h-14 p-2 border border-green-800 rounded-md mt-4'/> <br />

          <textarea rows={4} id=""  placeholder='Message' className='md:w-[500px] w-[230px] p-2 h-32 border border-green-800 rounded-md mt-4'></textarea> <br />

          <Button className='mb-5'>Send</Button>
         </div>

      </div>
      
      
      
    </div>
  )
}
