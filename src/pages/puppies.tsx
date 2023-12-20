import React, { useEffect } from "react";
import axios from "axios";
import { get } from "http";
import Navbar from "@/components/Navbar";
import Image from "next/image";

const puppies = () => {
  const API_URL = "https://strapi-production-7d56.up.railway.app";
  const [puppies, setPuppies] = React.useState<any>([]);
  useEffect(() => {
    const getStrapi = async () => {
      axios.get(`${API_URL}/api/puppies?populate=*`).then((response) => {
        // console.log(response.data)
        console.log(
          response.data.data[0].attributes.photos.data.map((i: any) => {
            return i.attributes.url;
          }
          )
        );
        setPuppies(
          response.data.data[0].attributes.photos.data.map((i: any) => {
            return i.attributes.url;
          }
          )
        );
    
        // setPuppies(
        //   response.data.data.map((i: any) => {
        //     return { ...i.attributes, id: i.id };
        //   })
        // );
      });
    };
    getStrapi();
  }, []);
  return (
    <div className="flex flex-col ">
      <Navbar />

      {/* <div className=" ml-auto mr-auto   text-4xl mt-44">Puppies</div> */}

      <div className="mt-28 w-full ">
        {/* <div className="text-4xl ml-auto mr-auto text-center">Puppies</div> */}
        <div className="text-xl ml-auto mr-auto text-center">
          We have a new litter of puppies!{" "}
        </div>
        <div className="flex flex-row ml-auto mr-auto justify-center w-full gap-10 mb-20">
          <div className="w-1/3">
            <div>Sire:</div>
            <Image
              width={600}
              alt="dog3"
              src="/dog3.jpg"
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-1/3 ">
            <div>Dam: </div>
            <Image
              width={600}
              alt="dog4"
              src="/dog4.jpg"
              height={600}
              className="w-full h-full object-cover"
            />{" "}
          </div>
        </div>
        <div className="text-xl ml-auto mr-auto text-center">
          {" "}
          Contact us for more information.{" "}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-10">
        {puppies.map((i: any, index: any) => (
    <div
      key={index}
      className={`mb-4 ${
        index % 3 === 2
          ? 'lg:col-span-2 lg:w-2/3 h-full'
          : 'lg:col-span-1 lg:w-full '
      }`}
    >
      <div className="flex justify-center"> {/* Adjust aspect ratio as needed */}
        <img
          src={ i}
          alt={`Photo ${index + 1}`}
          className="w-full h-96 rounded object-contain  "
        />
      </div>
    </div>
  ))}
      </div>
        {/* {puppies.map((i: any, index: any) => {
        //   return (
        //     <div key={index}>
       
        //       <img
        //         className="p-10 "
        //         src={API_URL + i}
        //         alt={index}
        //       />
        //     </div>
        //   );
        // })} */}
      </div>
    </div>
  );
};

export default puppies;
