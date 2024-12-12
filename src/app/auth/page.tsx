
"use client"

import 'animate.css'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';  

import themebg from "../../../public/images/themebg.png"  
import { User } from 'lucide-react';

export default function Auth(){
 
  const [isLogin, setIsLogin] = useState(true);  

  const toggleForm = () => {  
    setIsLogin((prev) => !prev);  
  };  

  return (  
    <div>

 {/* landing page */}
 <div className=' h-[200px] text-green-500' >
<h1 className='absolute mt-10 md:mt-20 text-2xl md:text-5xl z- md:ml-[500px] ml-5'> Login/Signup</h1>
<Image src={themebg} alt='' width={500} height={500} className='w-full md:h-[250px] h-[100px] relative -z-10'/>
<div className='flex flex-row justify-center -mt-20 md:ml-40 '><Link href='/'>Home<i className='bx bx-chevron-right '></i>  </Link>
 <Link href='./../auth' className='text-white'><i className='bx bx-user'></i> Login/Signup</Link></div>
</div> 


    <div className="flex items-center justify-center h-auto md:mt-20 -mt-20 mb-4 " > 
      <div className="w-full max-w-md p-6 bg-transparent rounded-lg shadow-xl ">  
        <h2 className="mb-6 text-2xl font-bold text-center">{isLogin ? 'Login' : 'Sign Up'}</h2>  


        <form > 

        <div className="mb-4 mt-3">  
             <input  type="text"  required className="block w-full px-4 py-3 border" placeholder='Name'/>  
          </div>  

          <div className="mb-4">   
         <input  type="email"  required className="block w-full px-4 py-3 border" placeholder='Email'/>  
          </div> 

          <div className="mb-4">   
            <input type="text" required className="block w-full px-4 py-3 border " placeholder='Message'/>  
          </div> 

          <div>
           <input type="checkbox" className='hover:bg-green-800 hover:text-white'/> Remember me?
          </div>

          <button type="submit"  
            className="w-full mt-4 text-white border py-2 bg-green-800  
            hover:text-slate-200 hover:bg-green-700 text-[20px]">  
            {isLogin ? 'Login' : 'Sign Up'}  
          </button> 
        </form>  

        <button  
          onClick={toggleForm}  
          className="mt-4 text-sm hover:underline">  
          {isLogin ? "Don't have an account? Sign Up" : 'Already have an account? Login'}  
        </button> 

        <p className='flex justify-end mt-3'>Forget password?</p> 
        <hr className='border border-gray-400 w-20'/> 
        
        <div className="mb-4 mt-3">   
             <input  type="email"  required className="block w-full px-4 py-3 border "  placeholder='Sign up with Google'/>  
          </div>

          <div className="mb-4 mt-3">   
             <input  type="email"  required className="block w-full px-4 py-3 border " placeholder='Sign up with Apple'/>  
          </div>

      </div>  
    </div>  
    </div>
  );  
};  