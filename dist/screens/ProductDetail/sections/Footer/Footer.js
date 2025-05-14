"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Footer = void 0;
const lucide_react_1 = require("lucide-react");
const react_1 = __importDefault(require("react"));
const button_1 = require("../../../../components/ui/button");
const card_1 = require("../../../../components/ui/card");
const input_1 = require("../../../../components/ui/input");
const Footer = () => {
    // Navigation links data
    const navLinks = ["Home", "Category", "About", "Contact"];
    // Social media icons data
    const socialIcons = [
        { icon: <lucide_react_1.FacebookIcon className="w-6 h-6"/>, alt: "Facebook" },
        { icon: <lucide_react_1.TwitterIcon className="w-6 h-6"/>, alt: "Twitter" },
        { icon: <lucide_react_1.InstagramIcon className="w-6 h-6"/>, alt: "Instagram" },
        { icon: <lucide_react_1.YoutubeIcon className="w-6 h-6"/>, alt: "Youtube" },
    ];
    return (<footer className="w-full h-[440px] bg-transparent rounded-[40px_40px_0px_0px] overflow-hidden [background:linear-gradient(134deg,rgba(252,238,213,1)_6%,rgba(252,238,213,1)_75%,rgba(255,231,186,1)_100%)]">
      <div className="flex flex-col h-full px-[130px]">
        {/* Main content */}
        <div className="flex flex-col items-start gap-10 pt-20 pb-10 border-b border-[#ccd1d2]">
          {/* Subscription card */}
          <card_1.Card className="w-full bg-primary-colordark-blue rounded-2xl border-none">
            <card_1.CardContent className="flex items-start gap-5 p-8">
              <div className="w-[389px] [font-family:'SVN-Gilroy-Bold',Helvetica] font-bold text-neutral-color00 text-2xl leading-9">
                Register Now So You Don&#39;t Miss Our Programs
              </div>

              <div className="flex w-[707px] items-center gap-3 p-3 bg-white rounded-[14px]">
                <div className="flex items-center gap-2.5 px-7 py-3.5 flex-1 grow bg-white rounded-lg border border-solid border-[#99a2a5]">
                  <input_1.Input className="border-none shadow-none font-body-14px-medium text-neutral-color40 focus-visible:ring-0 p-0" placeholder="Enter your Email"/>
                </div>

                <button_1.Button className="w-[163px] py-3.5 px-7 bg-primary-colordark-blue rounded-lg hover:bg-primary-colordark-blue-80">
                  <span className="font-body-16px-medium text-neutral-color00 whitespace-nowrap">
                    Subcribe Now
                  </span>
                </button_1.Button>
              </div>
            </card_1.CardContent>
          </card_1.Card>

          {/* Navigation and social links */}
          <div className="flex justify-between w-full">
            <div className="flex items-start gap-[60px]">
              {navLinks.map((link, index) => (<a key={index} href="#" className="font-body-16px-medium text-neutral-color100 whitespace-nowrap">
                  {link}
                </a>))}
            </div>

            <div className="flex items-start gap-10">
              {socialIcons.map((social, index) => (<a key={index} href="#" aria-label={social.alt}>
                  {social.icon}
                </a>))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="flex justify-between items-center px-[130px] mt-[40px]">
        <div className="font-body-14px-medium text-neutral-color60 whitespace-nowrap">
          © 2022 Monito. All rights reserved.
        </div>

        <div className="w-[115px] h-10 overflow-hidden">
          <div className="relative w-[114px] h-[27px]">
            <img className="absolute w-[55px] h-[7px] top-0 left-0" alt="Group" src="/group-24.png"/>
            <img className="absolute w-[114px] h-[27px] top-0 left-0" alt="Group" src="/group-25.png"/>
          </div>
        </div>

        <div className="font-body-14px-medium text-neutral-color60 whitespace-nowrap">
          <a href="#" className="mr-10">
            Terms of Service
          </a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>);
};
exports.Footer = Footer;
