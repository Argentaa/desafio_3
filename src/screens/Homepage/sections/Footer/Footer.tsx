import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";

export const Footer = (): JSX.Element => {
  // Navigation links data
  const navLinks = [
    { title: "Home", href: "#" },
    { title: "Category", href: "#" },
    { title: "About", href: "#" },
    { title: "Contact", href: "#" },
  ];

  // Social media icons data
  const socialIcons = [
    { icon: <FacebookIcon className="w-6 h-6" />, href: "#" },
    { icon: <TwitterIcon className="w-6 h-6" />, href: "#" },
    { icon: <InstagramIcon className="w-6 h-6" />, href: "#" },
    { icon: <YoutubeIcon className="w-6 h-6" />, href: "#" },
  ];

  return (
    <footer className="relative w-full h-[440px] bg-transparent rounded-[40px_40px_0px_0px] overflow-hidden [background:linear-gradient(134deg,rgba(252,238,213,1)_6%,rgba(252,238,213,1)_75%,rgba(255,231,186,1)_100%)]">
      <div className="mx-auto max-w-[1180px] h-full px-[130px] pt-20 pb-10 flex flex-col justify-between">
        {/* Subscription section */}
        <div className="flex flex-col gap-10 border-b border-neutral-color20 pb-10">
          <div className="flex items-start gap-5 p-8 bg-primary-colordark-blue rounded-2xl">
            <div className="w-[389px] [font-family:'SVN-Gilroy-Bold',Helvetica] font-bold text-neutral-color00 text-2xl leading-9">
              Register Now So You Don&#39;t Miss Our Programs
            </div>

            <div className="flex w-[707px] items-center gap-3 p-3 bg-white rounded-[14px]">
              <div className="flex items-center gap-2.5 px-7 py-3.5 flex-1 grow bg-white rounded-lg border border-solid border-neutral-color40">
                <Input
                  className="border-0 shadow-none p-0 h-auto font-body-14px-medium text-neutral-color40"
                  placeholder="Enter your Email"
                />
              </div>

              <Button className="w-[163px] gap-2.5 bg-primary-colordark-blue rounded-lg py-3.5 px-7 h-auto">
                <span className="font-body-16px-medium text-neutral-color00 whitespace-nowrap">
                  Subcribe Now
                </span>
              </Button>
            </div>
          </div>

          <div className="flex justify-between items-start">
            <nav className="flex items-start gap-[60px]">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="font-body-16px-medium text-neutral-color100"
                >
                  {link.title}
                </a>
              ))}
            </nav>

            <div className="flex items-start gap-10">
              {socialIcons.map((social, index) => (
                <a key={index} href={social.href}>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer bottom section */}
      <div className="absolute w-[1180px] h-10 bottom-[40px] left-[130px] flex justify-between items-center">
        <div className="font-body-14px-medium text-neutral-color60">
          © 2022 Monito. All rights reserved.
        </div>

        <div className="absolute w-[115px] h-10 left-1/2 -translate-x-1/2">
          <img
            className="absolute w-[55px] h-[7px] top-[33px] left-[30px]"
            alt="Group"
            src="/group-19.png"
          />
          <img
            className="absolute w-[114px] h-[27px] top-0 left-0"
            alt="Group"
            src="/group-20.png"
          />
        </div>

        <div className="font-body-14px-medium text-neutral-color60">
          Terms of
          Service&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Privacy
          Policy
        </div>
      </div>
    </footer>
  );
};
