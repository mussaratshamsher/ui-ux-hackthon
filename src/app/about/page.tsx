import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
 
import themebg from '../../../public/images/themebg.png'
import AbtTheme from '@/components/theme/AbtTheme'
import choose from '../../../public/images/choose.png'
import Student from '../../../public/images/Student.png'
import Person from '../../../public/images/Person.png'
import Coffee from '../../../public/images/Coffee.png'
import Member from '@/components/theme/Member'
import clientest from '../../../public/images/clientest.png'
import FoodMenu from '@/components/theme/FoodMenu'



export default function page() {
  return (
    <div className='h-auto'>

{/* landing page */}
<div className=' h-[200px] text-green-500' >
<h1 className='absolute mt-10 md:mt-20 text-2xl md:text-5xl z- md:ml-[500px]'>About Us</h1>
<Image src={themebg} alt='' width={500} height={500} className='w-full md:h-[250px] h-[100px] relative -z-10'/>
<div className='flex flex-row justify-center -mt-20 md:ml-40 '><Link href='/'>Home<i className='bx bx-chevron-right '></i>  </Link>
 <Link href='./../about' className='text-white'> About</Link></div>
</div>

{/* homepage View */}
<AbtTheme/>

{/* Choose Us */}
<div className='text-center text-black'>

  <h1 className='text-4xl mb-5 mt-5 '><b>Why Choose Us</b></h1>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
     standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to 
     make a type specimen book. It has survived not only five centuries, but also the leap into electronic 
     typesetting, remaining essentially unchanged. not only five centuries, but also the leap into electronic 
     typesetting, remaining essentially unchanged.</p>
<Image src={choose} alt='' width={500} height={500} className='w-full md:h-[250px] h-[100px] md:mt-10 md:mb-10 mt-5'/>

</div>

<div className='grid md:grid-cols-3 grid-cols-1 mt-5 md:pl-32 md:pr-32 '>

  <div className='text-center'>
  <Image src={Student} alt='' width={500} height={500} className='w-20 h-20 ml-32' />
<h1 className='text-2xl font-bold'>Our Chef</h1>
<p>There are many variations of passages of Lorem Ipsum available, but the majority </p>
  </div>
  <div className='text-center'>
  <Image src={Coffee} alt='' width={500} height={500} className='w-20 h-20 ml-32' />
<h1 className='text-2xl font-bold'>Our Chef</h1>
<p>There are many variations of passages of Lorem Ipsum available, but the majority </p>
  </div>
  <div className='text-center'>
  <Image src={Person} alt='' width={500} height={500} className='w-20 h-20 ml-32' />
<h1 className='text-2xl font-bold'>Our Chef</h1>
<p>There are many variations of passages of Lorem Ipsum available, but the majority </p>
  </div>

</div>

{/* Members */}

<Member />

{/* Testimonials */}

<div className=' h-auto mb-20' >

<h2 id='myfont' className='text-green-800 mb-10 ml-10'> Testimonials 
  <hr className='md:w-10 w-5 -mt-5 ml-40 border border-green-800'/></h2>

<h1 className='text-center md:text-2xl text-1xl font-semibold'>What our Clients are saying</h1>
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


{/* food Menu  */}

<FoodMenu/>

</div>




</div>





    
   
  )
}
