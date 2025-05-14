import { useState, useEffect } from "react";
import { Search } from '../components/Search';
export function MainSection(){
    const Images = [
        "/images/Car1.jpg",
        "/images/Car2.jpg",
        "/images/Car3.jpg",
    ];
    const [bgImage, setBgImage] = useState(Images[0])

    useEffect(()=>{
        const randomIndex = Math.floor(Math.random() * Images.length);
        setBgImage(Images[randomIndex]);
    }, []);

    return(
        <div className="h-[400px] items-center justify-center flex relative text-white bg-cover bg-center flex-col"
        style={{
            backgroundImage: `url(${bgImage})`,
        }}>
           <p className="font-medium text-3xl">Car listings from major sites like</p>
           <div className="flex justify-center align-center gap-x-3">
            <img src="/logos/olx.svg" alt="pak.jpg"/>
            <img src="/logos/pakwheels.svg" alt="olx.png"/>
           </div>
           <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent"></div>
        </div>
      
        
    );
}