import React from "react";
import { Card, CardContent } from "../../components/ui/card";
import { Footer } from "./sections/Footer";
import { Frame } from "./sections/Frame";
import { FrameWrapper } from "./sections/FrameWrapper";
import { HeaderDesktop } from "./sections/HeaderDesktop";

export const ProductDetail = (): JSX.Element => {
  // Customer images data for carousel
  const customerImages = [
    { src: "/image-22-4.png", alt: "Customer image 1" },
    { src: "/image-22-1.png", alt: "Customer image 2" },
    { src: "/image-22-2.png", alt: "Customer image 3" },
    { src: "/image-22-3.png", alt: "Customer image 4" },
    { src: "/image-23.png", alt: "Customer image 5" },
  ];

  return (
    <div className="bg-[#fcfcfc] flex flex-row justify-center w-full">
      <div className="bg-neutral-color00 overflow-hidden w-full max-w-[1440px] relative">
        <HeaderDesktop />
        <div className="flex flex-col items-center gap-5 mt-[120px]">
          <Frame />

          <Card className="flex flex-col w-full max-w-[1180px] items-center gap-6 pt-6 pb-[26px] px-0 bg-neutral-color00 rounded-[20px]">
            <CardContent className="flex flex-col w-full max-w-[1149px] items-start gap-3 pl-4 pr-0 py-0">
              <h2 className="w-[302px] mt-[-1.00px] font-heading-24px-bold font-[number:var(--heading-24px-bold-font-weight)] text-neutral-color100 text-[length:var(--heading-24px-bold-font-size)] tracking-[var(--heading-24px-bold-letter-spacing)] leading-[var(--heading-24px-bold-line-height)] [font-style:var(--heading-24px-bold-font-style)]">
                Our lovely customer
              </h2>

              <div className="relative w-full h-[340px] overflow-hidden">
                <div className="flex space-x-3">
                  {customerImages.slice(0, 4).map((image, index) => (
                    <div
                      key={index}
                      className={`w-[248px] h-[340px] rounded-[10px] bg-cover bg-[50%_50%]`}
                      style={{ backgroundImage: `url(${image.src})` }}
                    />
                  ))}

                  <div className="w-[248px] h-[340px] rounded-[10px] overflow-hidden">
                    <div className="relative w-[109px] h-[340px] bg-[url(/image-22-4.png)] bg-cover bg-[50%_50%]">
                      <img
                        className="absolute w-[109px] h-[340px] top-0 left-0 object-cover"
                        alt="Image"
                        src="/image-23.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>

            <div className="inline-flex items-start gap-1.5">
              {[0, 1, 2, 3, 4, 5].map((index) => (
                <div
                  key={index}
                  className={`${
                    index === 0
                      ? "w-[22.5px] bg-primary-colordark-blue"
                      : "w-[9px] bg-neutral-color20"
                  } h-[9px] rounded-[7.5px]`}
                />
              ))}
            </div>
          </Card>

          <FrameWrapper />
          <Footer />
        </div>
      </div>
    </div>
  );
};
