import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  FacebookIcon,
  InstagramIcon,
  PlayIcon,
  SearchIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Checkbox } from "../../components/ui/checkbox";
import { Input } from "../../components/ui/input";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "../../components/ui/select";

export const Category = (): JSX.Element => {
  // Dog card data
  const dogCards = [
    {
      id: 1,
      image: "/image-16.png",
      name: "MO502 - Poodle Tiny Yellow",
      gene: "Female",
      age: "02 months",
      price: "3.900.000 VND",
      row: 1,
      col: 1,
    },
    {
      id: 2,
      image: "/image-18.png",
      name: "MO102 - Poodle Tiny Sepia",
      gene: "Male",
      age: "02 months",
      price: "4.000.000 VND",
      row: 1,
      col: 2,
    },
    {
      id: 3,
      image: "/image-20.png",
      name: "MO512 - Alaskan Malamute Grey",
      gene: "Male",
      age: "02 months",
      price: "8.900.000 VND",
      row: 1,
      col: 3,
    },
    {
      id: 4,
      image: "/image-17.png",
      name: "MO502 - Poodle Tiny Yellow",
      gene: "Female",
      age: "02 months",
      price: "3.900.000 VND",
      row: 2,
      col: 1,
    },
    {
      id: 5,
      image: "/image-19.png",
      name: "MO102 - Poodle Tiny Sepia",
      gene: "Male",
      age: "02 months",
      price: "4.000.000 VND",
      row: 2,
      col: 2,
    },
    {
      id: 6,
      image: "/image-21.png",
      name: "MO512 - Alaskan Malamute Grey",
      gene: "Male",
      age: "02 months",
      price: "8.900.000 VND",
      row: 2,
      col: 3,
    },
    {
      id: 7,
      image: "/image-13.png",
      name: "MO502 - Poodle Tiny Yellow",
      gene: "Female",
      age: "02 months",
      price: "3.900.000 VND",
      row: 3,
      col: 1,
    },
    {
      id: 8,
      image: "/image-20.png",
      name: "MO102 - Poodle Tiny Sepia",
      gene: "Male",
      age: "02 months",
      price: "4.000.000 VND",
      row: 3,
      col: 2,
    },
    {
      id: 9,
      image: "/image-2-15.png",
      name: "MO512 - Alaskan Malamute Grey",
      gene: "Male",
      age: "02 months",
      price: "8.900.000 VND",
      row: 3,
      col: 3,
    },
    {
      id: 10,
      image: "/image-16.png",
      name: "MO502 - Poodle Tiny Yellow",
      gene: "Female",
      age: "02 months",
      price: "3.900.000 VND",
      row: 4,
      col: 1,
    },
    {
      id: 11,
      image: "/image-18.png",
      name: "MO102 - Poodle Tiny Sepia",
      gene: "Male",
      age: "02 months",
      price: "4.000.000 VND",
      row: 4,
      col: 2,
    },
    {
      id: 12,
      image: "/image-21.png",
      name: "MO512 - Alaskan Malamute Grey",
      gene: "Male",
      age: "02 months",
      price: "8.900.000 VND",
      row: 4,
      col: 3,
    },
  ];

  // Color options for filter
  const colorOptions = [
    { color: "bg-state-colorpink-red", name: "Red" },
    { color: "bg-[#ffb672]", name: "Apricot" },
    { color: "bg-neutral-color80", name: "Black" },
    {
      color:
        "[background:linear-gradient(90deg,rgba(36,43,51,1)_0%,rgba(36,43,51,1)_53%,rgba(215,215,215,1)_53%,rgba(210,210,210,1)_100%)]",
      name: "Black & White",
    },
    { color: "bg-[#cecece]", name: "Silver" },
    { color: "bg-[#fff7ce]", name: "Tan" },
  ];

  // Breed options for filter
  const breedOptions = ["Small", "Medium", "Large"];

  return (
    <div className="bg-[#fcfcfc] flex flex-row justify-center w-full">
      <div className="bg-neutral-color00 overflow-hidden w-[1440px] h-[3119px] relative">
        {/* Header/Navigation */}
        <header className="flex w-[1440px] items-center justify-between px-[130px] py-7 absolute top-0 left-0">
          <div className="flex items-center gap-12">
            <div className="relative w-[115px] h-10">
              <img
                className="absolute w-[55px] h-[7px] top-[33px] left-[30px]"
                alt="Group"
                src="/group-2.png"
              />
              <img
                className="absolute w-[114px] h-[27px] top-0 left-0"
                alt="Group"
                src="/group-3.png"
              />
            </div>

            <NavigationMenu>
              <NavigationMenuList className="flex items-start gap-12">
                <NavigationMenuItem>
                  <Button
                    variant="link"
                    className="font-body-16px-bold text-primary-colordark-blue"
                  >
                    Home
                  </Button>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Button
                    variant="link"
                    className="font-body-16px-bold text-primary-colordark-blue"
                  >
                    Category
                  </Button>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Button
                    variant="link"
                    className="font-body-16px-bold text-primary-colordark-blue"
                  >
                    About
                  </Button>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Button
                    variant="link"
                    className="font-body-16px-bold text-primary-colordark-blue"
                  >
                    Contact
                  </Button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="flex w-[280px] items-center gap-3 pl-4 pr-5 py-3 bg-neutral-color00 rounded-[46px]">
              <SearchIcon className="w-5 h-5" />
              <Input
                className="border-0 shadow-none font-body-14px-medium text-neutral-color40"
                placeholder="SearchIcon something here!"
              />
            </div>

            <Button className="h-11 bg-primary-colordark-blue rounded-[57px] font-body-16px-bold text-neutral-color00">
              Join the community
            </Button>

            <div className="flex items-center justify-end gap-1 pt-2.5 pb-2 px-2 self-stretch">
              <div className="flex items-center gap-1.5">
                <div className="relative w-[21px] h-[21px]">
                  <div className="relative w-4 h-4 top-0.5 left-[3px] bg-[url(/group-4.png)] bg-[100%_100%]" />
                </div>
                <span className="font-medium text-primary-colordark-blue-80 text-base leading-[23px] whitespace-nowrap">
                  VND
                </span>
              </div>
              <ChevronDownIcon className="w-6 h-6" />
            </div>
          </div>
        </header>

        {/* Breadcrumb */}
        <div className="flex items-center gap-1.5 absolute top-[107px] left-[130px]">
          <span className="font-body-14px-medium text-neutral-color60">
            Home
          </span>
          <ChevronRightIcon className="w-6 h-6" />
          <span className="font-body-14px-medium text-neutral-color60">
            Dog
          </span>
          <ChevronRightIcon className="w-6 h-6" />
          <span className="font-body-14px-medium text-neutral-color60">
            Small Dog
          </span>
        </div>

        {/* Hero Banner */}
        <div className="absolute w-[1180px] h-[378px] top-[140px] left-[130px] rounded-[20px] overflow-hidden [background:linear-gradient(134deg,rgba(252,238,213,1)_6%,rgba(252,238,213,1)_75%,rgba(255,231,186,1)_100%)]">
          <div className="relative w-[1387px] h-[1029px] top-[-164px] left-[51px]">
            <div className="absolute w-[816px] h-[800px] top-[115px] left-[459px] bg-primary-colordark-blue-80 rounded-[99px] rotate-[160.22deg]" />
            <div className="absolute top-[227px] left-[641px] font-bold text-neutral-color00 text-[52px] tracking-[0] leading-[68px] whitespace-nowrap">
              One More Friend
            </div>
            <div className="absolute top-[297px] left-[690px] font-bold text-neutral-color00 text-4xl tracking-[0] leading-[54px] whitespace-nowrap">
              Thousands More Fun!
            </div>
            <div className="absolute w-[394px] top-[359px] left-[650px] font-body-12px-medium text-neutral-color20 text-right">
              Having a pet means you have more joy, a new friend, a happy person
              who will always be with you to have fun. We have 200+ different
              pets that can meet your needs!
            </div>

            <Button className="absolute top-[438px] left-[894px] bg-neutral-color00 text-neutral-color100 rounded-[57px] font-body-16px-medium">
              Explore Now
            </Button>

            <Button
              variant="outline"
              className="absolute top-[438px] left-[713px] border-[1.5px] border-[#fcfcfc] text-neutral-color00 rounded-[57px] font-body-16px-medium flex gap-2"
            >
              View Intro
              <PlayIcon className="w-6 h-6" />
            </Button>

            <img
              className="absolute w-[650px] h-[301px] top-[241px] left-0 object-cover"
              alt="Group portrait of adorable puppies"
              src="/group-portrait-adorable-puppies-1.png"
            />
          </div>
        </div>

        {/* Category Title and Count */}
        <div className="absolute h-9 top-[552px] left-[130px] font-heading-24px-bold text-primary-colordark-blue">
          Filter
        </div>

        <div className="absolute top-[553px] left-[430px]">
          <h2 className="font-heading-24px-bold text-primary-colordark-blue">
            Small Dog
          </h2>
        </div>

        <div className="absolute h-5 top-[563px] left-[558px] font-body-14px-medium text-neutral-color60">
          52 puppies
        </div>

        {/* Sort Dropdown */}
        <Select defaultValue="popular">
          <SelectTrigger className="inline-flex items-center gap-2 pl-5 pr-2.5 pt-1.5 pb-1 absolute top-[550px] left-[1145px] rounded-[20px] border border-solid border-[#ccd1d2] w-auto">
            <div className="font-body-14px-medium text-neutral-color60">
              Sort by: Popular
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="popular">Popular</SelectItem>
            <SelectItem value="newest">Newest</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
          </SelectContent>
        </Select>

        {/* Filter Sidebar */}
        <div className="absolute top-[603px] left-[130px]">
          <div className="flex flex-col w-[280px]">
            {/* Gender Filter */}
            <div className="flex flex-col w-full items-start gap-2.5 pt-0 pb-4 px-0 border-b border-[#ebedef]">
              <h3 className="font-body-16px-bold text-neutral-color100">
                Gender
              </h3>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2.5">
                  <Checkbox id="male" />
                  <label
                    htmlFor="male"
                    className="font-body-14px-medium text-neutral-color100"
                  >
                    Male
                  </label>
                </div>
                <div className="flex items-center gap-2.5">
                  <Checkbox id="female" />
                  <label
                    htmlFor="female"
                    className="font-body-14px-medium text-neutral-color100"
                  >
                    Female
                  </label>
                </div>
              </div>
            </div>

            {/* Color Filter */}
            <div className="flex flex-col items-start gap-2.5 px-0 py-4 w-full border-b border-[#ebedef]">
              <h3 className="font-body-16px-bold text-neutral-color100">
                Color
              </h3>
              <div className="flex flex-col gap-2">
                {colorOptions.map((option, index) => (
                  <div key={index} className="flex items-center gap-2.5">
                    <Checkbox id={`color-${index}`} />
                    <div
                      className={`w-[15px] h-[15px] ${option.color} rounded-[10px]`}
                    />
                    <label
                      htmlFor={`color-${index}`}
                      className="font-body-14px-medium text-neutral-color100"
                    >
                      {option.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className="flex flex-col items-start gap-2.5 px-0 py-4 w-full border-b border-[#ebedef]">
              <h3 className="font-body-16px-bold text-neutral-color100">
                Price
              </h3>
              <div className="flex items-start justify-between w-full">
                <div className="flex flex-col items-start gap-2.5 p-2.5 border-b border-[#ebedef]">
                  <div className="flex w-[115px] items-center justify-between">
                    <span className="font-body-14px-medium text-neutral-color80">
                      Min
                    </span>
                    <div className="flex items-center">
                      <img
                        className="w-3.5 h-3.5"
                        alt="Arrow unfold more"
                        src="/arrow---unfold-more.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-[135px] items-start gap-2.5 p-2.5 border-b border-[#ebedef]">
                  <div className="flex w-[115px] items-center justify-between">
                    <span className="font-body-14px-medium text-neutral-color80">
                      Max
                    </span>
                    <div className="flex items-center">
                      <img
                        className="w-3.5 h-3.5"
                        alt="Arrow unfold more"
                        src="/arrow---unfold-more.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Breed Filter */}
            <div className="flex flex-col w-[280px] items-start gap-2.5 px-0 py-4 border-b border-[#ebedef]">
              <h3 className="font-body-16px-bold text-neutral-color100">
                Breed
              </h3>
              <div className="flex flex-col gap-2">
                {breedOptions.map((option, index) => (
                  <div key={index} className="flex items-center gap-2.5">
                    <Checkbox id={`breed-${index}`} />
                    <label
                      htmlFor={`breed-${index}`}
                      className="font-body-14px-medium text-neutral-color100"
                    >
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Dog Cards Grid */}
        {dogCards.map((dog) => (
          <Card
            key={dog.id}
            className="absolute w-[280px] h-[378px] top-[603px] left-[430px] rounded-xl shadow-[0px_4px_28px_-2px_#00000014]"
            style={{
              top: `${603 + (dog.row - 1) * 396}px`,
              left: `${430 + (dog.col - 1) * 300}px`,
            }}
          >
            <div className="p-2">
              <div className="relative w-[264px] h-[264px] bg-white rounded-[10px] overflow-hidden">
                <img
                  className="absolute w-full h-full object-cover"
                  alt={dog.name}
                  src={dog.image}
                />
              </div>
              <CardContent className="pt-2 pb-5 px-2">
                <div className="flex flex-col gap-1">
                  <h3 className="font-body-16px-bold text-neutral-color100">
                    {dog.name}
                  </h3>
                  <div className="flex items-start gap-1 w-full">
                    <div className="flex items-start gap-1.5">
                      <span className="font-body-12px-medium text-neutral-color60">
                        Gene:
                      </span>
                      <span className="font-body-12px-bold text-neutral-color60">
                        {dog.gene}
                      </span>
                    </div>
                    <span className="font-body-12px-medium text-neutral-color60">
                      {""}
                    </span>
                    <div className="flex items-start gap-1.5">
                      <span className="font-body-12px-medium text-neutral-color60">
                        Age:
                      </span>
                      <span className="font-body-12px-bold text-neutral-color60">
                        {dog.age}
                      </span>
                    </div>
                  </div>
                  <div className="font-body-14px-bold text-neutral-color100">
                    {dog.price}
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        ))}

        {/* Pagination */}
        <div className="flex items-start gap-3 absolute top-[2605px] left-[745px]">
          <Button
            variant="ghost"
            size="icon"
            className="w-[34px] h-[34px] rounded-lg"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </Button>

          <Button className="w-[34px] h-[34px] bg-primary-colordark-blue rounded-lg font-bold text-lg text-neutral-color00">
            1
          </Button>

          <Button
            variant="ghost"
            className="w-[34px] h-[34px] rounded-[10px] font-bold text-lg text-primary-colordark-blue-80"
          >
            2
          </Button>

          <Button
            variant="ghost"
            className="w-[34px] h-[34px] rounded-[10px] font-bold text-lg text-primary-colordark-blue-80"
          >
            3
          </Button>

          <Button
            variant="ghost"
            className="w-[34px] h-[34px] rounded-[10px] font-bold text-lg text-primary-colordark-blue-80"
          >
            4
          </Button>

          <Button
            variant="ghost"
            className="w-[34px] h-[34px] rounded-[10px] font-bold text-lg text-primary-colordark-blue-80"
          >
            ...
          </Button>

          <Button
            variant="ghost"
            className="w-[34px] h-[34px] rounded-[10px] font-bold text-lg text-primary-colordark-blue-80"
          >
            28
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="w-[34px] h-[34px] rounded-lg"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </Button>
        </div>

        {/* Footer */}
        <footer className="absolute w-[1440px] h-[440px] top-[2699px] left-0 bg-transparent rounded-[40px_40px_0px_0px] overflow-hidden [background:linear-gradient(134deg,rgba(252,238,213,1)_6%,rgba(252,238,213,1)_75%,rgba(255,231,186,1)_100%)]">
          <div className="absolute w-[1180px] h-10 top-[360px] left-[130px]">
            <div className="absolute top-[9px] left-0 font-body-14px-medium text-neutral-color60">
              © 2022 Monito. All rights reserved.
            </div>

            <div className="absolute top-[9px] left-[953px] font-body-14px-medium text-neutral-color60">
              Terms of
              Service&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Privacy
              Policy
            </div>

            <div className="absolute w-[115px] h-10 top-0 left-[533px]">
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
            </div>
          </div>

          <div className="inline-flex flex-col items-start gap-10 pt-0 pb-10 px-0 absolute top-20 left-[130px] border-b border-[#ccd1d2]">
            <Card className="inline-flex items-start gap-5 p-8 bg-primary-colordark-blue rounded-2xl">
              <CardContent className="p-0">
                <div className="relative w-[389px] mt-[-1.00px] font-bold text-neutral-color00 text-2xl leading-9">
                  Register Now So You Don't Miss Our Programs
                </div>
              </CardContent>

              <div className="flex w-[707px] items-center gap-3 p-3 bg-white rounded-[14px]">
                <div className="flex items-center gap-2.5 px-7 py-3.5 flex-1 grow bg-white rounded-lg border border-solid border-[#99a2a5]">
                  <Input
                    className="border-0 shadow-none font-body-14px-medium text-neutral-color40"
                    placeholder="Enter your Email"
                  />
                </div>

                <Button className="w-[163px] bg-primary-colordark-blue rounded-lg font-body-16px-medium text-neutral-color00">
                  Subcribe Now
                </Button>
              </div>
            </Card>

            <div className="flex items-start justify-between w-full">
              <div className="flex items-start gap-[60px]">
                <Button
                  variant="link"
                  className="font-body-16px-medium text-neutral-color100 p-0"
                >
                  Home
                </Button>
                <Button
                  variant="link"
                  className="font-body-16px-medium text-neutral-color100 p-0"
                >
                  Category
                </Button>
                <Button
                  variant="link"
                  className="font-body-16px-medium text-neutral-color100 p-0"
                >
                  About
                </Button>
                <Button
                  variant="link"
                  className="font-body-16px-medium text-neutral-color100 p-0"
                >
                  Contact
                </Button>
              </div>

              <div className="flex items-start gap-10">
                <FacebookIcon className="w-6 h-6" />
                <TwitterIcon className="w-6 h-6" />
                <InstagramIcon className="w-6 h-6" />
                <YoutubeIcon className="w-6 h-6" />
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
