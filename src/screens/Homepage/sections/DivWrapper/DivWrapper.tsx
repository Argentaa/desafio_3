import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

export const DivWrapper = (): JSX.Element => {
  // Partner logos data for mapping
  const partnerLogos = [
    {
      src: "/image-4-1.png",
      alt: "Partner logo",
      width: "88px",
      height: "64px",
    },
    {
      src: "/image-6-1.png",
      alt: "Partner logo",
      width: "114px",
      height: "114px",
    },
    {
      src: "/image-7-1.png",
      alt: "Partner logo",
      width: "104px",
      height: "46px",
    },
    {
      src: "/image-8-1.png",
      alt: "Partner logo",
      width: "92px",
      height: "64px",
    },
    { src: "/image-9.png", alt: "Partner logo", width: "92px", height: "92px" },
    {
      src: "/image-10.png",
      alt: "Partner logo",
      width: "130px",
      height: "56px",
    },
    {
      src: "/image-11.png",
      alt: "Partner logo",
      width: "116px",
      height: "72px",
    },
  ];

  return (
    <section className="flex flex-col w-full items-center gap-[15px] px-4 md:px-8 lg:px-[130px] py-10">
      <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-4">
        <div className="flex items-end gap-2">
          <span className="font-medium text-black text-base leading-[31px] [font-family:'SVN-Gilroy-Medium',Helvetica]">
            Proud to be part of
          </span>
          <span className="text-primary-colordark-blue text-2xl leading-9 [font-family:'SVN-Gilroy-Bold',Helvetica] font-bold">
            Pet Sellers
          </span>
        </div>

        <Button
          variant="outline"
          className="rounded-[57px] border-[1.5px] border-solid border-[#003459] px-7 py-3 h-auto"
        >
          <span className="font-body-14px-medium text-primary-colordark-blue">
            View all our sellers
          </span>
          <ChevronRightIcon className="w-5 h-5 ml-2" />
        </Button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 w-full gap-5">
        {partnerLogos.map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-2.5 h-28"
          >
            <img
              className="object-contain max-w-full max-h-full"
              alt={logo.alt}
              src={logo.src}
              style={{
                width: logo.width,
                height: logo.height,
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
