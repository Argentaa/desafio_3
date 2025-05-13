import React from "react";
import { Banner } from "./sections/Banner";
import { ContentDiv } from "./sections/ContentDiv";
import { DivWrapper } from "./sections/DivWrapper";
import { Footer } from "./sections/Footer";
import { Frame } from "./sections/Frame/Frame";
import { FrameWrapper } from "./sections/FrameWrapper/FrameWrapper";
import { HeaderDesktop } from "./sections/HeaderDesktop/HeaderDesktop";
import { HeroBanner } from "./sections/HeroBanner";
import { OverlapWrapper } from "./sections/OverlapWrapper/OverlapWrapper";

export const Homepage = (): JSX.Element => {
  return (
    <div className="bg-[#fcfcfc] flex flex-row justify-center w-full">
      <div className="bg-neutral-color00 overflow-hidden w-full max-w-[1440px] relative">
        <HeaderDesktop />
        <div className="w-full rounded-[0px_0px_40px_40px]">
          <HeroBanner />
        </div>

        <Frame />
        <Banner />
        <FrameWrapper />
        <DivWrapper />
        <OverlapWrapper />
        <ContentDiv />
        <Footer />
      </div>
    </div>
  );
};