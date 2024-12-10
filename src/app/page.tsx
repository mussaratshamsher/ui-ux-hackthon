
import Image from 'next/image'
import React from 'react'
import bg from '../../public/images/bg.png'
import side1 from '../../public/images/side1.png'
import abt1 from '../../public/images/abt1.png'
import abt2 from '../../public/images/abt2.png'
import abt3 from '../../public/images/abt3.png'
import salit from '../../public/images/salit.png'
import clientest from '../../public/images/clientest.png'
import { Sparkles } from 'lucide-react'

import { Button } from '@/components/ui/button'
import AbtTheme from '@/components/theme/AbtTheme'
import FoodMenu from '@/components/theme/FoodMenu'
import Member from '@/components/theme/Member'
import FoodCategory from '@/components/theme/FoodCategory'
import ChooseUs from '@/components/theme/ChooseUs'
import LatestBlog from '@/components/theme/LatestBlog'
import Bestpeople from '@/components/theme/Bestpeople'


export default function Home() {
  return (
    <div className='w-full h-auto'>
    <div className='  md:mt-10 md:grid md:grid-cols-2 flex flex-col-reverse mt-2'>

{/* grid 1 */}
<div className='md:ml-10 ml-2'>
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

<Image src={bg} alt='' width={500} height={500} className='relative md:w-[700px] w-[300px] md:h-[500px] md:-mr-28 md:-mt-10 -z-10 top-0 '/>

<div className='flex flex-row'>

<Image src={abt1} alt='' width={500} height={500} className='absolute w-[150px] md:w-[400px] md:-mt-[480px] -mt-48 md:ml-10 ml-10' id='rotateImage'/>

<Image src={abt3} alt='' width={500} height={500} className='absolute md:-mt-[520px] md:-ml-[60px] md:w-[300px] w-32 -mt-60 -z-10'/>


<Image src={abt2} alt='' width={500} height={500} className=' absolute md:-mt-[300px] md:ml-[50px] -z-10 md:w-[300px] w-32 -mt-32 ml-10   '/>

<Image src={salit} alt='' width={500} height={500} className=' absolute md:-mt-[400px] md:-ml-[70px] -z-10 md:w-[300px] w-32 -mt-44 -ml-2'/>

</div>



</div>



</div>
<AbtTheme/>

<FoodCategory/>
<ChooseUs/>
<FoodMenu/>
<Image src={side1} alt='' width={100} height={100} className='relative md:left-[1160px] left-[180px] top-12'/>
<Member />

{/* testimonials  */}
<div className=' h-auto mb-20' >

<h2 id='myfont' className='text-green-800 mt-28 mb-10 ml-10'> Testimonials 
  <hr className='md:w-10 w-5 -mt-5 ml-40 border border-green-800'/></h2>

<h1 className='text-center md:text-2xl text-1xl font-semibold'>What our Client are saying</h1>
<div className='md:w-[600px] md:h-[400px]  w-[270px] h-auto mt-20 ml-5 md:ml-[300px] mb-10' id='border'>
<Image src={clientest} alt='' width={500} height={500} className=' absolute w-20 h-20 md:ml-[270px] ml-20 -mt-10'/>
<br />
<h2 className='font-mono text-center text-3xl mt-10' id='clr'>99</h2>

<p className='p-10 pt-4 pb-4'>It is a long established fact that a reader will be distracted by the readable content of a page
   when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of 
   letters, as opposed to using 'Content here, content here', making it look like readable English.</p>

<h1 id='clr' className='text-center'>
<i className='bx bxs-star'></i><i className='bx bxs-star'></i><i className='bx bxs-star'></i>
  <i className='bx bxs-star'></i> <i className='bx bxs-star text-gray-400' ></i>
</h1>
<h1 className='text-center text-2xl font-bold mt-5 mb-5'>Ali Hassan</h1>
<p className='text-center mt-5 mb-5'> Food Specialist</p>

</div>
</div>

<LatestBlog/>

<Bestpeople/>

  </div>
  )
}