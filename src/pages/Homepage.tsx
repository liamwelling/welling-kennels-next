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
      <div className="mt-20 md:mt-20 lg:mt-24 h-96 mb-60 lg:mb-64">
        {/* <img src='./headerPhoto.jpg' alt='dog1' className='w-full object-cover object-center lg:object-top  ' /> */}
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
            <div className="text-2xl font-bold">About</div>
            <div className="text-xl">
              {" "}
              As an amateur handler, Bob Lightfoot trains his own field-bred
              English Springer Spaniels and competes in field trials and hunt
              tests. Our dogs have also trained with Mike Wallace of Salmy Acres
              Kennel and Rocco Iasparra. ​We breed dogs who make excellent
              competitors in the field, hunting companions and pets. The parents
              are chosen for their dispositions and health of the lines. We're
              located in southern Connecticut. ​For more information, send Bob
              an email or call (203) 393-9363.
            </div>
          </div>
          {/* <div className="row-span-2 col-span-2 border">03</div> */}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
