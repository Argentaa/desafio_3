"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderDesktop = void 0;
const lucide_react_1 = require("lucide-react");
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const button_1 = require("../../../../components/ui/button");
const input_1 = require("../../../../components/ui/input");
const navigation_menu_1 = require("../../../../components/ui/navigation-menu");
const HeaderDesktop = () => {
    // Navigation links data
    const navLinks = [
        { title: "Home", href: "/" },
        { title: "Category", href: "/category" },
        { title: "Product Detail", href: "/product-detail" },
        { title: "About", href: "#about" },
        { title: "Contact", href: "#contact" },
    ];
    return (<header className="flex w-full items-center justify-between px-[130px] py-7 border-b border-neutral-color10">
      <div className="flex items-center gap-12">
        {/* Logo */}
        <div className="relative w-[115px] h-10">
          <img className="absolute w-[55px] h-[7px] top-[33px] left-[30px]" alt="Group" src="/group.png"/>
          <img className="absolute w-[114px] h-[27px] top-0 left-0" alt="Group" src="/group-1.png"/>
        </div>

        {/* Navigation */}
        <navigation_menu_1.NavigationMenu>
          <navigation_menu_1.NavigationMenuList className="flex gap-12">
            {navLinks.map((link, index) => (<navigation_menu_1.NavigationMenuItem key={index}>
                {link.href.startsWith('#') ? (<navigation_menu_1.NavigationMenuLink href={link.href} className="font-body-16px-bold text-primary-colordark-blue hover:text-primary-colordark-blue-80 transition-colors">
                    {link.title}
                  </navigation_menu_1.NavigationMenuLink>) : (<react_router_dom_1.Link to={link.href} className="font-body-16px-bold text-primary-colordark-blue hover:text-primary-colordark-blue-80 transition-colors">
                    {link.title}
                  </react_router_dom_1.Link>)}
              </navigation_menu_1.NavigationMenuItem>))}
          </navigation_menu_1.NavigationMenuList>
        </navigation_menu_1.NavigationMenu>
      </div>

      <div className="flex items-center gap-3.5">
        {/* SearchIcon bar */}
        <div className="flex items-center gap-3 pl-4 pr-5 py-3 bg-neutral-color00 rounded-[46px] w-[280px]">
          <lucide_react_1.SearchIcon className="w-5 h-5 text-neutral-color40"/>
          <input_1.Input className="border-0 bg-transparent p-0 h-auto focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-neutral-color40 font-body-14px-medium" placeholder="SearchIcon something here!"/>
        </div>

        {/* Join community button */}
        <button_1.Button className="h-11 px-7 py-2.5 bg-primary-colordark-blue hover:bg-primary-colordark-blue-80 rounded-[57px] font-body-16px-bold text-neutral-color00">
          Join the community
        </button_1.Button>

        {/* Currency selector */}
        <div className="flex items-center gap-1 py-2 px-2">
          <div className="flex items-center gap-1.5">
            <div className="relative w-[21px] h-[21px]">
              <div className="relative w-4 h-4 top-0.5 left-[3px] bg-[url(/group-2.png)] bg-[100%_100%]"/>
            </div>
            <span className="[font-family:'SVN-Gilroy-Medium',Helvetica] font-medium text-primary-colordark-blue-80 text-base">
              VND
            </span>
          </div>
          <lucide_react_1.ChevronDownIcon className="w-6 h-6 text-primary-colordark-blue"/>
        </div>
      </div>
    </header>);
};
exports.HeaderDesktop = HeaderDesktop;
