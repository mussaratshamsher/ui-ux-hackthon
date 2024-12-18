import Image from 'next/image'
import React from 'react'
import cake from '../../../public/images/cake.png'

export default function FoodCategory() {
  return (
    <div className='mt-5'>
<h1 className='text-1xl md:text-3xl font-bold text-center p-2'>Food Category</h1>
<p className='text-center mb-4 mt-2 p-2'>Lorem Ipsum is simply dummy text of dummy text of <br />the printing and type setting industry.</p>

<div className='grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-5 lg:gap-2 2xl:gap-5 lg:ml-0 ml-4'>

<div className='animate_animated animate__bounceIn animate__delay-5s 5s text-center'>
    <Image src={cake} alt='' width={100} height={100} className='md:w-[270px] md:h-[300px] 2xl:w-[400px] 2xl:h-[400px] w-[200px] h-[170px] ml-5' />
    <h1 className='text-1xl md:text-2xl font-bold text-center 2xl:-ml-40 mt-3'>Molto Tagiliatelle</h1>
<p className='text-center mb-4 mt-2 2xl:-ml-32'>20 Item</p>
</div>

<div className='animate_animated animate__bounceIn animate__delay-5s 5s '>
    <Image src={cake} alt='' width={100} height={100} className='md:w-[270px] md:h-[300px] 2xl:w-[400px] 2xl:h-[400px] w-[200px] h-[170px] ml-5' />
    <h1 className='text-1xl md:text-2xl font-bold text-center 2xl:-ml-40 mt-3'>Molto Tagiliatelle</h1>
<p className='text-center mb-4 mt-2 2xl:-ml-32'>20 Item</p>
</div>

<div className='animate_animated animate__bounceIn animate__delay-5s 5s '>
    <Image src={cake} alt='' width={100} height={100} className='md:w-[270px] md:h-[300px] 2xl:w-[400px] 2xl:h-[400px] w-[200px] h-[170px] ml-5' />
    <h1 className='text-1xl md:text-2xl font-bold text-center 2xl:-ml-40 mt-3'>Molto Tagiliatelle</h1>
<p className='text-center mb-4 mt-2 2xl:-ml-32'>20 Item</p>
</div>

<div className='animate_animated animate__bounceIn animate__delay-5s 5s '>
    <Image src={cake} alt='' width={100} height={100} className='md:w-[270px] md:h-[300px] 2xl:w-[400px] 2xl:h-[400px] w-[200px] h-[170px] ml-5' />
    <h1 className='text-1xl md:text-2xl font-bold text-center 2xl:-ml-40 mt-3'>Molto Tagiliatelle</h1>
<p className='text-center mb-4 mt-2 2xl:-ml-32'>20 Item</p>
</div>

</div>

    </div>
  )
}
