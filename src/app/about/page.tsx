import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
 
import themebg from '../../../public/images/themebg.png'
import AbtTheme from '@/components/theme/AbtTheme'
import choose from '../../../public/images/choose.png'
import Student from '../../../public/images/Student.png'
import Person from '../../../public/images/Person.png'
import Coffee from '../../../public/images/Coffee.png'
import abt1 from '../../../public/images/abt1.png'


export default function page() {
  return (
    <div className='w-full h-auto'>

{/* landing page */}
<div className='w-full h-[200px] text-green-500' >
<h1 className='absolute mt-10 md:mt-20 text-2xl md:text-5xl z- md:ml-[500px]'>About Us</h1>
<Image src={themebg} alt='' width={500} height={500} className='w-full md:h-[250px] h-[100px] relative -z-10'/>
<div className='flex flex-row justify-center -mt-20 md:ml-40 '><Link href='/'>Home<i className='bx bx-chevron-right '></i>  </Link>
 <Link href='./../about' className='text-white'> About</Link></div>
</div>

{/* homepage View */}
<AbtTheme/>

{/* Choose Us */}
<div className='text-center text-black'>

  <h1 className='text-4xl mb-5 p-4 '><b>Why Choose Us</b></h1>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
     standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to 
     make a type specimen book. It has survived not only five centuries, but also the leap into electronic 
     typesetting, remaining essentially unchanged. not only five centuries, but also the leap into electronic 
     typesetting, remaining essentially unchanged.</p>
<Image src={choose} alt='' width={500} height={500} className='w-full md:h-[250px] h-[100px] md:mt-10 md:mb-10 mt-5'/>

</div>

<div className='grid md:grid-cols-3 grid-cols-1 md:p-32 mt-5'>

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

<div className='bg-green-500 md:h-[350px] h-[100px]'>
<Image src={abt1} alt="" width={500} height={500} className='w-80 h-80 md:ml-[450px] relative opacity-20 '/>
</div>






</div>     
   
  )
}
