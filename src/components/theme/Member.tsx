import React from 'react'



import abt1 from '../../../public/images/abt1.png'
import member from '../../../public/images/member.png'

import Image from 'next/image'



export default function Member() {
  return (
   <div className='w-full h-auto mb-10 '>
    <div className='bg-green-500 md:h-[350px] h-[100px] '>
    <Image src={abt1} alt="" width={500} height={500} className='w-80 h-80 md:ml-[450px]  opacity-20 '/>
    </div>
    
    <div className='grid md:grid-cols-4 grid-cols-1 p-10 md:gap-5 gap-2 -mt-28 z-1'>
    
    {/* member 1 */}
    <div className='bg-slate-100'>
    <Image src={member} alt="" width={500} height={500} className='md:w-80 md:h-80 w-72 h-64'/>
    
    <div className='flex flex-col align-top -mt-56 md:ml-60 ml-40'>
    <i className='bx bxl-facebook text-black hover:bg-green-600 hover:text-white p-3 mt-1'></i>
    <i className='bx bxl-instagram text-black hover:bg-green-600 hover:text-white p-3 mt-1'></i>
    <i className='bx bxl-twitter text-black hover:bg-green-600 hover:text-white p-3 mt-1'></i>
    <i className='bx bxl-youtube text-black hover:bg-green-600 hover:text-white p-3 mt-1'></i>
    </div>
    
    <h1 className='text-center font-bold text-xl mt-16'>Moon Henry</h1>
    <p className='text-center'>Founder</p>
    </div>
    
    {/* member 4 */}
    <div className='bg-slate-100'>
    <Image src={member} alt="" width={500} height={500} className='md:w-80 md:h-80 w-72 h-64'/>
    
    <div className='flex flex-col align-top  -mt-60 md:ml-60 ml-40'>
    <i className='bx bxl-facebook text-black bg-white hover:bg-green-600 hover:text-white md:p-4 p-2'></i>
    <i className='bx bxl-instagram text-black bg-white hover:bg-green-600 hover:text-white md:p-4 p-2'></i>
    <i className='bx bxl-twitter text-black bg-white hover:bg-green-600 hover:text-white md:p-4 p-2'></i>
    <i className='bx bxl-youtube text-black bg-white hover:bg-green-600 hover:text-white md:p-4 p-2'></i>
    </div>
    
    <h1 className='text-center font-bold text-xl mt-16'>Moon Henry</h1>
    <p className='text-center '>Founder</p>
    </div>
    
    {/* member 3 */}
    <div className='bg-slate-100'>
    <Image src={member} alt="" width={500} height={500} className='md:w-80 md:h-80 w-72 h-64' />
    
    <div className='flex flex-col align-top -mt-60 md:ml-60 ml-40'>
    <i className='bx bxl-facebook text-black hover:bg-green-600 hover:text-white p-4'></i>
    <i className='bx bxl-instagram text-black hover:bg-green-600 hover:text-white p-4'></i>
    <i className='bx bxl-twitter text-black hover:bg-green-600 hover:text-white p-4'></i>
    <i className='bx bxl-youtube text-black hover:bg-green-600 hover:text-white p-4'></i>
    </div>
    
    <h1 className='text-center font-bold text-xl mt-16'>Moon Henry</h1>
    <p className='text-center'>Founder</p>
    </div>
    
    {/* member 4 */}
    <div className='bg-slate-100'>
    <Image src={member} alt="" width={500} height={500} className='md:w-80 md:h-80 w-72 h-64'/>
    
    <div className='flex flex-col align-top  -mt-60 md:ml-60 ml-40'>
    <i className='bx bxl-facebook text-black hover:bg-green-600 hover:text-white p-4'></i>
    <i className='bx bxl-instagram text-black hover:bg-green-600 hover:text-white p-4'></i>
    <i className='bx bxl-twitter text-black hover:bg-green-600 hover:text-white p-4'></i>
    <i className='bx bxl-youtube text-black hover:bg-green-600 hover:text-white p-4'></i>
    </div>
    
    <h1 className='text-center font-bold text-xl mt-16'>Moon Henry</h1>
    <p className='text-center'>Founder</p>
    </div>


</div>
    </div>
  )
}
