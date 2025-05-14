import { SearchIcon } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const HeaderDesktop = (): JSX.Element => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("VND");

  // Navigation menu items with their corresponding sections
  const navItems = [
    { title: "Home", href: "/" },
    { title: "Category", href: "/category" },
    { title: "About", href: "#about" },
    { title: "Contact", href: "#contact" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality here
    console.log("Searching for:", searchQuery);
  };

  const handleCurrencyChange = () => {
    // Toggle between VND and USD for this example
    setSelectedCurrency(selectedCurrency === "VND" ? "USD" : "VND");
  };

  const handleJoinCommunity = () => {
    // Implement join community functionality here
    console.log("Joining community");
  };

  const handleNavigation = (href: string) => {
    // If it's an anchor link, scroll to the element
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    // For regular links, React Router will handle navigation
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="flex w-full items-center justify-between px-[130px] py-7 border-b border-neutral-color20/30">
        <div className="flex items-center gap-12">
          {/* Logo */}
          <a href="#" className="relative w-[115px] h-10">
            <img
              className="absolute w-[55px] h-[7px] top-[33px] left-[30px]"
              alt="Group"
              src="/group.png"
            />
            <img
              className="absolute w-[114px] h-[27px] top-0 left-0"
              alt="Group"
              src="/group-1.png"
            />
          </a>

          {/* Navigation Menu */}
          <NavigationMenu>
            <NavigationMenuList className="flex items-start gap-12">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                    {item.href.startsWith('#') ? (
                    <NavigationMenuLink
                      className="font-body-16px-bold text-primary-colordark-blue cursor-pointer hover:text-primary-colordark-blue-80 transition-colors"
                      onClick={() => handleNavigation(item.href)}
                    >
                      {item.title}
                    </NavigationMenuLink>
                  ) : (
                    <Link
                      to={item.href}
                      className="font-body-16px-bold text-primary-colordark-blue cursor-pointer hover:text-primary-colordark-blue-80 transition-colors"
                    >
                      {item.title}
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-3.5">
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex items-center gap-3 pl-4 pr-5 py-3 bg-neutral-color00 rounded-[46px]">
            <SearchIcon className="w-5 h-5 text-neutral-color40" />
            <Input
              className="border-0 bg-transparent p-0 h-auto font-body-14px-medium text-neutral-color40 placeholder:text-neutral-color40 focus-visible:ring-0 focus-visible:ring-offset-0"
              type="text"
              placeholder="Search something here!"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>

          {/* Join Community Button */}
          <Button
            onClick={handleJoinCommunity}
            className="h-11 rounded-[57px] bg-primary-colordark-blue text-neutral-color00 font-body-16px-bold px-7 hover:bg-primary-colordark-blue-80 transition-colors"
          >
            Join the community
          </Button>

          {/* Currency Selector */}
          <button
            onClick={handleCurrencyChange}
            className="flex items-center justify-end gap-1 pt-2.5 pb-2 px-2 hover:bg-neutral-color20/10 rounded-lg transition-colors"
          >
            <div className="flex items-center gap-1.5">
              <div className="relative w-[21px] h-[21px]">
                <div className="relative w-4 h-4 top-0.5 left-[3px] bg-[url(/group-2.png)] bg-[100%_100%]" />
              </div>
              <div className="[font-family:'SVN-Gilroy-Medium',Helvetica] font-medium text-primary-colordark-blue-80 text-base">
                {selectedCurrency}
              </div>
            </div>
            <img
              className="w-6 h-6"
              alt="Arrow caret down"
              src="/arrow---caret-down-sm.svg"
            />
          </button>
        </div>
      </div>
    </header>
  );
};
