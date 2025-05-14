"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Homepage = void 0;
const react_1 = __importDefault(require("react"));
const Banner_1 = require("./sections/Banner");
const ContentDiv_1 = require("./sections/ContentDiv");
const DivWrapper_1 = require("./sections/DivWrapper");
const Footer_1 = require("./sections/Footer");
const Frame_1 = require("./sections/Frame/Frame");
const FrameWrapper_1 = require("./sections/FrameWrapper/FrameWrapper");
const HeaderDesktop_1 = require("./sections/HeaderDesktop/HeaderDesktop");
const HeroBanner_1 = require("./sections/HeroBanner");
const OverlapWrapper_1 = require("./sections/OverlapWrapper/OverlapWrapper");
const Homepage = () => {
    return (<div className="bg-[#fcfcfc] flex flex-row justify-center w-full">
      <div className="bg-neutral-color00 overflow-hidden w-full max-w-[1440px] relative">
        <HeaderDesktop_1.HeaderDesktop />
        <div className="w-full rounded-[0px_0px_40px_40px]">
          <HeroBanner_1.HeroBanner />
        </div>

        <Frame_1.Frame />
        <Banner_1.Banner />
        <FrameWrapper_1.FrameWrapper />
        <DivWrapper_1.DivWrapper />
        <OverlapWrapper_1.OverlapWrapper />
        <ContentDiv_1.ContentDiv />
        <Footer_1.Footer />
      </div>
    </div>);
};
exports.Homepage = Homepage;
