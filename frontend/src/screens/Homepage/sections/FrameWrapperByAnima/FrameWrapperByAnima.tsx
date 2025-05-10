import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const FrameWrapperByAnima = (): JSX.Element => {
  // Product data for mapping
  const products = [
    {
      id: 1,
      image: "/image-2-9.png",
      title: "Reflex Plus Adult Cat Food Salmon",
      productType: "Dog Food",
      size: "385gm",
      price: "140.000 VND",
      promotion: "Free Toy & Free Shaker",
      groupImage: "/group-3.png",
      groupImage2: "/group-4.png",
    },
    {
      id: 2,
      image: "/image-2-10.png",
      title: "Reflex Plus Adult Cat Food Salmon",
      productType: "Cat Food",
      size: "1.5kg",
      price: "165.000 VND",
      promotion: "Free Toy & Free Shaker",
      groupImage: "/group-5.png",
      groupImage2: "/group-6.png",
    },
    {
      id: 3,
      image: "/image-2-11.png",
      title: "Cat scratching ball toy kitten sisal rope ball",
      productType: "Toy",
      price: "1.100.000 VND",
      promotion: "Free Cat Food",
      groupImage: "/group-7.png",
      groupImage2: "/group-8.png",
    },
    {
      id: 4,
      image: "/image-2-12.png",
      title: "Cute Pet Cat Warm Nest",
      productType: "Toy",
      price: "410.000 VND",
      promotion: "Free Cat Food",
      groupImage: "/group-9.png",
      groupImage2: "/group-10.png",
    },
    {
      id: 5,
      image: "/image-2-13.png",
      title: "NaturVet Dogs - Omega-Gold Plus Salmon Oil",
      productType: "Dog Food",
      size: "385gm",
      price: "350.000 VND",
      promotion: "Free Toy & Free Shaker",
      groupImage: "/group-11.png",
      groupImage2: "/group-12.png",
    },
    {
      id: 6,
      image: "/image-2-14.png",
      title: "Costumes Fashion Pet Clother Cowboy Rider",
      productType: "Costume",
      size: "1.5kg",
      price: "500.000 VND",
      promotion: "Free Toy & Free Shaker",
      groupImage: "/group-13.png",
      groupImage2: "/group-14.png",
    },
    {
      id: 7,
      image: "/image-2-15.png",
      title: "Costumes Chicken Drumsti ck Headband",
      productType: "Costume",
      price: "400.000 VND",
      promotion: "Free Cat Food",
      groupImage: "/group-15.png",
      groupImage2: "/group-16.png",
    },
    {
      id: 8,
      image: "/image-2-16.png",
      title: "Plush Pet Toy",
      productType: "Toy",
      price: "250.000 VND",
      promotion: "Free Food & Shaker",
      groupImage: "/group-17.png",
      groupImage2: "/group-18.png",
    },
  ];

  // Gift icon component
  const GiftIcon = ({
    groupImage,
    groupImage2,
  }: { groupImage: string; groupImage2: string }) => (
    <div className="relative w-5 h-5 rotate-180">
      <div className="relative w-[17px] h-5 left-px">
        <div className="relative h-5">
          <img
            className="absolute w-[15px] h-[11px] top-[9px] left-0.5"
            alt="Vector"
            src="/vector-2.svg"
          />
          <img
            className="absolute w-2 h-[11px] top-[9px] left-0.5"
            alt="Vector"
            src="/vector-6.svg"
          />
          <img
            className="absolute w-2.5 h-[7px] top-0 left-0.5"
            alt="Vector"
            src="/vector.svg"
          />
          <img
            className="absolute w-[7px] h-[7px] top-0 left-0.5"
            alt="Vector"
            src="/vector-5.svg"
          />
          <img
            className="absolute w-[17px] h-2.5 top-0.5 left-0"
            alt="Vector"
            src="/vector-3.svg"
          />
          <img
            className="absolute w-2.5 h-2 top-1 left-0"
            alt="Vector"
            src="/vector-1.svg"
          />
          <img
            className="absolute w-[5px] h-4 top-1 left-1.5"
            alt="Group"
            src={groupImage}
          />
          <img
            className="absolute w-1 h-4 top-1 left-1.5"
            alt="Group"
            src={groupImage2}
          />
        </div>
      </div>
    </div>
  );

  // Product card component
  const ProductCard = ({ product }: { product: (typeof products)[0] }) => (
    <Card className="flex flex-col items-start gap-2 pt-2 pb-0 px-2 bg-neutral-color00 rounded-xl shadow-[0px_4px_28px_-2px_#00000014] border-none">
      <div className="relative w-full h-[264px] bg-white rounded-[10px] overflow-hidden">
        <img
          className="w-full h-full object-cover"
          alt={product.title}
          src={product.image}
        />
      </div>
      <CardContent className="flex flex-col items-start gap-2.5 pt-2 pb-5 px-2 w-full p-0">
        <div className="flex flex-col items-start gap-1 w-full">
          <h3 className="self-stretch mt-[-1.00px] font-body-16px-bold font-[number:var(--body-16px-bold-font-weight)] text-neutral-color100 text-[length:var(--body-16px-bold-font-size)] tracking-[var(--body-16px-bold-letter-spacing)] leading-[var(--body-16px-bold-line-height)]">
            {product.title}
          </h3>
          <div className="flex items-start gap-1 self-stretch w-full">
            <div className="flex items-start gap-1.5">
              <span className="mt-[-1.00px] font-body-12px-medium font-[number:var(--body-12px-medium-font-weight)] text-neutral-color60 text-[length:var(--body-12px-medium-font-size)] tracking-[var(--body-12px-medium-letter-spacing)] leading-[var(--body-12px-medium-line-height)] whitespace-nowrap">
                Product:
              </span>
              <span className="mt-[-1.00px] font-body-12px-bold font-[number:var(--body-12px-bold-font-weight)] text-neutral-color60 text-[length:var(--body-12px-bold-font-size)] tracking-[var(--body-12px-bold-letter-spacing)] leading-[var(--body-12px-bold-line-height)] whitespace-nowrap">
                {product.productType}
              </span>
            </div>
            {product.size && (
              <>
                <span className="mt-[-1.00px] font-body-12px-medium font-[number:var(--body-12px-medium-font-weight)] text-neutral-color60 text-[length:var(--body-12px-medium-font-size)] tracking-[var(--body-12px-medium-letter-spacing)] leading-[var(--body-12px-medium-line-height)] whitespace-nowrap">
                  {""}
                </span>
                <div className="flex items-start gap-1.5">
                  <span className="mt-[-1.00px] font-body-12px-medium font-[number:var(--body-12px-medium-font-weight)] text-neutral-color60 text-[length:var(--body-12px-medium-font-size)] tracking-[var(--body-12px-medium-letter-spacing)] leading-[var(--body-12px-medium-line-height)] whitespace-nowrap">
                    Size:
                  </span>
                  <span className="mt-[-1.00px] font-body-12px-bold font-[number:var(--body-12px-bold-font-weight)] text-neutral-color60 text-[length:var(--body-12px-bold-font-size)] tracking-[var(--body-12px-bold-letter-spacing)] leading-[var(--body-12px-bold-line-height)] whitespace-nowrap">
                    {product.size}
                  </span>
                </div>
              </>
            )}
          </div>
          <p className="w-full font-body-14px-bold font-[number:var(--body-14px-bold-font-weight)] text-neutral-color100 text-[length:var(--body-14px-bold-font-size)] tracking-[var(--body-14px-bold-letter-spacing)] leading-[var(--body-14px-bold-line-height)]">
            {product.price}
          </p>
        </div>
        <Badge className="flex items-center gap-0.5 pt-1.5 pb-1 px-2.5 self-stretch w-full bg-secondary-colormon-yellow-40 rounded-lg text-primary-colordark-blue-80 hover:bg-secondary-colormon-yellow-40">
          <GiftIcon
            groupImage={product.groupImage}
            groupImage2={product.groupImage2}
          />
          <div className="inline-flex items-center justify-center gap-2.5 px-2 py-2.5">
            <div className="w-1 h-1 bg-primary-colordark-blue rounded-[10px]" />
          </div>
          <span className="font-body-14px-bold font-[number:var(--body-14px-bold-font-weight)] text-[length:var(--body-14px-bold-font-size)] tracking-[var(--body-14px-bold-letter-spacing)] leading-[var(--body-14px-bold-line-height)] whitespace-nowrap">
            {product.promotion}
          </span>
        </Badge>
      </CardContent>
    </Card>
  );

  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <div className="flex flex-col gap-8">
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-0.5">
              <p className="font-body-16px-medium font-[number:var(--body-16px-medium-font-weight)] text-black text-[length:var(--body-16px-medium-font-size)] tracking-[var(--body-16px-medium-letter-spacing)] leading-[var(--body-16px-medium-line-height)]">
                Hard to choose right products for your pets?
              </p>
              <h2 className="[font-family:'SVN-Gilroy-Bold',Helvetica] font-bold text-primary-colordark-blue text-2xl tracking-[0] leading-9">
                Our Products
              </h2>
            </div>
            <Button
              variant="outline"
              className="gap-2 px-7 py-3 border-[1.5px] border-solid border-primary-colordark-blue rounded-[57px]"
            >
              <span className="font-body-14px-medium font-[number:var(--body-14px-medium-font-weight)] text-primary-colordark-blue text-[length:var(--body-14px-medium-font-size)] leading-[var(--body-14px-medium-line-height)] tracking-[var(--body-14px-medium-letter-spacing)]">
                View more
              </span>
              <ChevronRightIcon className="w-5 h-5" />
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {products.slice(4, 8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
