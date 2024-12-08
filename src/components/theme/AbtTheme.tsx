

import Image from 'next/image'
import React from 'react'

import abthome1 from '../../../public/images/abthome1.png'
import abthome2 from '../../../public/images/abthome2.png'
import abthome3 from '../../../public/images/abthome3.png'
import { Button } from '../ui/button'
import {  Play } from 'lucide-react'

export default function AbtTheme() {
  return (
    <div  className='grid grid-cols-2'>


{/* Image section */}
<div className='grid grid-cols-2  md:mt-32 mt-20 ml-36 gap-5'>
    
   <div className='col-span-1 row-span-2 animate__animated animate__zoomIn'>
    <Image src={abthome2} alt='' width={500} height={500} className='w-[300px] h-[450px]'/></div> 
   <div className='mt-5 animate__animated animate__zoomIn'>
    <Image src={abthome1} alt='' width={500} height={500} className='w-[250px] h-[200px]'/></div>
   <div className='row-span-2 animate__animated animate__zoomIn'>
    <Image src={abthome3} alt='' width={500} height={500} className='w-[250px] h-[300px]'/></div>
   </div>

{/* text section */}



<div className=' md:ml-28'>
<h2 id='myfont' className='text-green-800 mt-28'> About Us <hr className='md:w-10 w-5 -mt-5 ml-32 border border-green-800'/></h2>
<h1 className='flex flex-row md:text-4xl text-2xl md:font-bold font-semibold mt-4 md:mt-10'>Enjoy Healthy Life 
 <br  /> & Tasty Food.  </h1>
<p className='mt-10'>Lorem Ipsum is simply dummy text of dummy text of <br />the printing and type setting industry. </p>

<div className='grid md:grid-cols-2 grid-cols-1 mt-5 ml-14 md:ml-2'>
  <Button >Show more</Button>  <Play className='text-white p-2 rounded-full bg-green-600' /><b>Watch Video</b></div>
</div>

    
    
    
    
    
    
    
    
    </div>
  )
}
