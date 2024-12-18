import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import themebg from "../../../public/images/themebg.png"
import member from "../../../public/images/member.png"
import chef1 from "../../../public/images/chef1.png"
import chef2 from "../../../public/images/chef2.png"
import chef3 from "../../../public/images/chef3.png"
import chef4 from "../../../public/images/chef4.png"
import chef5 from "../../../public/images/chef5.png"
import chef6 from "../../../public/images/chef6.png"
import chef7 from "../../../public/images/chef7.png"



export default function Chefs() {
  return (
    <div>
{/* landing page */}

<div className=' h-[200px] text-green-500' >
<h1 className='absolute mt-10 md:mt-20 text-2xl md:text-5xl z- ml-5 md:ml-[500px]'>Our Chef</h1>
<Image src={themebg} alt='' width={500} height={500} className='w-full md:h-[250px] h-[100px] relative -z-10'/>
<div className='flex flex-row justify-center -mt-20 md:ml-40 '><Link href='/'>Home<i className='bx bx-chevron-right '></i>  </Link>
 <Link href='./../chefs' className='text-white'> Chef </Link></div>
</div>

{/* title  */}
<h2 id='myfont' className='text-green-800 mt-10 md:mt-20 ml-5 text-center 2xl:mt-40'> Meet Our Team </h2>

{/* chefs  */}

<div className='grid grid-rows-1 md:grid-cols-4 md:grid-rows-3 2xl:grid-cols-6 md:p-10 2xl:mt-20 2xl:-mb-80 ml-5 md:gap-5 gap-2 mt-3 md:mt-5 '>

  {/* row 1 */}

<div className=' transition-all ease-linear duration-300 hover:scale-90'>
    <Image src={member} alt="" width={500} height={500} 
    className='md:w-80 md:h-80 w-64 h-64  data-aos="zoom-in"'/>
    <h1 className='text-center font-bold text-xl md:mt-5 mt-2 '>Moon Henry</h1>
    <p className='text-center'>Founder</p>
    </div>

    <div className=' transition-all ease-linear duration-300 hover:scale-90'>
    <Image src={chef1} alt="" width={500} height={500} className='md:w-80 md:h-80 w-64 h-  data-aos="zoom-in"'/>
    <h1 className='text-center font-bold text-xl md:mt-5 mt-2'>Moon Henry</h1>
    <p className='text-center'>Founder</p>
    </div>

    <div className='transition-all ease-linear duration-300 hover:scale-90'>
    <Image src={chef2} alt="" width={500} height={500} className='md:w-80 md:h-80 w-64 h-64 '/>
    <h1 className='text-center font-bold text-xl md:mt-5 mt-2'>Moon Henry</h1>
    <p className='text-center'>Founder</p>
    </div>

    <div className='transition-all ease-linear duration-300 hover:scale-90'>
    <Image src={chef3} alt="" width={500} height={500} className='md:w-80 md:h-80 w-64 h-64 '/>
    <h1 className='text-center font-bold text-xl md:mt-5 mt-2'>Moon Henry</h1>
    <p className='text-center'>Founder</p>
     </div>

 {/* row 2 */}

    <div className='transition-all ease-linear duration-300 hover:scale-90'>
    <Image src={chef4} alt="" width={500} height={500} className='md:w-80 md:h-80 w-64 h-64'/>
    <h1 className='text-center font-bold text-xl md:mt-5 mt-2'>Moon Henry</h1>
    <p className='text-center'>Founder</p>
    </div>

    <div className='transition-all ease-linear duration-300 hover:scale-90'>
    <Image src={chef5} alt="" width={500} height={500} className='md:w-80 md:h-80 w-64 h-64'/>
    <h1 className='text-center font-bold text-xl md:mt-5 mt-2'>Moon Henry</h1>
    <p className='text-center'>Founder</p>
    </div>

    <div className='transition-all ease-linear duration-300 hover:scale-90'>
    <Image src={chef6} alt="" width={500} height={500} className='md:w-80 md:h-80 w-64 h-64'/>
    <h1 className='text-center font-bold text-xl md:mt-5 mt-2'>Moon Henry</h1>
    <p className='text-center'>Founder</p>
    </div>

    <div className='transition-all ease-linear duration-300 hover:scale-90'>
    <Image src={chef7} alt="" width={500} height={500} className='md:w-80 md:h-80 w-64 h-64'/>
    <h1 className='text-center font-bold text-xl md:mt-5 mt-2'>Moon Henry</h1>
    <p className='text-center'>Founder</p>
    </div>

{/* row 3 */}

    <div className='transition-all ease-linear duration-300 hover:scale-90'>
    <Image src={chef1} alt="" width={500} height={500} className='md:w-80 md:h-80 w-64 h-64'/>
    <h1 className='text-center font-bold text-xl md:mt-5 mt-2'>Moon Henry</h1>
    <p className='text-center'>Founder</p>
    </div>

    <div className='transition-all ease-linear duration-300 hover:scale-90'>
    <Image src={member} alt="" width={500} height={500} className='md:w-80 md:h-80 w-64 h-64'/>
    <h1 className='text-center font-bold text-xl md:mt-5 mt-2'>Moon Henry</h1>
    <p className='text-center'>Founder</p>
    </div>

    <div className='transition-all ease-linear duration-300 hover:scale-90'>
    <Image src={chef3} alt="" width={500} height={500} className='md:w-80 md:h-80 w-64 h-64'/>
    <h1 className='text-center font-bold text-xl md:mt-5 mt-2'>Moon Henry</h1>
    <p className='text-center'>Founder</p>
    </div>

    <div className='transition-all ease-linear duration-300 hover:scale-90'>
    <Image src={chef4} alt="" width={500} height={500} className='md:w-80 md:h-80 w-64 h-64'/>
    <h1 className='text-center font-bold text-xl md:mt-5 mt-2'>Moon Henry</h1>
    <p className='text-center'>Founder</p>
    </div>

</div>
    </div>
  )
}
