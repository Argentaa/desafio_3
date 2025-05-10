import { SearchIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const HeaderDesktopByAnima = (): JSX.Element => {
  // Navigation menu items with their respective paths
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Category", path: "/category" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white flex w-full items-center justify-between px-4 md:px-[130px] py-7 border-b border-neutral-color20/30">
      <div className="flex items-center gap-12">
        {/* Logo */}
        <a href="/" className="relative w-[115px] h-10">
          <img
            className="absolute w-[55px] h-[7px] top-[33px] left-[30px]"
            alt="Group"
            src="/images/group.png"
          />
          <img
            className="absolute w-[114px] h-[27px] top-0 left-0"
            alt="Group"
            src="/images/group-1.png"
          />
        </a>

        {/* Navigation Menu */}
        <NavigationMenu>
          <NavigationMenuList className="flex items-start gap-12">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.name}>
                <NavigationMenuLink
                  href={item.path}
                  className="font-body-16px-bold text-primary-colordark-blue hover:text-primary-colordark-blue/80 transition-colors"
                >
                  {item.name}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="flex items-center gap-3.5">
        {/* Search Bar */}
        <div className="hidden md:flex items-center gap-3 pl-4 pr-5 py-3 bg-neutral-color00 rounded-[46px]">
          <SearchIcon className="w-5 h-5 text-neutral-color40" />
          <Input
            className="border-0 bg-transparent p-0 h-auto font-body-14px-medium text-neutral-color40 placeholder:text-neutral-color40 focus-visible:ring-0 focus-visible:ring-offset-0"
            type="text"
            placeholder="Search something here!"
          />
        </div>

        {/* Join Community Button */}
        <Button
          asChild
          className="h-11 rounded-[57px] bg-primary-colordark-blue text-neutral-color00 font-body-16px-bold px-7"
        >
          <a href="/join">Join the community</a>
        </Button>

        {/* Currency Selector */}
        <div className="hidden md:flex items-center justify-end gap-1 pt-2.5 pb-2 px-2">
          <div className="flex items-center gap-1.5">
            <div className="relative w-[21px] h-[21px]">
              <div className="relative w-4 h-4 top-0.5 left-[3px] bg-[url(/images/group-2.png)] bg-[100%_100%]" />
            </div>
            <div className="[font-family:'SVN-Gilroy-Medium',Helvetica] font-medium text-primary-colordark-blue-80 text-base">
              VND
            </div>
          </div>
          <img
            className="w-6 h-6"
            alt="Arrow caret down"
            src="/images/arrow-caret-down-sm.svg"
          />
        </div>
      </div>
    </header>
  );
};