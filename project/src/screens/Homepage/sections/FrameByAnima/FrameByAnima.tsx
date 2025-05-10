import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const FrameByAnima = (): JSX.Element => {
  // Pet data for mapping
  const pets = [
    {
      id: "MO231",
      name: "Pomeranian White",
      image: "/image-2-8.png",
      gene: "Male",
      age: "02 months",
      price: "6.900.000 VND",
    },
    {
      id: "MO502",
      name: "Poodle Tiny Yellow",
      image: "/image-2.png",
      gene: "Female",
      age: "02 months",
      price: "3.900.000 VND",
    },
    {
      id: "MO102",
      name: "Poodle Tiny Sepia",
      image: "/image-3.png",
      gene: "Male",
      age: "02 months",
      price: "4.000.000 VND",
    },
    {
      id: "MO512",
      name: "Alaskan Malamute Grey",
      image: "/image-4.png",
      gene: "Male",
      age: "02 months",
      price: "8.900.000 VND",
    },
    {
      id: "MO231",
      name: "Pembroke Corgi Cream",
      image: "/image-5.png",
      gene: "Male",
      age: "02 months",
      price: "7.900.000 VND",
    },
    {
      id: "MO502",
      name: "Pembroke Corgi Tricolor",
      image: "/image-6.png",
      gene: "Female",
      age: "02 months",
      price: "9.000.000 VND",
    },
    {
      id: "MO231",
      name: "Pomeranian White",
      image: "/image-7.png",
      gene: "Female",
      age: "02 months",
      price: "6.500.000 VND",
    },
    {
      id: "MO512",
      name: "Poodle Tiny Dairy Cow",
      image: "/image-8.png",
      gene: "Male",
      age: "02 months",
      price: "5.000.000 VND",
    },
  ];

  return (
    <section className="w-full py-8 md:py-16 px-4 md:px-8 lg:px-32">
      <div className="flex flex-col gap-0.5 mb-8">
        <h3 className="font-body-16px-medium text-black text-center md:text-left">What's new?</h3>
        <h2 className="[font-family:'SVN-Gilroy-Bold',Helvetica] font-bold text-primary-colordark-blue text-xl md:text-2xl leading-9 text-center md:text-left">
          Take A Look At Some Of Our Pets
        </h2>
      </div>

      <div className="flex justify-between items-start mb-6">
        <div className="flex-grow"></div>
        <Button
          variant="outline"
          className="rounded-full border-[1.5px] border-primary-colordark-blue px-4 md:px-7 py-2 md:py-3 h-auto text-sm md:text-base"
        >
          <span className="font-body-14px-medium text-primary-colordark-blue">
            View more
          </span>
          <ChevronRightIcon className="ml-2 h-4 w-4 md:h-5 md:w-5" />
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
        {pets.map((pet, index) => (
          <Card
            key={index}
            className="rounded-xl shadow-[0px_4px_28px_-2px_#00000014] bg-neutral-color00 border-none"
          >
            <CardContent className="p-2">
              <div className="relative w-full aspect-square bg-white rounded-[10px] overflow-hidden mb-2">
                <img
                  className="absolute w-full h-full object-cover"
                  alt={`${pet.id} - ${pet.name}`}
                  src={pet.image}
                />
              </div>

              <div className="p-2 pb-5">
                <div className="flex flex-col gap-1">
                  <h3 className="font-body-16px-bold text-neutral-color100 line-clamp-1">
                    {pet.id} - {pet.name}
                  </h3>

                  <div className="flex flex-wrap items-start gap-x-3 gap-y-1 w-full">
                    <div className="flex items-start gap-1.5">
                      <span className="font-body-12px-medium text-neutral-color60">
                        Gene:
                      </span>
                      <span className="font-body-12px-bold text-neutral-color60">
                        {pet.gene}
                      </span>
                    </div>

                    <div className="flex items-start gap-1.5">
                      <span className="font-body-12px-medium text-neutral-color60">
                        Age:
                      </span>
                      <span className="font-body-12px-bold text-neutral-color60">
                        {pet.age}
                      </span>
                    </div>
                  </div>

                  <p className="font-body-14px-bold text-neutral-color100">
                    {pet.price}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};