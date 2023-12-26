import Navbar from "@/components/Navbar";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Waypoint } from "react-waypoint";

const Homepage = () => {
  const API_URL = "https://strapi-production-7d56.up.railway.app";
  const [loading, setLoading] = useState(true);
  const [visable, setVisable] = useState(false);
  const [puppies, setPuppies] = React.useState<any>([]);
  useEffect(() => {
    const getStrapi = async () => {
      setLoading(true);
      axios.get(`${API_URL}/api/homepage-photo?populate=*`).then((response) => {
        // console.log(response.data)
        console.log(
          response.data.data[0].attributes.photos.data.map((i: any) => {
            return i.attributes.url;
          })
        );
        setPuppies(
          response.data.data[0].attributes.photos.data.map((i: any) => {
            return i.attributes.url;
          })
        );
        setLoading(false);
      });
    };
    getStrapi();
  }, []);
  return (
    <div
      className=" object-contain  "
      // style={{ backgroundImage: "url(./dog1.jpg)",  filter: `brightness(.5)`, }}
    >
      <img
        src="./dog1.jpg"
        alt="dog1"
        className={`w-full h-full lg:h-auto object-cover fixed -z-10  transition-brightness ease-in duration-700 ${
          visable ? "brightness-50" : "brightness-100"
        }`}
      />
      <Navbar />
      <div 
      className="mt-20 md:mt-20 lg:mt-24 h-[90vh] mb-60 lg:mb-64 flex ">
        {/* <div className="pt-14 ml-auto mr-auto text-3xl">English Springer Spannels</div> */}
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
            <div className="text-2xl font-bold">
              Hi, I'm Mary from Bean Sidhe Springeres
            </div>
            <div className="text-xl">
              I'm the breader behind Bean Sidhe Springers located in Salt Point,
              NY. I produce pups that will continue to excel in their chosen
              field, wheather that be hunting, performances, or as an active
              companion.
            </div>
          </div>
          {/* <div className="row-span-2 col-span-2 border">03</div> */}
          <div className="bg-white h-full w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-20">
              {!loading &&
                puppies.map((i: any, index: any) => (
                  <div
                    key={index}
                    className={`mb-4 ${
                      index % 3 === 2
                        ? "lg:col-span-2 lg:w-2/3 h-full ml-auto mr-auto"
                        : "lg:col-span-1 lg:w-full "
                    }`}
                  >
                    <div className="flex justify-center">
                      {" "}
                      {/* Adjust aspect ratio as needed */}
                      <img
                        src={i}
                        alt={`Photo ${index + 1}`}
                        className="w-full h-full rounded object-cover  "
                      />
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
