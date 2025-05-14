"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FrameWrapper = void 0;
const react_1 = __importDefault(require("react"));
const card_1 = require("../../../../components/ui/card");
// Define puppy data for mapping
const puppyData = [
    {
        id: "MO231",
        name: "Pomeranian White",
        image: "/image-2-5.png",
        gender: "Male",
        age: "02 months",
        price: "6.900.000 VND",
    },
    {
        id: "MO502",
        name: "Poodle Tiny Yellow",
        image: "/image-2-1.png",
        gender: "Female",
        age: "02 months",
        price: "3.900.000 VND",
    },
    {
        id: "MO102",
        name: "Poodle Tiny Sepia",
        image: "/image-3-1.png",
        gender: "Male",
        age: "02 months",
        price: "4.000.000 VND",
    },
    {
        id: "MO512",
        name: "Alaskan Malamute Grey",
        image: "/image-4-1.png",
        gender: "Male",
        age: "02 months",
        price: "8.900.000 VND",
    },
];
const FrameWrapper = () => {
    return (<section className="w-full py-12 px-4">
      <div className="container mx-auto">
        <header className="mb-8">
          <p className="font-body-16px-medium text-black">Whats new?</p>
          <h2 className="[font-family:'SVN-Gilroy-Bold',Helvetica] font-bold text-primary-colordark-blue text-2xl leading-9">
            See More Puppies
          </h2>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {puppyData.map((puppy, index) => (<card_1.Card key={puppy.id} className="rounded-xl shadow-[0px_4px_28px_-2px_#00000014] bg-neutral-color00 border-0">
              <card_1.CardContent className="p-2">
                <div className="relative w-full aspect-square rounded-[10px] overflow-hidden mb-2">
                  <img className="w-full h-full object-cover" alt={`${puppy.id} - ${puppy.name}`} src={puppy.image}/>
                </div>

                <div className="p-2">
                  <div className="space-y-1">
                    <h3 className="font-body-16px-bold text-neutral-color100">
                      {puppy.id} - {puppy.name}
                    </h3>

                    <div className="flex items-start gap-1 w-full">
                      <div className="flex items-start gap-1.5">
                        <span className="font-body-12px-medium text-neutral-color60">
                          Gene:
                        </span>
                        <span className="font-body-12px-bold text-neutral-color60">
                          {puppy.gender}
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
                          {puppy.age}
                        </span>
                      </div>
                    </div>

                    <p className="font-body-14px-bold text-neutral-color100 pt-1">
                      {puppy.price}
                    </p>
                  </div>
                </div>
              </card_1.CardContent>
            </card_1.Card>))}
        </div>
      </div>
    </section>);
};
exports.FrameWrapper = FrameWrapper;
