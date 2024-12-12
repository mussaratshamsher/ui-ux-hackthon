import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


import themebg from '../../../public/images/themebg.png'
import { Button } from '@/components/ui/button'


export default function Search() {
  return (
    <div>
{/* landing page */}
<div className=' h-[200px] text-white' >
<h1 className='absolute mt-10 md:mt-20 text-2xl md:text-5xl md:ml-[500px] text-white'>Blogs List</h1>
<Image src={themebg} alt='' width={500} height={500} className='w-full md:h-[250px] h-[100px] relative -z-10'/>
<div className='flex flex-row justify-center -mt-20 md:ml-40 '><Link href='/'>Home<i className='bx bx-chevron-right '></i>  </Link>
 <Link href='./../blogs' className='text-green-700'> Blogs</Link></div>
</div>

<div className='text-center max-w-screen-md md:p-10 p-2'>

<h1 className='text-2xl md:text-5xl text-green-800 font-bold '>404</h1>
<h2 className='font-bold text-xs md:text-lg p-2'>Oops! Look likes something going wrong</h2>
<p className='p-2 text-gray-700'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    <br /> Lorem Ipsum has been the industry's
standard dummy </p>
  <Button><Link href='/'>Go to Home</Link></Button>

</div>

    </div>
  )
}