
import Image from 'next/image'
import React from 'react'
import bg from '../../public/images/bg.png'
import side1 from '../../public/images/side1.png'
import abt1 from '../../public/images/abt1.png'
import abt2 from '../../public/images/abt2.png'
import abt3 from '../../public/images/abt3.png'
import salit from '../../public/images/salit.png'
import { Sparkles, Tally1 } from 'lucide-react'


import { Button } from '@/components/ui/button'
import AbtTheme from '@/components/theme/AbtTheme'
import FoodMenu from '@/components/theme/FoodMenu'
import Member from '@/components/theme/Member'


export default function Home() {
  return (
    <div>
    <div className='w-full h-auto md:mt-10 md:grid md:grid-cols-2 flex flex-col-reverse mt-2'>

{/* grid 1 */}
<div className='w-full  md:ml-10 ml-2'>
<h2 id='myfont' className='text-green-800'> Healthy & Tasty Food <hr className='md:w-20 w-5 -mt-2 ml-64 border border-green-800'/></h2>
<h1 className='flex flex-row md:text-4xl text-2xl md:font-bold font-semibold mt-4 md:mt-10'>Enjoy Healthy Life 
 <br  /> & Tasty Food. <Sparkles className='text-green-600'/> 
</h1>
<p className='mt-10'>Lorem Ipsum is simply dummy text of dummy text of <br />the printing and type setting industry. </p>

<div className='grid md:grid-cols-2 grid-cols-1 mt-5 ml-14 md:ml-2'>
  <Button >Show more</Button>
  <Button variant={'ghost'} className='md:-ml-24'>Place an order</Button>
</div>
</div >

{/* grid 2 */}
<div className='relative'>

<Image src={bg} alt='' width={500} height={500} className='relative md:w-[700px] w-[280px] md:h-[500px] md:-mr-28 md:-mt-10 -z-10 top-0 '/>

<div className='flex flex-row'>

<Image src={abt1} alt='' width={500} height={500} className='absolute w-[150px] md:w-[400px] md:-mt-[480px] -mt-48 md:ml-10 ml-10' id='rotateImage'/>

<Image src={abt3} alt='' width={500} height={500} className='absolute md:-mt-[520px] md:-ml-[60px] md:w-[300px] w-32 -mt-60 -z-10'/>


<Image src={abt2} alt='' width={500} height={500} className=' absolute md:-mt-[300px] md:ml-[50px] -z-10 md:w-[300px] w-32 -mt-32 ml-10   '/>

<Image src={salit} alt='' width={500} height={500} className=' absolute md:-mt-[400px] md:-ml-[70px] -z-10 md:w-[300px] w-32 -mt-44 -ml-2'/>

</div>



</div>

{/* <div className='md:ml-[600px] text-gray-500'>
<h2>Scrolldown</h2> <br />
<Tally1 className='md:ml-10 '/>
</div> */}

</div>
<AbtTheme/>

<FoodMenu/>
<Image src={side1} alt='' width={100} height={100} className='relative md:left-[1160px] left-[180px] top-12'/>
<Member />



  </div>
  )
}