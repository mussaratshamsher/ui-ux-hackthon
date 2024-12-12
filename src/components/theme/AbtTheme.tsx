



import Image from 'next/image'
import React from 'react'

import abthome1 from '../../../public/images/abthome1.png'
import abthome2 from '../../../public/images/abthome2.png'
import abthome3 from '../../../public/images/abthome3.png'
import { Button } from '../ui/button'

export default function AbtTheme() {

  return (
    <div  className='grid grid-cols-1 md:grid-cols-2'>


{/* Image section */}
<div className='grid grid-cols-2 md:mt-32 -mt-20 md:ml-36 ml-3 md:gap-5 gap-2'>
    


   <div className='animate__animated animate__zoomIn animate_infinte col-span-1 row-span-2'>
    <Image src={abthome2} alt='' width={500} height={500} className='md:w-[300px] md:h-[450px] w-[150px] h-[250px]'/></div> 
   <div className='animate__animated animate__zoomIn mt-5'>
    <Image src={abthome1} alt='' width={500} height={500} className='md:w-[250px] md:h-[200px] w-[120px] h-[100px]'/></div>
   <div className='animate__animated animate__zoomIn row-span-2'>
    <Image src={abthome3} alt='' width={500} height={500} className='md:w-[250px] md:h-[300px] w-[120px] h-[150px] '/></div>
   </div>

{/* text section */}



<div className=' md:ml-28 ml-3 -mt-10'>
<h2 id='myfont' className='text-green-800 md:mt-40'> About Us <hr className='md:w-10 w-5 -mt-5 md:ml-32 ml-20 border border-green-800'/></h2>
<h1 className='flex flex-row md:text-4xl text-1xl md:font-bold font-semibold mt-4 md:mt-10'>Enjoy Healthy Life 
 <br  /> & Tasty Food.  </h1>
<p className='mt-10 p-3 text-center'>Lorem Ipsum is simply dummy text of dummy text of the printing and type setting industry.
Lorem Ipsum is simply dummy text of dummy text of the printing and type setting industry.Lorem Ipsum is simply
 dummy text of dummy text of the printing and type setting industry. </p>

<div className='grid grid-cols-1 md:grid-cols-2  mt-5 md:ml-14 ml-2'>
  <Button >Show more</Button> <Button variant={'ghost'}>Watch Videos</Button> </div>
</div>

    
    
    
    
    
    
    
    
    </div>
  )
}
