import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import { Waypoint } from 'react-waypoint';

const Homepage = () => {
  const [visable, setVisable] = useState(false)

  return (
    <div
      className=" object-contain  "
      // style={{ backgroundImage: "url(./dog1.jpg)",  filter: `brightness(.5)`, }}
    >
      <img src="./dog1.jpg" alt="dog1" className={`w-full h-full lg:h-auto object-cover fixed -z-10  transition-brightness ease-in duration-700 ${visable? 'brightness-50' : 'brightness-100'}`}/>
      <Navbar />
      <div className="mt-20 md:mt-20 lg:mt-24 h-96 mb-60 lg:mb-64 flex ">
        <div className="pt-14 ml-auto mr-auto text-3xl">English Springer Spannels</div>
      </div>
      <div className="">
        {/* <div className='ml-auto mr-auto text-3xl '>English Springer Spannels</div> */}
        <div className="flex flex-col  ">
         
          <div className=" p-10 text-white mb-48 ">
          <Waypoint 
        onEnter={() => setVisable(true)}
        onLeave={() => setVisable(false)}
        bottomOffset={100}
      />
            <div className="text-2xl font-bold">Hi, I'm Mary from Bean Sidhe Springeres</div>
            <div className="text-xl">
        I'am the breader behind Bean Sidhe Springers located in Salt Point, NY. 
        I produce pups that will continue to excel in their chosen field,
        wheather that be hunting, performances, or as an active companion. 
            </div>
          </div>
          {/* <div className="row-span-2 col-span-2 border">03</div> */}
          <div className="bg-white h-96 w-full">

          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
