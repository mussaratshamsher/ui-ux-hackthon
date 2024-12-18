

import React from 'react'
import { Button } from '../ui/button'

export default function FoodMenu() {
  return (
    <div >
        <div className='h-auto md:mt-5'>
        <h1 className='md:text-center md:text-4xl text-1xl font-bold md:mt-20 mt-5'>Our Food Menu</h1>
        <p className=' mb:mt-5 mt-2 mb-5 p-2 md:md:text-center w-90'> Contrary to popular belief, Lorem Ipsum is not simply random text.It has roots 
            in a piece of classical Latin literature from 45 BC</p>
             
             <ul className='flex flex-row md:gap-5 gap-2 md:justify-center md:items-center text-black ml-3 text-xs md:font-medium'>
                <li className='hover:text-green-800 hover:underline'>Breakfast</li>
                <li className='hover:text-green-800 hover:underline'>Lunch</li>
                <li className='hover:text-green-800 hover:underline'>Dinner</li>
                <li className='hover:text-green-800 hover:underline'>Dessert</li>
                <li className='hover:text-green-800 hover:underline'>Drink</li>
                <li className='hover:text-green-800 hover:underline'>Snack</li>
              
             </ul>
             <hr className='w-[200px] md:w-[500px] lg:w-[900px] 2xl:w-[2300px] ml-4 mr-3 md:ml-28 md:mr-28 border border-gray-500 mb-10'/>

{/* Menu List  */}
<div className=' grid grid-cols-1 md:grid-cols-2 md:grid-rows-4 text-black md:mt-10 mt-4 ml-2 md:ml-5 md:mr-5 md:p-10 2xl:p-0 2xl:pl-96 2xl:pr-60'>

<div className='menu1'>
<h1 className='hover:text-green-800 text-xl font-bold'> Alder Grilled Chinook Salmon 
    <span className='text-green-800 font-bold text-1xl md:ml-40 ml-10'>35$</span></h1>
  <hr className='md:w-96 w-40 border border-gray-400 mb-2 mt-2'/>
<p className='mt-2 mb-2 text-xs'>Tesseted French bread topped with myonese, cheddar</p>
<p>560 CAL</p>
</div>

 
<div className='menu2'>
<h1 className='hover:text-green-800 text-xl font-bold'> Alder Grilled Chinook Salmon 
    <span className='text-green-800 font-bold text-1xl md:ml-40 ml-10'>35$</span></h1>
  <hr className='md:w-96 w-40 border border-gray-400 mb-2 mt-2'/>
<p className='mt-2 mb-2 text-xs'>Tesseted French bread topped with myonese, cheddar</p>
<p>560 CAL</p>
</div>


<div className='menu3'>
<h1 className='hover:text-green-800 text-xl font-bold'> Alder Grilled Chinook Salmon 
    <span className='text-green-800 font-bold text-1xl md:ml-40 ml-10'>35$</span></h1>
  <hr className='md:w-96 w-40 border border-gray-400 mb-2 mt-2'/>
<p className='mt-2 mb-2 text-xs'>Tesseted French bread topped with myonese, cheddar</p>
<p>560 CAL</p>
</div>


<div className='menu4'>
<h1 className='hover:text-green-800 text-xl font-bold'> Alder Grilled Chinook Salmon 
    <span className='text-green-800 font-bold text-1xl md:ml-40 ml-10'>35$</span></h1>
  <hr className='md:w-96 w-40 border border-gray-400 mb-2 mt-2'/>
<p className='mt-2 mb-2 text-xs'>Tesseted French bread topped with myonese, cheddar</p>
<p>560 CAL</p>
</div>


<div className='menu5'>
<h1 className='hover:text-green-800 text-xl font-bold'> Alder Grilled Chinook Salmon 
    <span className='text-green-800 font-bold text-1xl md:ml-40 ml-10'>35$</span></h1>
  <hr className='md:w-96 w-40 border border-gray-400 mb-2 mt-2'/>
<p className='mt-2 mb-2 text-xs'>Tesseted French bread topped with myonese, cheddar</p>
<p>560 CAL</p>
</div>


<div className='menu6'>
<h1 className='hover:text-green-800 text-xl font-bold'> Alder Grilled Chinook Salmon 
    <span className='text-green-800 font-bold text-1xl md:ml-40 ml-10'>35$</span></h1>
  <hr className='md:w-96 w-40 border border-gray-400 mb-2 mt-2'/>
<p className='mt-2 mb-2 text-xs'>Tesseted French bread topped with myonese, cheddar</p>
<p>560 CAL</p>
</div>


<div className='menu7'>
<h1 className='hover:text-green-800 text-xl font-bold'> Alder Grilled Chinook Salmon 
    <span className='text-green-800 font-bold text-1xl md:ml-40 ml-10'>35$</span></h1>
  <hr className='md:w-96 w-40 border border-gray-400 mb-2 mt-2'/>
<p className='mt-2 mb-2 text-xs'>Tesseted French bread topped with myonese, cheddar</p>
<p>560 CAL</p>
</div>


<div className='menu8'>
<h1 className='hover:text-green-800 text-xl font-bold'> Alder Grilled Chinook Salmon 
    <span className='text-green-800 font-bold text-1xl md:ml-40 ml-10'>35$</span></h1>
  <hr className='md:w-96 w-40  border border-gray-400 mb-2 mt-2'/>
<p className='mt-2 mb-2 text-xs'>Tesseted French bread topped with myonese, cheddar</p>
<p>560 CAL</p>
</div>






             </div>

             <Button variant={'ghost'} className='md:ml-[500px] ml-10'>View more</Button>




        </div>

    </div>
  )
}
