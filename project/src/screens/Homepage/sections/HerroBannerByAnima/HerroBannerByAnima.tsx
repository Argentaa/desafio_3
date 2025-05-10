import { PlayIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

export const HerroBannerByAnima = (): JSX.Element => {
  return (
    <section className="relative w-full min-h-[500px] md:h-[695px] rounded-b-[40px] overflow-hidden [background:linear-gradient(134deg,rgba(252,238,213,1)_6%,rgba(252,238,213,1)_75%,rgba(255,231,186,1)_100%)]">
      <div className="relative w-full h-full pt-[84px] overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute w-[635px] h-[635px] top-[231px] right-[-100px] md:block hidden bg-primary-colordark-blue rounded-[99px] rotate-[9.36deg]" />
        <div className="absolute w-[635px] h-[635px] top-[201px] right-[43px] md:block hidden bg-secondary-colormon-yellow rounded-[99px] rotate-[25.23deg]" />
        <div className="absolute w-[635px] h-[635px] top-[603px] left-[123px] md:block hidden bg-secondary-colormon-yellow rounded-[99px] rotate-[56.47deg] opacity-40" />
        <div className="absolute w-[67px] h-[67px] top-[90px] left-[214px] md:block hidden bg-secondary-colormon-yellow rounded-[20px] rotate-[25.23deg]" />
        <div className="absolute w-[15px] h-[15px] top-[66px] left-[850px] md:block hidden bg-[#f7dba7] rounded rotate-[20.79deg]" />
        <div className="absolute w-[27px] h-[27px] top-[120px] left-[823px] md:block hidden bg-[#f7dba7] rounded-[9px] rotate-[-22.85deg]" />
        <div className="absolute w-[21px] h-[21px] top-[129px] left-[822px] md:block hidden bg-[#002a48] rounded-md rotate-[-43.01deg]" />
        <div className="absolute w-[635px] h-[635px] top-[-592px] left-[-230px] md:block hidden bg-secondary-colormon-yellow rounded-[99px] rotate-[25.23deg]" />

        {/* Main content container */}
        <div className="relative z-10 mx-auto max-w-[1440px] px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Left content - text and buttons */}
            <div className="w-full lg:w-1/2 pt-10 text-center lg:text-left">
              <h1 className="[font-family:'SVN-Gilroy-XBold',Helvetica] font-bold text-primary-colordark-blue-80 text-4xl md:text-6xl tracking-[0] leading-tight md:leading-[68px]">
                One More Friend
              </h1>
              <h2 className="mt-4 [font-family:'SVN-Gilroy-Bold',Helvetica] font-bold text-primary-colordark-blue-80 text-3xl md:text-[46px] tracking-[0] leading-tight md:leading-[60px]">
                Thousands More Fun!
              </h2>
              <p className="mt-6 w-full max-w-[480px] mx-auto lg:mx-0 font-body-16px-medium text-neutral-color80">
                Having a pet means you have more joy, a new friend, a happy
                person who will always be with you to have fun. We have 200+
                different pets that can meet your needs!
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-10">
                <Button
                  variant="outline"
                  className="rounded-[57px] border-[1.5px] border-solid border-[#003459] bg-transparent h-auto pt-3.5 pb-2.5 px-7"
                >
                  <span className="font-body-16px-medium text-primary-colordark-blue">
                    View Intro
                  </span>
                  <PlayIcon className="ml-2 w-6 h-6" />
                </Button>

                <Button className="rounded-[57px] bg-primary-colordark-blue h-auto pt-3.5 pb-2.5 px-7">
                  <span className="font-body-16px-medium text-neutral-color00">
                    Explore Now
                  </span>
                </Button>
              </div>
            </div>

            {/* Right content - image */}
            <div className="w-full lg:w-1/2 relative mt-10 lg:mt-0">
              <img
                className="w-full max-w-[910px] h-auto lg:absolute lg:top-[-84px] lg:right-[-100px]"
                alt="Woman holding a dog and laughing"
                src="/good-humored-woman-holds-dog-laughing-pink-background-emotional-.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};