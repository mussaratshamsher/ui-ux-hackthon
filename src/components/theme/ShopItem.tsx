
import React from 'react';  
import Image from 'next/image';  
import { Heart, LucideIcon, ShoppingBag, Waypoints } from 'lucide-react';  

interface ShopProps {  
    image: string,  
    title: string,  
    para: string,  
    icons?: LucideIcon[];  
}  

export default function ShopItem(props: ShopProps) {  
    const { image, title, para, icons } = props;  

    return (  
        <div>  
            <Image src={image} alt="" width={100} height={100} className='md:w-52 w-20 transition-all duration-300 hover:scale-110'/>  

            <h1 className="">   {icons && icons.map((Icon, index) => (  
            <Icon key={index} className="md:inline-block md:-mt-40 mr-1 ml-1 md:ml-8 hover:text-white hover:bg-green-700
             text-green-800 bg-white hidden" />  
                ))}  
            </h1>  

            <h1 className=" text-xs md:text-1xl font-bold md:-mt-4">{title}</h1>  
            <p>{para} </p>  
        </div>  
    );  
}