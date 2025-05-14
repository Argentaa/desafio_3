"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Frame = void 0;
const lucide_react_1 = require("lucide-react");
const react_1 = __importDefault(require("react"));
const button_1 = require("../../../../components/ui/button");
const card_1 = require("../../../../components/ui/card");
const Frame = () => {
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
    return (<section className="w-full py-16 px-4 md:px-8 lg:px-32">
      <div className="flex flex-col gap-0.5 mb-8">
        <h3 className="font-body-16px-medium text-black">Whats new?</h3>
        <h2 className="[font-family:'SVN-Gilroy-Bold',Helvetica] font-bold text-primary-colordark-blue text-2xl leading-9">
          Take A Look At Some Of Our Pets
        </h2>
      </div>

      <div className="flex justify-between items-start mb-6">
        <div className="flex-grow"></div>
        <button_1.Button variant="outline" className="rounded-full border-[1.5px] border-primary-colordark-blue px-7 py-3 h-auto">
          <span className="font-body-14px-medium text-primary-colordark-blue">
            View more
          </span>
          <lucide_react_1.ChevronRightIcon className="ml-2 h-5 w-5"/>
        </button_1.Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {pets.map((pet, index) => (<card_1.Card key={index} className="rounded-xl shadow-[0px_4px_28px_-2px_#00000014] bg-neutral-color00 border-none">
            <card_1.CardContent className="p-2">
              <div className="relative w-full aspect-square bg-white rounded-[10px] overflow-hidden mb-2">
                <img className="absolute w-full h-full object-cover" alt={`${pet.id} - ${pet.name}`} src={pet.image}/>
              </div>

              <div className="p-2 pb-5">
                <div className="flex flex-col gap-1">
                  <h3 className="font-body-16px-bold text-neutral-color100">
                    {pet.id} - {pet.name}
                  </h3>

                  <div className="flex items-start gap-1 w-full">
                    <div className="flex items-start gap-1.5">
                      <span className="font-body-12px-medium text-neutral-color60">
                        Gene:
                      </span>
                      <span className="font-body-12px-bold text-neutral-color60">
                        {pet.gene}
                      </span>
                    </div>

                    <span className="font-body-12px-medium text-neutral-color60">
                      {""}
                    </span>

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
            </card_1.CardContent>
          </card_1.Card>))}
      </div>
    </section>);
};
exports.Frame = Frame;
