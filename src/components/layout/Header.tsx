// "use client";  

// import {  
//     Sheet,  
//     SheetContent,  
//     SheetTrigger,  
// } from "@/components/ui/sheet";  
// import { Search, ShoppingBag, User, Utensils } from 'lucide-react';  
// import Link from 'next/link';  

// export default function Header() {  
//     return (  
//         <div className="w-full">  
//             <div id='banner'>  
//                 <h1 className='h-10 md:text-1xl mt-2 p-2 text-xs' id='scrolling-text'>  
//                     <b className="text-2xl ">F<span id='clr'>oo</span>dtuck <i className='bx bx-bowl-hot text-green-600 text-2xl'></i>.....</b>  
          
//                 </h1>  
//             </div>  

//             <div className="md:h-20 h-10 flex flex-row backdrop-blur-sm md:justify-between justify-evenly gap-2 md:mt-5 mt-3 md:p-5 p-2">  
//                 {/* grid 1 */}  
//                 <h1 className='font-bold md:text-4xl text-1xl md:ml-32'>F<span id='clr'>oo</span>dtuck</h1>  

//                 {/* grid 2 */}  
//                 <ul className="md:flex md:flex-row gap-5 hidden">  
//                     <li className='hover:underline hover:font-semibold hover:decoration-green-700'><Link href="/">Home</Link></li>  
//                     <li className='hover:underline hover:font-semibold hover:decoration-green-700'><Link href="/">Menu</Link></li>  
//                     <li className='hover:underline hover:font-semibold hover:decoration-green-700'><Link href="/">Blog</Link></li>  
//                     <li className='hover:underline hover:font-semibold hover:decoration-green-700'><Link href="/">Page</Link></li>  
//                     <li className='hover:underline hover:font-semibold hover:decoration-green-700'><Link href="/">Shop</Link></li>  
//                     <li className='hover:underline hover:font-semibold hover:decoration-green-700'><Link href="./../about">About</Link></li>  
//                     <li className='hover:underline hover:font-semibold hover:decoration-green-700'><Link href="./../contact">Contact</Link></li>  
//                 </ul>  

//                 {/* grid 3 */}  
//                 <div className="flex flex-row md:gap-2 md:mr-20">  
//                     <Search /> <User /> <ShoppingBag />  
//                 </div>  

//                 <Sheet>  
//                     <SheetTrigger className="md:hidden"> <i className='bx bx-menu-alt-right text-green-800' id="back"></i> </SheetTrigger>  
//                     <SheetContent>  
//                         <ul className="md:hidden">  
//                             <li className='hover:underline hover:decoration-green-700'><Link href="/">Home</Link></li>  
//                             <li className='hover:underline hover:decoration-green-700'><Link href="/">Menu</Link></li>  
//                             <li className='hover:underline hover:decoration-green-700'><Link href="/">Blog</Link></li>  
//                             <li className='hover:underline hover:decoration-green-700'><Link href="/">Page</Link></li>  
//                             <li className='hover:underline hover:decoration-green-700'><Link href="/">Shop</Link></li>  
//                             <li className='hover:underline hover:decoration-green-700'><Link href="./../about">About</Link></li>  
//                             <li className='hover:underline hover:decoration-green-700'><Link href="./../contact">Contact</Link></li>  
//                         </ul>  
//                     </SheetContent>  
//                 </Sheet>  
//             </div>  
//         </div>  
//     );  
// }

"use client";  

import { useState } from "react";  
import { Search, ShoppingBag, User, Utensils } from 'lucide-react';  
import Link from 'next/link';  

export default function Header() {  
    const [isMenuOpen, setIsMenuOpen] = useState(false);  

    const toggleMenu = () => {  
        setIsMenuOpen(!isMenuOpen);  
    };  

    const handleLinkClick = () => {  
        setIsMenuOpen(false);   
    };  

    return (  
        <div className="w-full">  
            <div id='banner'>  
                <h1 className='h-10 md:text-1xl mt-2 p-2 text-xs' id='scrolling-text'>  
                    <b className="text-2xl ">F<span id='clr'>oo</span>dtuck <i className='bx bx-bowl-hot text-green-600 text-2xl'></i>.....</b>  
                </h1>  
            </div>  

            <div className="md:h-20 h-10 flex flex-row backdrop-blur-sm md:justify-between justify-between gap-2 md:mt-5 mt-3 md:p-5 p-2">  
                <h1 className='font-bold md:text-4xl text-1xl md:ml-32'>F<span id='clr'>oo</span>dtuck</h1>  

                {/* Navigation List for Larger Screens */}  
                <ul className="md:flex md:flex-row gap-5 hidden">  
                    <li className='hover:underline hover:font-semibold hover:decoration-green-700'><Link href="/">Home</Link></li>  
                    <li className='hover:underline hover:font-semibold hover:decoration-green-700'><Link href="/">Menu</Link></li>  
                    <li className='hover:underline hover:font-semibold hover:decoration-green-700'><Link href="/">Blog</Link></li>  
                    <li className='hover:underline hover:font-semibold hover:decoration-green-700'><Link href="/">Page</Link></li>  
                    <li className='hover:underline hover:font-semibold hover:decoration-green-700'><Link href="/">Shop</Link></li>  
                    <li className='hover:underline hover:font-semibold hover:decoration-green-700'><Link href="./../about">About</Link></li>  
                    <li className='hover:underline hover:font-semibold hover:decoration-green-700'><Link href="./../contact">Contact</Link></li>  
                </ul>  

                {/* Icons for Search, User, Shopping Bag */}  
                <div className="flex flex-row md:gap-2 md:mr-20">  
                    <Search /> <User /> <ShoppingBag />  
                </div>  

                {/* Hamburger Menu */}  
                <div className="md:hidden">  
                    <button onClick={toggleMenu}>  
                        <i className='bx bx-menu-alt-right text-green-800' id="back"></i>  
                    </button>  
                </div>  

                {/* Mobile Navigation List */}  
                {isMenuOpen && (  
                    <div className="absolute top-16 left-0 right-0 bg-white shadow-lg p-4 md:hidden">  
                        <ul>  
                            <li className='hover:underline hover:decoration-green-700'>  
                                <Link href="/" onClick={handleLinkClick}>Home</Link>  
                            </li>  
                            <li className='hover:underline hover:decoration-green-700'>  
                                <Link href="/" onClick={handleLinkClick}>Menu</Link>  
                            </li>  
                            <li className='hover:underline hover:decoration-green-700'>  
                                <Link href="/" onClick={handleLinkClick}>Blog</Link>  
                            </li>  
                            <li className='hover:underline hover:decoration-green-700'>  
                                <Link href="/" onClick={handleLinkClick}>Page</Link>  
                            </li>  
                            <li className='hover:underline hover:decoration-green-700'>  
                                <Link href="/" onClick={handleLinkClick}>Shop</Link>  
                            </li>  
                            <li className='hover:underline hover:decoration-green-700'>  
                                <Link href="./../about" onClick={handleLinkClick}>About</Link>  
                            </li>  
                            <li className='hover:underline hover:decoration-green-700'>  
                                <Link href="./../contact" onClick={handleLinkClick}>Contact</Link>  
                            </li>  
                        </ul>  
                    </div>  
                )}  
            </div>  
        </div>  
    );  
}