import Image from 'next/image'
import React from 'react'

import partnr1 from '../../../public/images/partnr1.png'
import partnr2 from '../../../public/images/partnr2.png'
import partnr3 from '../../../public/images/partnr3.png'
import partnr4 from '../../../public/images/partnr4.png'
import partnr5 from '../../../public/images/partnr5.png'
import partnr6 from '../../../public/images/partnr6.png'



export default function Bestpeople() {
  return (
    <div className='h-auto'>
<h2 id='myfont' className='text-green-800 mt-28 mb-10 ml-10'> Testimonials </h2>
<h1 className='text-center mt-2 md:text-2xl text-xs font-semibold'>What our Clients are saying</h1>

<div className='grid grid-cols-1 md:grid-cols-6 p-5 md:ml- md:mb-5 mb-2' >

<Image src={partnr1} alt='' width={500} height={500} className='w-20 h-20' />

<Image src={partnr2} alt='' width={500} height={500} className='w-20 h-20' />

<Image src={partnr4} alt='' width={500} height={500} className='w-20 h-20' />

<Image src={partnr5} alt='' width={500} height={500} className='w-20 h-20' />

<Image src={partnr6} alt='' width={500} height={500} className='w-20 h-20' />

<Image src={partnr3} alt='' width={500} height={500} className='w-20 h-20' />




</div>


    </div>
  )
}
