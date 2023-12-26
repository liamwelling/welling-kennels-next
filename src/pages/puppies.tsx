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
          })
        );
        setPuppies(
          response.data.data[0].attributes.photos.data.map((i: any) => {
            return i.attributes.url;
          })
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

      <div className="mt-36 w-full ">
        {/* <div className="text-4xl ml-auto mr-auto text-center">Puppies</div> */}
        <div className="text-xl ml-auto mr-auto text-center">
          We have a new litter of puppies!{" "}
        </div>
        <div className="flex flex-col md:flex-row ml-auto mr-auto justify-center w-full gap-10  mb-10 md:mb-20 p-10">
          <div className="w-full md:w-3/5">
            <div className="text-xl underline">Sire: Maineview Donnachadh</div>
            <div>
              Master Hunter Advanced. Irish import rough shooting dog from
              County kerry
            </div>

            <Image
              width={600}
              alt="dog3"
              src="/dog3.jpg"
              height={600}
              className="w-full lg:w-[30vw] h-[60vh] object-cover object-top rounded"
            />
          </div>
          <div className="w-full md:w-3/5">
            <div className="text-xl underline">Dam: Maineview Cliodhna</div>
            <div>
              Senior Hunter. She is also an Irish import rought shooting dog
              from County Kerry.
            </div>
            <Image
              width={600}
              alt="dog4"
              src="/dog4.jpg"
              height={600}
              className="w-full lg:w-[30vw] h-[60vh] object-cover object-top rounded"
            />{" "}
          </div>
        </div>
        <div className="text-xl ml-auto mr-auto text-center">
          {" "}
          About the puppies{" "}
        </div>
        <div className="flex flex-col md:flex-row w-full">
        <div className=" md:w-1/2  p-10">
          <div className="font-bold">Enrichment & Socialization</div>
          <div className="">
            I combine puppy training and socialization strategies from a variety
            of programs and checklists. I do everything | can to ensure my
            puppies are easily trainable and have a smooth transition to their
            new home. I utilize the following enrichment methods: Intro to
            water/swimming. Car Rides, Outdoors (when Weather permits), Noises ,
            Various Surfaces , Chew, e.g. Bone, Household Desensitization, Toys,
            e.g. Ball, Socialized with Children, Touch, pets, and kisses are
            encouraged during human socialization., Beginning potty training ,
            Recall training, surface and tactile stimulation, Bird Introduction,
            Scent Introduction, Car Training Puppy Manners, Puppy Culture, Noise
            desensitization, Socialized with People of Various Appearances,
            Socialized with Adult Dogs.
          </div>
        </div>
        <div className="md:w-1/2  w-full p-10">
        <div className="">
          <div className="font-bold">Health</div>
          <div>
          I prioritize the health and well-being of each
one of my puppies, and I follow all appropriate
puppy health protocols. Puppies will have first
vaccines, deworming, tails docked (field dock),
dew claws removed. Puppies will be
microchipped and have eye exam for OFA
CAER.
          </div>
        </div>
        <div className=" w-full mt-20">
          <div className="font-bold">Contracts and Health Guarantees</div>
          <div>
          Mary may offer a written contract or health
guarantee if you purchase a puppy from them.
A written contract protects both you and Mary
and ensures you have a shared understanding
of the terms of your puppy purchase. If Mary
offers a contract or guarantee, the specific
terms are determined by them. If you have any
questions, feel free to reach out to Mary
directly.
          </div>
        </div>
        </div>
        </div>
        <div className=" w-full p-10">
          <div className="font-bold">Included with Puppy</div>
          <div>
          We send our puppies home with a Sound and
texture enrichment, Our puppies are all sent
home with welcome home bags and
information. , Dew claws removed, Early
Neurological Stimulation, Blanket with
Littermates Scent, Vaccinations, AKC
Registration, Food Starter Bag, Microchip.
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-10">
          {puppies.map((i: any, index: any) => (
            <div
              key={index}
              className={`mb-4 ${
                index % 3 === 2
                  ? "lg:col-span-2 lg:w-2/3 h-full"
                  : "lg:col-span-1 lg:w-full "
              }`}
            >
              <div className="flex justify-center">
                {" "}
                {/* Adjust aspect ratio as needed */}
                <img
                  src={i}
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
