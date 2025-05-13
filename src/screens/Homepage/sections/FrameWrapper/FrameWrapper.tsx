import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

// Product data for mapping
const products = [
  {
    id: 1,
    title: "Reflex Plus Adult Cat Food Salmon",
    productType: "Dog Food",
    size: "385gm",
    price: "140.000 VND",
    promotion: "Free Toy & Free Shaker",
    image: "/image-2-9.png",
  },
  {
    id: 2,
    title: "Reflex Plus Adult Cat Food Salmon",
    productType: "Cat Food",
    size: "1.5kg",
    price: "165.000 VND",
    promotion: "Free Toy & Free Shaker",
    image: "/image-2-10.png",
  },
  {
    id: 3,
    title: "Cat scratching ball toy kitten sisal rope ball",
    productType: "Toy",
    price: "1.100.000 VND",
    promotion: "Free Cat Food",
    image: "/image-2-11.png",
  },
  {
    id: 4,
    title: "Cute Pet Cat Warm Nest",
    productType: "Toy",
    price: "410.000 VND",
    promotion: "Free Cat Food",
    image: "/image-2-12.png",
  },
  {
    id: 5,
    title: "NaturVet Dogs - Omega-Gold Plus Salmon Oil",
    productType: "Dog Food",
    size: "385gm",
    price: "350.000 VND",
    promotion: "Free Toy & Free Shaker",
    image: "/image-2-13.png",
  },
  {
    id: 6,
    title: "Costumes Fashion Pet Clother Cowboy Rider",
    productType: "Costume",
    size: "1.5kg",
    price: "500.000 VND",
    promotion: "Free Toy & Free Shaker",
    image: "/image-2-14.png",
  },
  {
    id: 7,
    title: "Costumes Chicken Drumsti ck Headband",
    productType: "Costume",
    price: "400.000 VND",
    promotion: "Free Cat Food",
    image: "/image-2-15.png",
  },
  {
    id: 8,
    title: "Plush Pet Toy",
    productType: "Toy",
    price: "250.000 VND",
    promotion: "Free Food & Shaker",
    image: "/image-2-16.png",
  },
];

export const FrameWrapper = (): JSX.Element => {
  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-32">
      <div className="flex justify-between items-center mb-8">
        <div className="flex flex-col gap-0.5">
          <p className="font-body-16px-medium text-black">
            Hard to choose right products for your pets?
          </p>
          <h2 className="[font-family:'SVN-Gilroy-Bold',Helvetica] font-bold text-primary-colordark-blue text-2xl leading-9">
            Our Products
          </h2>
        </div>

        <Button
          variant="outline"
          className="rounded-full border-[1.5px] border-primary-colordark-blue px-7 py-3 flex items-center gap-2"
        >
          <span className="font-body-14px-medium text-primary-colordark-blue">
            View more
          </span>
          <ChevronRightIcon className="h-5 w-5" />
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {products.slice(0, 4).map((product) => (
          <Card
            key={product.id}
            className="rounded-xl shadow-[0px_4px_28px_-2px_#00000014] bg-neutral-color00 border-0"
          >
            <CardContent className="p-2">
              <div className="flex flex-col gap-2">
                <div className="relative w-full h-[264px] bg-white rounded-[10px] overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    alt={product.title}
                    src={product.image}
                  />
                </div>

                <div className="flex flex-col gap-2.5 pt-2 pb-5 px-2">
                  <div className="flex flex-col gap-1">
                    <h3 className="font-body-16px-bold text-neutral-color100">
                      {product.title}
                    </h3>

                    <div className="flex items-start gap-1 flex-wrap">
                      <div className="flex items-start gap-1.5">
                        <span className="font-body-12px-medium text-neutral-color60">
                          Product:
                        </span>
                        <span className="font-body-12px-bold text-neutral-color60">
                          {product.productType}
                        </span>
                      </div>

                      {product.size && (
                        <>
                          <span className="font-body-12px-medium text-neutral-color60">
                            {""}
                          </span>
                          <div className="flex items-start gap-1.5">
                            <span className="font-body-12px-medium text-neutral-color60">
                              Size:
                            </span>
                            <span className="font-body-12px-bold text-neutral-color60">
                              {product.size}
                            </span>
                          </div>
                        </>
                      )}
                    </div>

                    <div className="font-body-14px-bold text-neutral-color100">
                      {product.price}
                    </div>
                  </div>

                  <div className="flex items-center gap-0.5 pt-1.5 pb-1 px-2.5 bg-secondary-colormon-yellow-40 rounded-lg">
                    <div className="relative w-5 h-5 rotate-180">
                      <div className="relative w-[17px] h-5 left-px">
                        <div className="relative h-5">
                          <img
                            className="absolute w-[15px] h-[11px] top-[9px] left-0.5"
                            alt="Vector"
                            src="/vector-3.svg"
                          />
                          <img
                            className="absolute w-2 h-[11px] top-[9px] left-0.5"
                            alt="Vector"
                            src="/vector-10.svg"
                          />
                          <img
                            className="absolute w-2.5 h-[7px] top-0 left-0.5"
                            alt="Vector"
                            src="/vector-6.svg"
                          />
                          <img
                            className="absolute w-[7px] h-[7px] top-0 left-0.5"
                            alt="Vector"
                            src="/vector.svg"
                          />
                          <img
                            className="absolute w-[17px] h-2.5 top-0.5 left-0"
                            alt="Vector"
                            src="/vector-1.svg"
                          />
                          <img
                            className="absolute w-2.5 h-2 top-1 left-0"
                            alt="Vector"
                            src="/vector-2.svg"
                          />
                          <img
                            className="absolute w-[5px] h-4 top-1 left-1.5"
                            alt="Group"
                            src={`/group-${product.id * 2 - 1}.png`}
                          />
                          <img
                            className="absolute w-1 h-4 top-1 left-1.5"
                            alt="Group"
                            src={`/group-${product.id * 2}.png`}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="inline-flex items-center justify-center gap-2.5 px-2 py-2.5">
                      <div className="w-1 h-1 bg-primary-colordark-blue rounded-[10px]" />
                    </div>

                    <span className="font-body-14px-bold text-primary-colordark-blue-80">
                      {product.promotion}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
        {products.slice(4).map((product, index) => (
          <Card
            key={product.id}
            className="rounded-xl shadow-[0px_4px_28px_-2px_#00000014] bg-neutral-color00 border-0"
          >
            <CardContent className="p-2">
              <div className="flex flex-col gap-2">
                <div className="relative w-full h-[264px] bg-white rounded-[10px] overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    alt={product.title}
                    src={product.image}
                  />
                </div>

                <div className="flex flex-col gap-2.5 pt-2 pb-5 px-2">
                  <div className="flex flex-col gap-1">
                    <h3 className="font-body-16px-bold text-neutral-color100">
                      {product.title}
                    </h3>

                    <div className="flex items-start gap-1 flex-wrap">
                      <div className="flex items-start gap-1.5">
                        <span className="font-body-12px-medium text-neutral-color60">
                          Product:
                        </span>
                        <span className="font-body-12px-bold text-neutral-color60">
                          {product.productType}
                        </span>
                      </div>

                      {product.size && (
                        <>
                          <span className="font-body-12px-medium text-neutral-color60">
                            {""}
                          </span>
                          <div className="flex items-start gap-1.5">
                            <span className="font-body-12px-medium text-neutral-color60">
                              Size:
                            </span>
                            <span className="font-body-12px-bold text-neutral-color60">
                              {product.size}
                            </span>
                          </div>
                        </>
                      )}
                    </div>

                    <div className="font-body-14px-bold text-neutral-color100">
                      {product.price}
                    </div>
                  </div>

                  <div className="flex items-center gap-0.5 pt-1.5 pb-1 px-2.5 bg-secondary-colormon-yellow-40 rounded-lg">
                    <div className="relative w-5 h-5 rotate-180">
                      <div className="relative w-[17px] h-5 left-px">
                        <div className="relative h-5">
                          <img
                            className="absolute w-[15px] h-[11px] top-[9px] left-0.5"
                            alt="Vector"
                            src="/vector-3.svg"
                          />
                          <img
                            className="absolute w-2 h-[11px] top-[9px] left-0.5"
                            alt="Vector"
                            src="/vector-10.svg"
                          />
                          <img
                            className="absolute w-2.5 h-[7px] top-0 left-0.5"
                            alt="Vector"
                            src="/vector-6.svg"
                          />
                          <img
                            className="absolute w-[7px] h-[7px] top-0 left-0.5"
                            alt="Vector"
                            src="/vector.svg"
                          />
                          <img
                            className="absolute w-[17px] h-2.5 top-0.5 left-0"
                            alt="Vector"
                            src="/vector-1.svg"
                          />
                          <img
                            className="absolute w-2.5 h-2 top-1 left-0"
                            alt="Vector"
                            src="/vector-2.svg"
                          />
                          <img
                            className="absolute w-[5px] h-4 top-1 left-1.5"
                            alt="Group"
                            src={`/group-${(index + 5) * 2 - 1}.png`}
                          />
                          <img
                            className="absolute w-1 h-4 top-1 left-1.5"
                            alt="Group"
                            src={`/group-${(index + 5) * 2}.png`}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="inline-flex items-center justify-center gap-2.5 px-2 py-2.5">
                      <div className="w-1 h-1 bg-primary-colordark-blue rounded-[10px]" />
                    </div>

                    <span className="font-body-14px-bold text-primary-colordark-blue-80">
                      {product.promotion}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
