import React from "react";
import { BannerByAnima } from "./sections/BannerByAnima";
import { DivByAnima } from "./sections/DivByAnima";
import { DivWrapperByAnima } from "./sections/DivWrapperByAnima";
import { FooterByAnima } from "./sections/FooterByAnima";
import { FrameByAnima } from "./sections/FrameByAnima/FrameByAnima";
import { FrameWrapperByAnima } from "./sections/FrameWrapperByAnima/FrameWrapperByAnima";
import { HeaderDesktopByAnima } from "./sections/HeaderDesktopByAnima/HeaderDesktopByAnima";
import { HerroBannerByAnima } from "./sections/HerroBannerByAnima";
import { OverlapWrapperByAnima } from "./sections/OverlapWrapperByAnima/OverlapWrapperByAnima";
import { useAppContext } from "../../context/AppContext";
import { ApiStatus } from "../../components/ApiStatus";

export const Homepage = (): JSX.Element => {
  const { isLoading, error } = useAppContext();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-2xl font-bold">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-2xl font-bold text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="bg-[#fcfcfc] flex flex-col min-h-screen w-full">
      <HeaderDesktopByAnima />
      <main className="flex-1 w-full max-w-[1440px] mx-auto">
        <div className="w-full rounded-[0px_0px_40px_40px] mt-[100px]">
          <HerroBannerByAnima />
        </div>

        <FrameByAnima />
        <BannerByAnima />
        <FrameWrapperByAnima />
        <DivWrapperByAnima />
        <OverlapWrapperByAnima />
        <DivByAnima />
      </main>
      <FooterByAnima />
    </div>
  );
};
