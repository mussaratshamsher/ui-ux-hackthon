import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

import themebg from '../../../public/images/themebg.png'
import menu1 from '../../../public/images/menu1.png'
import menu2 from '../../../public/images/menu2.png'
import menu3 from '../../../public/images/menu3.png'
import choose from '../../../public/images/choose.png'
import { ChefHat, CupSoda, Pizza, UtensilsCrossed } from 'lucide-react'




export default function Menu() {
  return (
    <div>

        {/* landing page */}

<div className=' h-[200px] text-green-500' >
<h1 className='absolute mt-10 md:mt-20 text-2xl md:text-5xl z- md:ml-[500px]'>Menu</h1>
<Image src={themebg} alt='' width={500} height={500} className='w-[100%] md:h-[250px] h-[100px] relative -z-10'/>
<div className='flex flex-row justify-center -mt-20 md:ml-40 '><Link href='/'>Home<i className='bx bx-chevron-right '></i>  </Link>
 <Link href='./../menu' className='text-white'> Menu</Link></div>
</div>
      
          <h1 className='text-2xl md:text-3xl md:mt-20 -mt-20 text-center text-green-800' id='myfont'>
            <i className='bx bx-coffee text-green-800 md:text-5xl text-2xl p-2 '></i>Starter Menu</h1>
         
          {/* Menu  grid 1 */}
<div className='grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 md:mt-20 mt-5 md:gap-20 md:ml-20 2xl:ml-60 2xl:gap-40 ml-2 mb-2'>

<Image src={menu1} alt='' width={500} height={500} className=' col-span-1 2xl:col-span-2 w-72 md:w-96 2xl:w-[800px] 2xl:h-[650px] ml-2'/>
       
        {/* menu item 1  */}
        <div className='grid col-span-2  grid-rows-4 mt-2 '>

     <div>
    <h1 className='hover:text-green-800 md:text-xl text-sm font-bold '> Alder Grilled Chinook Salmon 
    <span className='text-green-800 font-bold text-1xl md:ml-40 ml-10'>35$</span></h1>
    <hr className=' w-72 md:w-80 border border-gray-400 mb-2 mt-2'/>
    <p className='mt-2 mb-2 text-xs'>Tesseted French bread topped with myonese, cheddar</p>
    <p>560 CAL</p>
    </div>
    
    <div>
    <h1 className='hover:text-green-800 md:text-xl text-sm font-bold '> Alder Grilled Chinook Salmon 
    <span className='text-green-800 font-bold text-1xl md:ml-40 ml-10'>35$</span></h1>
    <hr className=' w-72 md:w-80 border border-gray-400 mb-2 mt-2'/>
    <p className='mt-2 mb-2 text-xs'>Tesseted French bread topped with myonese, cheddar</p>
    <p>560 CAL</p>
    </div>

    <div>
    <h1 className='hover:text-green-800 md:text-xl text-sm font-bold '> Alder Grilled Chinook Salmon 
    <span className='text-green-800 font-bold text-1xl md:ml-40 ml-10'>35$</span></h1>
    <hr className=' w-72 md:w-80 border border-gray-400 mb-2 mt-2'/>
    <p className='mt-2 mb-2 text-xs'>Tesseted French bread topped with myonese, cheddar</p>
    <p>560 CAL</p>
    </div>

    <div>
    <h1 className='hover:text-green-800 md:text-xl text-sm font-bold '> Alder Grilled Chinook Salmon 
    <span className='text-green-800 font-bold text-1xl md:ml-40 ml-10'>35$</span></h1>
    <hr className=' w-72 md:w-80 border border-gray-400 mb-2 mt-2'/>
    <p className='mt-2 mb-2 text-xs'>Tesseted French bread topped with myonese, cheddar</p>
    <p>560 CAL</p>
    </div>

    <div>
    <h1 className='hover:text-green-800 md:text-xl text-sm font-bold '> Alder Grilled Chinook Salmon 
    <span className='text-green-800 font-bold text-1xl md:ml-40 ml-10'>35$</span></h1>
    <hr className=' w-72 md:w-80 border border-gray-400 mb-2 mt-2'/>
    <p className='mt-2 mb-2 text-xs'>Tesseted French bread topped with myonese, cheddar</p>
    <p>560 CAL</p>
    </div>

            </div>    
            </div> 

        {/* main course  */}
            <h1 className='text-2xl md:text-3xl md:mt-20 mt-5 text-center'>
            <i className='bx bx-coffee text-green-800 md:text-5xl text-2xl p-2 '></i>Main Course</h1>
 
            {/* Menu  grid 2 */}
<div className='grid grid-cols-1 md:grid-cols-3 2xl:col-span-2 md:mt-10 mt-5 md:mr-20 mr-5 ml-2 mb-2 2xl:mb-20'>

   {/* menu items    2   */}
<div className='grid col-span-2 grid-rows-4 mt-2 md:ml-20 2xl:ml-60 '>

<div>
    <h1 className='hover:text-green-800 md:text-xl text-sm font-bold '> Alder Grilled Chinook Salmon 
    <span className='text-green-800 font-bold text-1xl md:ml-40 ml-10'>35$</span></h1>
    <hr className=' w-72 md:w-80 border border-gray-400 mb-2 mt-2'/>
    <p className='mt-2 mb-2 text-xs'>Tesseted French bread topped with myonese, cheddar</p>
    <p>560 CAL</p>
    </div>
    
    <div>
    <h1 className='hover:text-green-800 md:text-xl text-sm font-bold '> Alder Grilled Chinook Salmon 
    <span className='text-green-800 font-bold text-1xl md:ml-40 ml-10'>35$</span></h1>
    <hr className=' w-72 md:w-80 border border-gray-400 mb-2 mt-2'/>
    <p className='mt-2 mb-2 text-xs'>Tesseted French bread topped with myonese, cheddar</p>
    <p>560 CAL</p>
    </div>

    <div>
    <h1 className='hover:text-green-800 md:text-xl text-sm font-bold '> Alder Grilled Chinook Salmon 
    <span className='text-green-800 font-bold text-1xl md:ml-40 ml-10'>35$</span></h1>
    <hr className=' w-72 md:w-80 border border-gray-400 mb-2 mt-2'/>
    <p className='mt-2 mb-2 text-xs'>Tesseted French bread topped with myonese, cheddar</p>
    <p>560 CAL</p>
    </div>

    <div>
    <h1 className='hover:text-green-800 md:text-xl text-sm font-bold '> Alder Grilled Chinook Salmon 
    <span className='text-green-800 font-bold text-1xl md:ml-40 ml-10'>35$</span></h1>
    <hr className=' w-72 md:w-80 border border-gray-400 mb-2 mt-2'/>
    <p className='mt-2 mb-2 text-xs'>Tesseted French bread topped with myonese, cheddar</p>
    <p>560 CAL</p>
    </div>

    <div>
    <h1 className='hover:text-green-800 md:text-xl text-sm font-bold '> Alder Grilled Chinook Salmon 
    <span className='text-green-800 font-bold text-1xl md:ml-40 ml-10'>35$</span></h1>
    <hr className=' w-72 md:w-80 border border-gray-400 mb-2 mt-2'/>
    <p className='mt-2 mb-2 text-xs'>Tesseted French bread topped with myonese, cheddar</p>
    <p>560 CAL</p>
    </div>
            </div> 

<Image src={menu2} alt='' width={500} height={500} className='grid col-span-1 w-72 md:w-96 ml-2 2xl:w-[800px] 2xl:h-[650px] 2xl:mr-80'/>

            </div> 

 {/* center theme  */}
<div className='bg-black mt-10  w-72 md:w-full md:h-[450px] lg:h-[250px] lg:w-[1200px] xl:w-[1800px] 2xl:w-[2500px] ml-2 md:ml-10 '>
<Image src={choose} alt='' width={500} height={500} className='w-72 md:w-full lg:w-[1200px] xl:w-[1800px] 2xl:w-[2500px] md:h-[450px] lg:h-[250px] h-[400px] opacity-20'/>
    
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-20 text-white absolute md:ml-72 md:-mt-60 lg:-mt-44 -mt-96 ml-28 2xl:ml-[1000px]'>
     <div> 
        <ChefHat className='text-green-600 font-extrabold'/>
        <h1 className='text-2xl -ml-2'> 420</h1>
        <p className='-ml-10'><b>professional chef</b></p>
     </div>

     <div> 
        <CupSoda className='text-green-600 font-extrabold'/>
        <h1 className='text-2xl -ml-2'> 420</h1>
        <p className='-ml-10'><b>Items of Food</b></p>
     </div>

     <div> 
        <UtensilsCrossed className='text-green-600 font-extrabold'/>
        <h1 className='text-2xl -ml-2'> 20+</h1>
        <p className='-ml-10'><b>Years of Experienced</b></p>
     </div>

     <div> 
        <Pizza className='text-green-600 font-extrabold'/>
        <h1 className='text-2xl -ml-2'> 420</h1>
        <p className='-ml-10'><b>Happy Customers</b></p>
     </div>
    
    </div>
</div>

           {/* Menu  grid 3 */}
           <div className='grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 md:mt-20 mt-5 md:gap-20 md:ml-20 2xl:ml-60 2xl:gap-40 ml-2 mb-2'>

<Image src={menu3} alt='' width={500} height={500} className=' col-span-1 2xl:col-span-2 w-72 md:w-96 2xl:w-[800px] 2xl:h-[650px] ml-2'/>
       
        {/* menu item 1  */}
        <div className='grid col-span-2  grid-rows-4 mt-2 '>

     <div>
    <h1 className='hover:text-green-800 md:text-xl text-sm font-bold '> Alder Grilled Chinook Salmon 
    <span className='text-green-800 font-bold text-1xl md:ml-40 ml-10'>35$</span></h1>
    <hr className=' w-72 md:w-80 border border-gray-400 mb-2 mt-2'/>
    <p className='mt-2 mb-2 text-xs'>Tesseted French bread topped with myonese, cheddar</p>
    <p>560 CAL</p>
    </div>
    
    <div>
    <h1 className='hover:text-green-800 md:text-xl text-sm font-bold '> Alder Grilled Chinook Salmon 
    <span className='text-green-800 font-bold text-1xl md:ml-40 ml-10'>35$</span></h1>
    <hr className=' w-72 md:w-80 border border-gray-400 mb-2 mt-2'/>
    <p className='mt-2 mb-2 text-xs'>Tesseted French bread topped with myonese, cheddar</p>
    <p>560 CAL</p>
    </div>

    <div>
    <h1 className='hover:text-green-800 md:text-xl text-sm font-bold '> Alder Grilled Chinook Salmon 
    <span className='text-green-800 font-bold text-1xl md:ml-40 ml-10'>35$</span></h1>
    <hr className=' w-72 md:w-80 border border-gray-400 mb-2 mt-2'/>
    <p className='mt-2 mb-2 text-xs'>Tesseted French bread topped with myonese, cheddar</p>
    <p>560 CAL</p>
    </div>

    <div>
    <h1 className='hover:text-green-800 md:text-xl text-sm font-bold '> Alder Grilled Chinook Salmon 
    <span className='text-green-800 font-bold text-1xl md:ml-40 ml-10'>35$</span></h1>
    <hr className=' w-72 md:w-80 border border-gray-400 mb-2 mt-2'/>
    <p className='mt-2 mb-2 text-xs'>Tesseted French bread topped with myonese, cheddar</p>
    <p>560 CAL</p>
    </div>

    <div>
    <h1 className='hover:text-green-800 md:text-xl text-sm font-bold '> Alder Grilled Chinook Salmon 
    <span className='text-green-800 font-bold text-1xl md:ml-40 ml-10'>35$</span></h1>
    <hr className=' w-72 md:w-80 border border-gray-400 mb-2 mt-2'/>
    <p className='mt-2 mb-2 text-xs'>Tesseted French bread topped with myonese, cheddar</p>
    <p>560 CAL</p>
    </div>

            </div>    
            </div> 

            {/* Menu  grid 4 */}
            <div className='grid grid-cols-1 md:grid-cols-3 2xl:col-span-2 md:mt-10 mt-5 md:mr-20 mr-5 ml-2 mb-2  2xl:mb-20'>

{/* menu items    4   */}
<div className='grid col-span-2 grid-rows-4 mt-2 md:ml-20 2xl:ml-60 '>

<div>
 <h1 className='hover:text-green-800 md:text-xl text-sm font-bold '> Alder Grilled Chinook Salmon 
 <span className='text-green-800 font-bold text-1xl md:ml-40 ml-10'>35$</span></h1>
 <hr className=' w-72 md:w-80 border border-gray-400 mb-2 mt-2'/>
 <p className='mt-2 mb-2 text-xs'>Tesseted French bread topped with myonese, cheddar</p>
 <p>560 CAL</p>
 </div>
 
 <div>
 <h1 className='hover:text-green-800 md:text-xl text-sm font-bold '> Alder Grilled Chinook Salmon 
 <span className='text-green-800 font-bold text-1xl md:ml-40 ml-10'>35$</span></h1>
 <hr className=' w-72 md:w-80 border border-gray-400 mb-2 mt-2'/>
 <p className='mt-2 mb-2 text-xs'>Tesseted French bread topped with myonese, cheddar</p>
 <p>560 CAL</p>
 </div>

 <div>
 <h1 className='hover:text-green-800 md:text-xl text-sm font-bold '> Alder Grilled Chinook Salmon 
 <span className='text-green-800 font-bold text-1xl md:ml-40 ml-10'>35$</span></h1>
 <hr className=' w-72 md:w-80 border border-gray-400 mb-2 mt-2'/>
 <p className='mt-2 mb-2 text-xs'>Tesseted French bread topped with myonese, cheddar</p>
 <p>560 CAL</p>
 </div>

 <div>
 <h1 className='hover:text-green-800 md:text-xl text-sm font-bold '> Alder Grilled Chinook Salmon 
 <span className='text-green-800 font-bold text-1xl md:ml-40 ml-10'>35$</span></h1>
 <hr className=' w-72 md:w-80 border border-gray-400 mb-2 mt-2'/>
 <p className='mt-2 mb-2 text-xs'>Tesseted French bread topped with myonese, cheddar</p>
 <p>560 CAL</p>
 </div>

 <div>
 <h1 className='hover:text-green-800 md:text-xl text-sm font-bold '> Alder Grilled Chinook Salmon 
 <span className='text-green-800 font-bold text-1xl md:ml-40 ml-10'>35$</span></h1>
 <hr className=' w-72 md:w-80 border border-gray-400 mb-2 mt-2'/>
 <p className='mt-2 mb-2 text-xs'>Tesseted French bread topped with myonese, cheddar</p>
 <p>560 CAL</p>
 </div>
         </div> 

<Image src={menu1} alt='' width={500} height={500} className='grid col-span-1 w-72 md:w-96 ml-2 2xl:w-[800px] 2xl:h-[650px] 2xl:mr-80'/>

         </div>  

            
    </div>
  )
}
