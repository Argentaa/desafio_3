import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card } from "../../../../components/ui/card";

export const Banner = (): JSX.Element => {
  return (
    <Card className="relative w-full bg-[#003459] rounded-[20px] overflow-hidden h-[378px]">
      <div className="relative w-full h-full overflow-hidden">
        {/* Background elements */}
        <div className="absolute w-[978px] h-[908px] right-[-100px] top-[-360px]">
          <div className="absolute w-[782px] h-[635px] top-[136px] left-[98px] bg-[#fceed5] rounded-[99px] rotate-[25.23deg]" />

          {/* Text content */}
          <div className="absolute top-[423px] left-[186px] [font-family:'SVN-Gilroy-XBold',Helvetica] font-bold text-primary-colordark-blue text-[52px] tracking-[0] leading-[68px] whitespace-nowrap">
            One More Friend
          </div>

          <div className="absolute top-[493px] left-[235px] [font-family:'SVN-Gilroy-Bold',Helvetica] font-bold text-primary-colordark-blue text-4xl tracking-[0] leading-[54px] whitespace-nowrap">
            Thousands More Fun!
          </div>

          <div className="absolute w-[394px] top-[555px] left-[195px] font-body-12px-medium font-[number:var(--body-12px-medium-font-weight)] text-neutral-color80 text-[length:var(--body-12px-medium-font-size)] text-right tracking-[var(--body-12px-medium-letter-spacing)] leading-[var(--body-12px-medium-line-height)] [font-style:var(--body-12px-medium-font-style)]">
            Having a pet means you have more joy, a new friend, a happy person
            who will always be with you to have fun. We have 200+ different pets
            that can meet your needs!
          </div>

          {/* Buttons */}
          <Button className="absolute top-[634px] left-[439px] bg-primary-colordark-blue rounded-[57px] h-auto pt-3.5 pb-2.5 px-7">
            <span className="font-body-16px-medium font-[number:var(--body-16px-medium-font-weight)] text-neutral-color00 text-[length:var(--body-16px-medium-font-size)] tracking-[var(--body-16px-medium-letter-spacing)] leading-[var(--body-16px-medium-line-height)] whitespace-nowrap [font-style:var(--body-16px-medium-font-style)]">
              Explore Now
            </span>
          </Button>

          <Button
            variant="outline"
            className="absolute top-[634px] left-[258px] rounded-[57px] border-[1.5px] border-solid border-[#003459] h-auto flex items-center gap-2 pt-3.5 pb-2.5 px-7"
          >
            <span className="font-body-16px-medium font-[number:var(--body-16px-medium-font-weight)] text-primary-colordark-blue text-[length:var(--body-16px-medium-font-size)] leading-[var(--body-16px-medium-line-height)] tracking-[var(--body-16px-medium-letter-spacing)] whitespace-nowrap [font-style:var(--body-16px-medium-font-style)]">
              View Intro
            </span>
            <img
              className="w-6 h-6"
              alt="Media play circle"
              src="/media---play-circle.svg"
            />
          </Button>
        </div>

        {/* Left side with image */}
        <div className="absolute w-[1067px] h-[1067px] left-[-331px] top-[29px]">
          <div className="bg-primary-colordark-blue-80 absolute w-[788px] h-[788px] top-[139px] left-[139px] rounded-[99px] rotate-[28.25deg]" />

          <img
            className="absolute w-[513px] h-[342px] top-[7px] left-[351px] object-cover"
            alt="Person kissing puppy"
            src="/horizontal-shot-adult-girl-jeans-overalls-kissing-cute-puppy-whi.png"
          />
        </div>
      </div>
    </Card>
  );
};
