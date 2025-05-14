"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OverlapWrapper = void 0;
const react_1 = __importDefault(require("react"));
const button_1 = require("../../../../components/ui/button");
const card_1 = require("../../../../components/ui/card");
const OverlapWrapper = () => {
    return (<section className="relative w-full max-w-[1180px] h-[378px] mx-auto rounded-[20px] overflow-hidden bg-[#ffb774] rotate-180">
      <div className="relative w-[1815px] h-[1455px] top-[-717px] left-[-331px]">
        <div className="absolute w-[978px] h-[908px] top-[547px] left-[837px]">
          <card_1.Card className="absolute w-[782px] h-[635px] top-[136px] left-[98px] bg-[#fceed5] rounded-[99px] rotate-[25.23deg] border-none shadow-none"/>

          <h2 className="absolute top-[415px] left-[364px] rotate-180 [font-family:'SVN-Gilroy-XBold',Helvetica] font-bold text-primary-colordark-blue text-[52px] tracking-[0] leading-[68px] whitespace-nowrap">
            Adoption
          </h2>

          <h3 className="absolute top-[359px] left-[141px] rotate-180 [font-family:'SVN-Gilroy-Bold',Helvetica] font-bold text-primary-colordark-blue text-4xl tracking-[0] leading-[54px] whitespace-nowrap">
            We Need Help. So Do They.
          </h3>

          <p className="absolute w-[394px] top-[315px] left-[195px] rotate-180 font-body-12px-medium font-[number:var(--body-12px-medium-font-weight)] text-neutral-color80 text-[length:var(--body-12px-medium-font-size)] tracking-[var(--body-12px-medium-letter-spacing)] leading-[var(--body-12px-medium-line-height)] [font-style:var(--body-12px-medium-font-style)]">
            Adopt a pet and give it a home, <br />
            it will be love you back unconditionally.
          </p>

          <button_1.Button className="absolute w-[163px] top-[226px] left-[439px] bg-primary-colordark-blue rounded-[57px] rotate-180 pt-3.5 pb-2.5 px-7">
            <span className="mt-[-5.00px] font-body-16px-medium font-[number:var(--body-16px-medium-font-weight)] text-neutral-color00 text-[length:var(--body-16px-medium-font-size)] leading-[var(--body-16px-medium-line-height)] tracking-[var(--body-16px-medium-letter-spacing)] whitespace-nowrap [font-style:var(--body-16px-medium-font-style)]">
              Explore Now
            </span>
          </button_1.Button>

          <button_1.Button variant="outline" className="absolute flex gap-2 top-[226px] left-[258px] rounded-[57px] border-[1.5px] border-solid border-[#003459] rotate-180 pt-3.5 pb-2.5 px-7">
            <span className="mt-[-5.50px] font-body-16px-medium font-[number:var(--body-16px-medium-font-weight)] text-primary-colordark-blue text-[length:var(--body-16px-medium-font-size)] leading-[var(--body-16px-medium-line-height)] tracking-[var(--body-16px-medium-letter-spacing)] whitespace-nowrap [font-style:var(--body-16px-medium-font-style)]">
              View Intro
            </span>
            <img className="mt-[-4.00px] -rotate-180 relative w-6 h-6" alt="Media play circle" src="/media---play-circle.svg"/>
          </button_1.Button>

          <img className="absolute w-[42px] h-[38px] top-[436px] left-[306px] -rotate-180" alt="Fontisto paw" src="/fontisto-paw.svg"/>
        </div>

        <div className="absolute w-[1067px] h-[1095px] top-0 left-0">
          <div className="[background:linear-gradient(134deg,rgba(252,238,213,1)_6%,rgba(252,238,213,1)_75%,rgba(255,231,186,1)_100%)] opacity-30 absolute w-[788px] h-[788px] top-[139px] left-[139px] rounded-[99px] rotate-[28.25deg]"/>

          <img className="absolute w-[584px] h-[378px] top-[717px] left-[331px] -rotate-180 object-cover" alt="Pet image" src="/pngegg--4--1.png"/>
        </div>
      </div>
    </section>);
};
exports.OverlapWrapper = OverlapWrapper;
