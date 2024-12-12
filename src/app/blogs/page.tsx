
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import themebg from '../../../public/images/themebg.png'
import blog1 from '../../../public/images/blog1.png'
import blog2 from '../../../public/images/blog2.png'
import blog3 from '../../../public/images/blog3.png'
import blog4 from '../../../public/images/blog4.png'
import img from '../../../public/images/img.png'
import blogf1 from '../../../public/images/blogf1.png'
import blogf2 from '../../../public/images/blogf2.png'
import blogf3 from '../../../public/images/blogf3.png'
import blogf4 from '../../../public/images/blogf4.png'
import blogm1 from '../../../public/images/blogm1.png'
import blogm2 from '../../../public/images/blogm2.png'
import f1 from '../../../public/images/f1.png'
import f2 from '../../../public/images/f2.png'
import f3 from '../../../public/images/f3.png'
import f4 from '../../../public/images/f4.png'
import f5 from '../../../public/images/f5.png'
import f6 from '../../../public/images/f6.png'




import { Button } from '@/components/ui/button'
import CommentSection from '@/components/theme/CommentSection'



export default function blogs() {
  return (
    <div>

{/* landing page */}
<div className=' h-[200px] text-white' >
<h1 className='absolute mt-10 md:mt-20 text-2xl md:text-5xl md:ml-[500px] text-white'>Blogs List</h1>
<Image src={themebg} alt='' width={500} height={500} className='w-full md:h-[250px] h-[100px] relative -z-10'/>
<div className='flex flex-row justify-center -mt-20 md:ml-40 '><Link href='/'>Home<i className='bx bx-chevron-right '></i>  </Link>
 <Link href='./../blogs' className='text-green-700'> Blogs</Link></div>
</div>
<h1 className='text-center text-1xl text-bold md:text-5xl -mt-24 md:mt-24 text-green-800 font-bold ' id='myfont'>Read Blogs</h1>

{/* blog layout  */}

<div className='grid grid-cols-2 md:grid-cols-3  md:ml-40 md:mr-40 px-2  md:py-10 '>  
  {/* grid 1 */}  
  
  <div className='col-span-1 md:col-span-2 md:gap-5 gap-1 '>  
    {/* Blog 1 */}  
    <div className='mb-2'>  
      <Image src={blog1} alt="Chocolate Truffle Cake" width={500} height={500} 
      className='w-36 h-20 md:w-[500px] md:h-[300px] scale-100 transition-all duration-300 hover:scale-90'/>  
      <h2 className='mt-2 text-xs'>  
        <i className='bx bx-box text-green-700'></i>Jan 14, 2022 /   
        <i className='bx bx-chat text-green-700'></i> 3 /   
        <i className='bx bx-user-plus text-green-700'></i> Admin  </h2>  
      <h1 className='font-bold text-sm  md:text-lg mt-2'>Chocolate Truffle Cake With Honey Flavour</h1>  
      <p className='mt-2 text-xs md:text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>  
     
      <div className='flex flex-col md:flex-row md:gap-5 md:p-2 '><Button variant='ghost' className='text-green-700 md:w-40 md:h-10 w-24 h-6  '>  
        Read More <i className='bx bx-right-top-arrow-circle'></i>  
      </Button>    
      <CommentSection /> </div>
       
    </div>  
    
    {/* Blog 2 */}  
    <div className='mb-2'>  
      <Image src={blog2} alt="Chocolate Truffle Cake" width={500} height={500} 
      className='w-36 h-20 md:w-[500px] md:h-[300px] scale-100 transition-all duration-300 hover:scale-90'/>  
      <h2 className='mt-2 text-xs'>  
        <i className='bx bx-box text-green-700'></i>Jan 14, 2022 /   
        <i className='bx bx-chat text-green-700'></i> 3 /   
        <i className='bx bx-user-plus text-green-700'></i> Admin  </h2>  
      <h1 className='font-bold text-sm  md:text-lg mt-2'>Chocolate Truffle Cake With Honey Flavour</h1>  
      <p className='mt-2 text-xs md:text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>  
     
      <div className='flex flex-col md:flex-row md:gap-5 md:p-2 '><Button variant='ghost' className='text-green-700 md:w-40 md:h-10 w-24 h-6  '>  
        Read More <i className='bx bx-right-top-arrow-circle'></i>  
      </Button>    
      <CommentSection /> </div>
       
    </div> 

    {/* Blog 3 */}  
    <div className='mb-2'>  
      <Image src={blog3} alt="Chocolate Truffle Cake" width={500} height={500} 
      className='w-36 h-20 md:w-[500px] md:h-[300px] scale-100 transition-all duration-300 hover:scale-90'/>  
      <h2 className='mt-2 text-xs'>  
        <i className='bx bx-box text-green-700'></i>Jan 14, 2022 /   
        <i className='bx bx-chat text-green-700'></i> 3 /   
        <i className='bx bx-user-plus text-green-700'></i> Admin  </h2>  
      <h1 className='font-bold text-sm  md:text-lg mt-2'>Chocolate Truffle Cake With Honey Flavour</h1>  
      <p className='mt-2 text-xs md:text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>  
     
      <div className='flex flex-col md:flex-row md:gap-5 md:p-2 '><Button variant='ghost' className='text-green-700 md:w-40 md:h-10 w-24 h-6  '>  
        Read More <i className='bx bx-right-top-arrow-circle'></i>  
      </Button>    
      <CommentSection /> </div>
       
    </div> 

    {/* Blog 4 */}  
    <div className='mb-2'>  
      <Image src={blog4} alt="Chocolate Truffle Cake" width={500} height={500} 
      className='w-36 h-20 md:w-[500px] md:h-[300px] scale-100 transition-all duration-300 hover:scale-90'/>  
      <h2 className='mt-2 text-xs'>  
        <i className='bx bx-box text-green-700'></i>Jan 14, 2022 /   
        <i className='bx bx-chat text-green-700'></i> 3 /   
        <i className='bx bx-user-plus text-green-700'></i> Admin  </h2>  
      <h1 className='font-bold text-sm  md:text-lg mt-2'>Chocolate Truffle Cake With Honey Flavour</h1>  
      <p className='mt-2 text-xs md:text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>  
     
      <div className='flex flex-col md:flex-row md:gap-5 md:p-2 '><Button variant='ghost' className='text-green-700 md:w-40 md:h-10 w-24 h-6  '>  
        Read More <i className='bx bx-right-top-arrow-circle'></i>  
      </Button>    
      <CommentSection /> </div>
       
    </div>  

</div>

  {/* grid 2 */}  
  <div className=' h-fit col-span-1 border shadow-md md:p-5 p-1'>  
{/* search bar  */}
    <h1 className='flex'><input type="text" placeholder='Search Product' className='bg-green-200 w-24 md:w-60  text-xs md:text-sm md:p-3 p-1'/>
      <i className='bx bx-search  bg-green-800 text-white p-2 md:p-4 '></i></h1> 
{/* User bloger  */}
      <div className='flex flex-col justify-center items-center border shadow-sm p-2 mt-2 md:mt-10 text-xs md:text-sm  text-gray-500'>
        <Image src={img} alt='' width={500} height={500} className='w-8 h-8 md:w-10 md:h-10'/>
        <h1 className='text-black '><b>Prince Miyako</b></h1>
        <p >Blogger</p>
        <p className='text-green-800'>
        <i className='bx bxs-star'></i><i className='bx bxs-star'></i>
        <i className='bx bxs-star'></i><i className='bx bxs-star'></i>
        <i className='bx bxs-star'></i>(1k Review) </p>
        <p className='md:indent-5'>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en 
          page avant impression. </p>
          <p className='text-black md:mt-5 mt-2'><i className='bx bxl-facebook hover:text-green-700'></i><i className='bx bxl-twitter hover:text-green-700'></i>
          <i className='bx bxl-instagram hover:text-green-700'></i><i className='bx bxl-pinterest hover:text-green-700'></i></p>
      </div> 
 {/* Recent post  */}
    <div className='flex flex-col justify-center items-center border shadow-sm p-1 md:p-2 mt-2 md:mt-7 text-sm text-gray-500'>
    <h1 className='font-bold mt-1 md:mt-2 mb-2 md:mb-3'>Recent Post</h1>
    {/* product 1  */}
    <div className='flex flex-row gap-1 md:gap-3'>
<Image src={blogf1} alt='' width={500} height={500} className='w-7 h-7 md:w-20'/>
          <div className=' '>
           <p>June22, 2020</p> 
          <p className='text-gray-700 mt-2'>Lorem ipsum dolor sit cing elit, sed do.</p>
          <hr className='w-20 md:w-40'/>
           </div> 
          </div>
{/* product  2 */}
<div className='flex flex-row gap-1 md:gap-3 mt-2'>
<Image src={blogf2} alt='' width={500} height={500} className='w-7 h-7 md:w-20 '/>
          <div className=' '>
           <p>June22, 2020</p> 
          <p className='text-gray-700 mt-2'>Lorem ipsum dolor sit cing elit, sed do.</p>
          <hr className='w-20 md:w-40'/>
            </div> 
           </div>
{/* product  3 */}
<div className='flex flex-row gap-1 md:gap-3 mt-2'>
<Image src={blogf3} alt='' width={500} height={500} className='w-7 h-7 md:w-20 '/>
          <div className=' '>
           <p>June22, 2020</p> 
          <p className='text-gray-700 mt-2'>Lorem ipsum dolor sit cing elit, sed do.</p>
          <hr className='w-20 md:w-40'/>
            </div> 
           </div>
{/* product  4 */}
<div className='flex flex-row gap-1 md:gap-3 mt-2'>
<Image src={blogf4} alt='' width={500} height={500} className='w-7 h-7 md:w-20 '/>
          <div className=' '>
           <p>June22, 2020</p> 
          <p className='text-gray-700 mt-2'>Lorem ipsum dolor sit cing elit, sed do.</p>
          <hr className='w-20 md:w-40'/>
            </div> 
           </div>

 </div>

{/* Filter By Menu  */}
<div className='border shadow-sm p-2 mt-2 md:mt-7 text-xs md:text-sm font-bold'>
<h1 className='mm:mt-2 md:mb-5 mb-1'>Filter By Menu</h1>
{/* menu 1  */}
<div className='grid grid-cols-4 mt-1'>
  <Image src={blogm1} alt='' width={500} height={500} className='w-10 h-10'/>
  <h1 className='col-span-2 '> Chicken Fry</h1>
  <h2 className='font-thin '>26</h2>
</div>
{/* menu 2  */}
<div className='grid grid-cols-4 mt-1'>
  <Image src={blogm2} alt='' width={500} height={500} className='w-10 h-10'/>
  <h1 className='col-span-2'> Pizza</h1>
  <h2 className='font-thin'>26</h2>
</div>
{/* menu 3  */}
<div className='grid grid-cols-4 mt-1'>
  <Image src={blogm1} alt='' width={500} height={500} className='w-10 h-10'/>
  <h1 className='col-span-2'> Chicken Fry</h1>
  <h2 className='font-thin'>26</h2>
</div>
{/* menu 4  */}
<div className='grid grid-cols-4 mt-1'>
  <Image src={blogm2} alt='' width={500} height={500} className='w-10 h-10'/>
  <h1 className='col-span-2'> Pizza</h1>
  <h2 className='font-thin'>26</h2>
</div>

</div>

{/* popular tags  */}
<div className='border shadow-sm p-2 mt-2 md:mt-7 text-xs md:text-sm '>

<h1 className='font-bold md:mt-2 md:mb-3 mb-2'> Popular Tags</h1>

<div className='grid grid-cols-2 md:grid-cols-3 gap-1'>
<p className='border shadow-sm p-1 md:p-2 hover:bg-green-200'>Sandwich </p>
<p className='border shadow-sm p-1 md:p-2 hover:bg-green-200'>Tikka </p>
<p className='border shadow-sm p-1 md:p-2 hover:bg-green-200'> Bbq</p>
<p className='border shadow-sm p-1 md:p-2 hover:bg-green-200'>Reaturant </p>
<p className='col-span-2 border shadow-sm p-1 md:p-2 hover:bg-green-200'> Chicken Shaurma</p>
<p className='border shadow-sm p-1 md:p-2 hover:bg-green-200'>Health </p>
<p className='border shadow-sm p-1 md:p-2 hover:bg-green-200'> Fastfood</p>
<p className='border shadow-sm p-1 md:p-2 hover:bg-green-200'> Food</p>
<p className='border shadow-sm p-1 md:p-2 hover:bg-green-200'> Pizza</p>
<p className='border shadow-sm p-1 md:p-2 hover:bg-green-200'> Chicken</p>
<p className='border shadow-sm p-1 md:p-2 hover:bg-green-200'> Burger</p>

 </div>

</div>

{/* Photo Gallery  */}
<div className='border shadow-sm p-2 mt-2 md:mt-7 text-xs md:text-sm '>

  <h1 className='font-bold mt-1 md:mt-2 mb-2 md:mb-5'>Photo Gallery</h1>
  <div className='grid grid-cols-3 grid-rows-2 gap-1'>

<Image src={f1} alt='' width={100} height={100} className='scale-100 transition-all duration-300 hover:scale-90'/>
<Image src={f3} alt='' width={100} height={100} className='scale-100 transition-all duration-300 hover:scale-90'/>
<Image src={f2} alt='' width={100} height={100} className='scale-100 transition-all duration-300 hover:scale-90'/>
<Image src={f4} alt='' width={100} height={100} className='scale-100 transition-all duration-300 hover:scale-90'/>
<Image src={f5} alt='' width={100} height={100} className='scale-100 transition-all duration-300 hover:scale-90'/>
<Image src={f6} alt='' width={100} height={100} className='scale-100 transition-all duration-300 hover:scale-90'/>

</div>
</div>

{/* Links  */}
<div className='border shadow-sm p-2 mt-2 md:mt-7 text-sm '>
<h1 className='font-bold mt-2'>Follow Us</h1>
<p className='flex gap-2 text-black mt-2 md:p-3 p-2'>
  <i className='bx bxl-twitter p-1 md:p-3 bg-green-200 hover:bg-green-800 hover:text-white'></i>
<i className='bx bxl-pinterest p-1 md:p-3 bg-green-200 hover:bg-green-800 hover:text-white'></i>
 <i className='bx bxl-instagram p-1 md:p-3 bg-green-200 hover:bg-green-800 hover:text-white'></i>
 <i className='bx bxl-facebook p-1 md:p-3 bg-green-200 hover:bg-green-800 hover:text-white'></i>
 </p>
</div>

  </div>  

</div>


    </div>
  )
}
