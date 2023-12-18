import React, { useEffect } from "react";
import axios from "axios";
import { get } from "http";
import Navbar from "@/components/Navbar";
import Image from 'next/image'

const puppies = () => {
  const API_URL = "http://localhost:1337";
  const [puppies, setPuppies] = React.useState<any>([]);
  useEffect(() => {
    const getStrapi = async () => {
      axios.get(`${API_URL}/api/puppies?populate=*`).then((response) => {
        console.log(
          response.data.data.map((i: any) => {
            return { ...i.attributes, id: i.id };
          })
        );
        setPuppies(
          response.data.data.map((i: any) => {
            return { ...i.attributes, id: i.id };
          })
        );
      });
    };
    getStrapi();
  }, []);
  return (
    <div className="flex flex-col">
      <Navbar />

      {/* <div className=" ml-auto mr-auto   text-4xl mt-44">Puppies</div> */}

      <div className="mt-28 w-full ">
        <div className="text-4xl ml-auto mr-auto text-center">Puppies</div>
        <div className="text-xl ml-auto mr-auto text-center">
          We have a new litter of puppies!{" "}
        </div>
        <div className="flex flex-row ml-auto mr-auto justify-center w-full gap-10">
          <div className="w-1/3">
          <div>Sire:</div>
          <Image width={600} alt="dog3"  src="/dog3.jpg"
      height={600} className="bg-black w-full h-96 object-contain"/>
          </div>
          <div className="w-1/3 ">
          <div>Dam: </div>
          <Image width={600} alt="dog4"  src="/dog4.jpg"
      height={600} className="bg-black w-full h-96 object-contain"/>          </div>
        </div>
        <div className="text-xl ml-auto mr-auto text-center">
          {" "}
          Contact us for more information.{" "}
        </div>
        {puppies.map((i: any) => {
          return (
            <div key={i.name}>
              <div> {i.name} </div>
              <img
                className="p-10 "
                src={API_URL + i.main_photo.data.attributes.url}
                alt={i.name}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default puppies;
