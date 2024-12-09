import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

import themebg from '../../../public/images/themebg.png'


export default function Menu() {
  return (
    <div>

        {/* landing page */}

<div className=' h-[200px] text-green-500' >
<h1 className='absolute mt-10 md:mt-20 text-2xl md:text-5xl z- md:ml-[500px]'>Menu</h1>
<Image src={themebg} alt='' width={500} height={500} className='w-full md:h-[250px] h-[100px] relative -z-10'/>
<div className='flex flex-row justify-center -mt-20 md:ml-40 '><Link href='/'>Home<i className='bx bx-chevron-right '></i>  </Link>
 <Link href='./../menu' className='text-white'> Menu</Link></div>
</div>

          {/* Menu 1 */}

         <div className='grid grid-cols-3'>

<Image src={themebg} alt='' width={500} height={500} className='grid col-span-1 w-full md:h-[250px] h-[100px] relative -z-10'/>
        
        <div className='grid col-span-2'>

        <i className='bx bx-coffee'></i>
    <h1 className='text-2xl md:text-3xl'>Starter Menu</h1>
    <h1 className='hover:text-green-800 text-xl font-bold'> Alder Grilled Chinook Salmon 
    <span className='text-green-800 font-bold text-1xl md:ml-40 ml-10'>35$</span></h1>
    <hr className='w-96 border border-gray-400 mb-2 mt-2'/>
    <p className='mt-2 mb-2 text-xs'>Tesseted French bread topped with myonese, cheddar</p>
    <p>560 CAL</p>
            </div>    
      
            
            

            </div> 








    </div>
  )
}
