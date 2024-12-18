import 'animate.css'

import Image from 'next/image'
import React from 'react'
import bg from '../../public/images/bg.png'
//import side1 from '../../public/images/side1.png'
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
    <div className=' h-auto w-full'>
    <div className=' sm:gap-44 lg:gap-10 md:mt-10 md:grid md:grid-cols-2 flex flex-col-reverse mt-2'>

{/* grid 1 */}
<div className='sm:ml-20 md:ml-5 lg:ml-20 2xl:ml-60 ml-2'>
<h2 id='myfont' className='text-green-800'> Healthy & Tasty Food <hr className='md:w-20 w-5 -mt-2 ml-64 border border-green-800'/></h2>
<h1 className='flex flex-row sm:text-3xl  md:text-4xl lg:text-5xl text-2xl md:font-bold font-semibold mt-4 md:mt-10'>Enjoy Healthy Life 
 <br  /> & Tasty Food. <Sparkles className='text-green-600'/> 
</h1>
<p className='md:mt-10 sm:mt-5 '>Lorem Ipsum is simply dummy text of dummy text of <br />the printing and type setting industry. </p>

<div className='grid grid-cols-1 sm:flex sm:flex-col md:grid md:grid-cols-2 md:gap-20  mt-5 ml-14 md:ml-0'>
  <Button >Show more</Button>
  <Button variant={'ghost'} className='lg:-ml-[100px] 2xl:-ml-[300px] '>Place an order</Button>
</div>
</div >

{/* grid 2 */}
<div className='relative md:ml-0 ml-[100px]  mt-2 md:mt-0'>

<Image src={bg} alt='' width={500} height={500} className='relative w-[450px] sm:w-[1000px] sm:h-[400px] md:w-[1000px] md:h-[500px] md:-mt-8 -z-10 top-0 '/>

<div className='flex flex-row'>

<Image src={abt1} alt='' width={500} height={500} className='absolute w-[150px] md:w-[400px] md:-mt-[480px] -mt-40 md:ml-10 ml-3' id='rotateImage'/>

<Image src={abt3} alt='' width={500} height={500} className='absolute md:-mt-[520px] md:-ml-[60px] md:w-[300px] w-32 -mt-48 -ml-5 -z-10'/>


<Image src={abt2} alt='' width={500} height={500} className=' absolute md:-mt-[300px] md:ml-[50px] -z-10 md:w-[300px] w-32 -mt-24 ml-10   '/>

<Image src={salit} alt='' width={500} height={500} className=' absolute md:-mt-[400px] md:-ml-[70px] -z-10 md:w-[300px] w-32 -mt-32 -ml-8'/>

</div>



</div>

</div>

<div className="mt-24 md:-mt-10">
<AbtTheme/>
</div>
<FoodCategory/>
<ChooseUs/>
<FoodMenu/>
{/* <Image src={side1} alt='' width={100} height={100} className='relative md:left-[1160px] left-[180px] top-12'/> */}
<Member />

{/* testimonials  */}
<div className=' h-auto mb-20' >

<h2 id='myfont' className='text-green-800 mt-4 md:mt-28 mb-10 text-center'> Testimonials </h2>

<h1 className='text-center md:text-2xl text-1xl font-semibold'>What our Client are saying</h1>
<div className='md:w-[600px] md:h-[400px] 2xl:w-[800px] w-[270px] h-auto mt-20 ml-5  md:ml-[100px] lg:ml-[300px] mb-10 2xl:ml-[900px]' 
id='border'>
<Image src={clientest} alt='' width={500} height={500} className=' absolute w-20 h-20 md:ml-[270px] ml-20 -mt-10 2xl:ml-[350px]'/>
<br />
<h2 className='font-mono text-center text-3xl mt-10' id='clr'>99</h2>

<p className='p-7 pt-0 pb-4'>It is a long established fact that a reader will be distracted by the readable content of a page
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