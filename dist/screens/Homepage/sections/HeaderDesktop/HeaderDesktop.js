"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderDesktop = void 0;
const lucide_react_1 = require("lucide-react");
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const button_1 = require("../../../../components/ui/button");
const input_1 = require("../../../../components/ui/input");
const navigation_menu_1 = require("../../../../components/ui/navigation-menu");
const HeaderDesktop = () => {
    const [searchQuery, setSearchQuery] = (0, react_1.useState)("");
    const [selectedCurrency, setSelectedCurrency] = (0, react_1.useState)("VND");
    // Navigation menu items with their corresponding sections
    const navItems = [
        { title: "Home", href: "/" },
        { title: "Category", href: "/category" },
        { title: "About", href: "#about" },
        { title: "Contact", href: "#contact" },
    ];
    const handleSearch = (e) => {
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
    const handleNavigation = (href) => {
        // If it's an anchor link, scroll to the element
        if (href.startsWith('#')) {
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
        // For regular links, React Router will handle navigation
    };
    return (<header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="flex w-full items-center justify-between px-[130px] py-7 border-b border-neutral-color20/30">
        <div className="flex items-center gap-12">
          {/* Logo */}
          <a href="#" className="relative w-[115px] h-10">
            <img className="absolute w-[55px] h-[7px] top-[33px] left-[30px]" alt="Group" src="/group.png"/>
            <img className="absolute w-[114px] h-[27px] top-0 left-0" alt="Group" src="/group-1.png"/>
          </a>

          {/* Navigation Menu */}
          <navigation_menu_1.NavigationMenu>
            <navigation_menu_1.NavigationMenuList className="flex items-start gap-12">
              {navItems.map((item) => (<navigation_menu_1.NavigationMenuItem key={item.title}>
                    {item.href.startsWith('#') ? (<navigation_menu_1.NavigationMenuLink className="font-body-16px-bold text-primary-colordark-blue cursor-pointer hover:text-primary-colordark-blue-80 transition-colors" onClick={() => handleNavigation(item.href)}>
                      {item.title}
                    </navigation_menu_1.NavigationMenuLink>) : (<react_router_dom_1.Link to={item.href} className="font-body-16px-bold text-primary-colordark-blue cursor-pointer hover:text-primary-colordark-blue-80 transition-colors">
                      {item.title}
                    </react_router_dom_1.Link>)}
                </navigation_menu_1.NavigationMenuItem>))}
            </navigation_menu_1.NavigationMenuList>
          </navigation_menu_1.NavigationMenu>
        </div>

        <div className="flex items-center gap-3.5">
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex items-center gap-3 pl-4 pr-5 py-3 bg-neutral-color00 rounded-[46px]">
            <lucide_react_1.SearchIcon className="w-5 h-5 text-neutral-color40"/>
            <input_1.Input className="border-0 bg-transparent p-0 h-auto font-body-14px-medium text-neutral-color40 placeholder:text-neutral-color40 focus-visible:ring-0 focus-visible:ring-offset-0" type="text" placeholder="Search something here!" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
          </form>

          {/* Join Community Button */}
          <button_1.Button onClick={handleJoinCommunity} className="h-11 rounded-[57px] bg-primary-colordark-blue text-neutral-color00 font-body-16px-bold px-7 hover:bg-primary-colordark-blue-80 transition-colors">
            Join the community
          </button_1.Button>

          {/* Currency Selector */}
          <button onClick={handleCurrencyChange} className="flex items-center justify-end gap-1 pt-2.5 pb-2 px-2 hover:bg-neutral-color20/10 rounded-lg transition-colors">
            <div className="flex items-center gap-1.5">
              <div className="relative w-[21px] h-[21px]">
                <div className="relative w-4 h-4 top-0.5 left-[3px] bg-[url(/group-2.png)] bg-[100%_100%]"/>
              </div>
              <div className="[font-family:'SVN-Gilroy-Medium',Helvetica] font-medium text-primary-colordark-blue-80 text-base">
                {selectedCurrency}
              </div>
            </div>
            <img className="w-6 h-6" alt="Arrow caret down" src="/arrow---caret-down-sm.svg"/>
          </button>
        </div>
      </div>
    </header>);
};
exports.HeaderDesktop = HeaderDesktop;
