import Image from 'next/image'
import React from 'react'

import abthome3 from '../../../public/images/abthome3.png'
import choose1 from '../../../public/images/choose1.png'
import chooseback from '../../../public/images/chooseback.png'

import options1 from '../../../public/images/options1.png'
import options2 from '../../../public/images/options2.png'
import options3 from '../../../public/images/options3.png'
import options4 from '../../../public/images/options4.png'


export default function ChooseUs() {
  return (
<div>

<div className=' w-full  h-auto grid grid-cols-1 md:grid-cols-2 gap-5'>

{/* grid 1  */}

<div className='md:pl-28 md:pt-32 md:ml-5'>
<Image src={chooseback} alt='' width={100} height={100} className='w-40 ml-20 md:ml-28  absolute -mt-8 md:-mt-4 -z-10'/>

 <div className='flex '>
<Image src={choose1} alt='' width={100} height={100}  className='md:w-[200px]  w-[100px]'/>
<Image src={abthome3} alt='' width={100} height={100} className='w-[100px] md:w-[200px] relative top-10 -ml-8 md:top-20 md:-ml-16'/> 
</div>
</div>

{/* grid 2  */}
<div className='md:pr-28 '>
<h2 id='myfont' className='text-green-800 mt-10 md:mt-14'> Why Choose Us <hr className='md:w-10 w-5 -mt-5 md:ml-32 ml-20 border border-green-800'/></h2>
<h1 className='text-1xl md:text-3xl font-bold md:mt-5 mt-3'>Why We are the best?</h1>
<p className='mt-5 w-[250px]'>Lorem Ipsum is simply dummy text of dummy text of the printing and type setting industry.
Lorem Ipsum is simply dummy text of dummy text of the printing and type setting industry.Lorem Ipsum is simply</p>
<br />
<p className='w-[250px]'>Lorem Ipsum is simply dummy text of dummy text of the printing and type setting industry.
Lorem Ipsum is simply dummy text </p>

{/* OPTIONS  */}
<div className='grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 ml-5'>

<Image src={options1} alt='' width={500} height={500} className='w-60 md:w-72 h-24'/> 
<Image src={options2} alt='' width={500} height={500} className='w-60 md:w-72 h-24'/> 
<Image src={options3} alt='' width={500} height={500} className='w-60 md:w-72 h-24'/> 
<Image src={options4} alt='' width={500} height={500} className='w-60 md:w-72 h-24'/> 

</div>


</div>

  

</div>

    </div>
  )
}
