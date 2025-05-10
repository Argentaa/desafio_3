import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { useAppContext } from "../../../../context/AppContext";

export const FrameByAnima = (): JSX.Element => {
  const { featuredProducts } = useAppContext();

  // Format price to VND
  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price * 23000); // Assuming 1 USD = 23,000 VND
  };

  return (
    <section className="w-full py-8 md:py-16 px-4 md:px-8 lg:px-32">
      <div className="flex flex-col gap-0.5 mb-8">
        <h3 className="font-body-16px-medium text-black text-center md:text-left">What's new?</h3>
        <h2 className="[font-family:'SVN-Gilroy-Bold',Helvetica] font-bold text-primary-colordark-blue text-xl md:text-2xl leading-9 text-center md:text-left">   
          Take A Look At Some Of Our Products
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
        {featuredProducts.map((product) => (
          <Card
            key={product.id}
            className="rounded-xl shadow-[0px_4px_28px_-2px_#00000014] bg-neutral-color00 border-none"
          >
            <CardContent className="p-2">
              <div className="relative w-full aspect-square bg-white rounded-[10px] overflow-hidden mb-2">
                <img
                  className="absolute w-full h-full object-cover"
                  alt={product.name}
                  src={product.main_image_url || '/images/placeholder.jpg'}
                />
              </div>

              <div className="p-2 pb-5">
                <div className="flex flex-col gap-1">
                  <h3 className="font-body-16px-bold text-neutral-color100 line-clamp-1">
                    {product.name}
                  </h3>

                  <div className="flex flex-wrap items-start gap-x-3 gap-y-1 w-full">
                    <div className="flex items-start gap-1.5">
                      <span className="font-body-12px-medium text-neutral-color60">
                        Stock:
                      </span>
                      <span className="font-body-12px-bold text-neutral-color60">
                        {product.stock} units
                      </span>
                    </div>
                  </div>

                  <p className="font-body-14px-bold text-neutral-color100">
                    {formatPrice(product.price)}
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
