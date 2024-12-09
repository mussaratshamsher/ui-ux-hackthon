
"use client"


import React, { useState } from 'react';  


  

export default function Auth(){
 
  const [isLogin, setIsLogin] = useState(true);  

  const toggleForm = () => {  
    setIsLogin((prev) => !prev);  
  };  

  return (  
    <div className="flex items-center justify-center h-auto md:mt-20 mt-10 mb-4" >  
      <div className="w-full max-w-md p-6 bg-transparent rounded-lg shadow-xl ">  
        <h2 className="mb-6 text-2xl font-bold text-center">{isLogin ? 'Login' : 'Sign Up'}</h2>  


        <form> 

        <div className="mb-4">  
             <input  type="email"  required className="block w-full px-4 py-3 border " placeholder='Name'/>  
          </div>  

          <div className="mb-4">   
             <input  type="email"  required className="block w-full px-4 py-3 border " placeholder='Email'/>  
          </div> 

          <div className="mb-4">   
            <input type="password" required  className="block w-full px-4 py-3 border  "/>  
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

  );  
};  