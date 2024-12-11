
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import themebg from '../../../public/images/themebg.png'
import blog1 from '../../../public/images/blog1.png'
import blog2 from '../../../public/images/blog2.png'
import blog3 from '../../../public/images/blog3.png'
import blog4 from '../../../public/images/blog4.png'



export default function blogs() {
  return (
    <div>

{/* landing page */}
<div className=' h-[200px] text-green-500' >
<h1 className='absolute mt-10 md:mt-20 text-2xl md:text-5xl z- md:ml-[500px]'>Blog List</h1>
<Image src={themebg} alt='' width={500} height={500} className='w-full md:h-[250px] h-[100px] relative -z-10'/>
<div className='flex flex-row justify-center -mt-20 md:ml-40 '><Link href='/'>Home<i className='bx bx-chevron-right '></i>  </Link>
 <Link href='./../blogs' className='text-white'> Blogs</Link></div>
</div>
<h1 className='text-center text-1xl text-bold md:text-4xl mt-5 md:mt-20 text-green-800 font-bold' id='myfont'>Read Blogs</h1>

{/* blog layout  */}
<div className='gird grid-cols-3'>

{/* grid 1  */}
    <div className='col-span-2'>


    </div>

{/* grid 2  */}
    <div className='grid-cols-1'>

    </div>

</div>




    </div>
  )
}
