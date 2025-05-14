import { ChevronRightIcon, MessageSquareIcon, ShareIcon } from "lucide-react";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "../../../../components/ui/breadcrumb";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../../components/ui/carousel";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "../../../../components/ui/table";

export const Frame = (): JSX.Element => {
  // Product images data
  const productImages = [
    { src: "/image-4.png", alt: "Shiba Inu Sepia main image" },
    { src: "/image-3.png", alt: "Shiba Inu Sepia image" },
    { src: "/image-5.png", alt: "Shiba Inu Sepia image" },
    { src: "/image-6.png", alt: "Shiba Inu Sepia image" },
    { src: "/image-7.png", alt: "Shiba Inu Sepia image" },
    { src: "/image-8.png", alt: "Shiba Inu Sepia image" },
  ];

  // Social media icons
  const socialIcons = [
    { src: "/facebook---negative-1.svg", alt: "Facebook negative" },
    { src: "/twitter---negative-1.svg", alt: "Twitter negative" },
    { src: "/instagram---negative.svg", alt: "Instagram negative" },
    { src: "/youtube---negative.svg", alt: "Youtube negative" },
  ];

  // Breadcrumb items
  const breadcrumbItems = [
    { label: "Home", href: "#" },
    { label: "Dog", href: "#" },
    { label: "Large Dog", href: "#" },
    { label: "Shiba Inu Sepia", href: "#", current: true },
  ];

  // Product specifications
  const productSpecs = [
    { label: "SKU", value: "#1000078" },
    { label: "Gender", value: "Female" },
    { label: "Age", value: "2 Months" },
    { label: "Size", value: "Small" },
    { label: "Color", value: "Appricot & Tan" },
    { label: "Vaccinated", value: "Yes" },
    { label: "Dewormed", value: "Yes" },
    { label: "Cert", value: "Yes (MKA)" },
    { label: "Microchip", value: "Yes" },
    { label: "Location", value: "Vietnam" },
    { label: "Published Date", value: "12-Oct-2022" },
    {
      label: "Additional Information",
      value:
        "Pure breed Shih Tzu.\nGood body structure.\nWith MKA cert and Microchip.\nFather from champion lineage.",
    },
  ];

  return (
    <Card className="flex gap-[34px] p-5 bg-neutral-color00 rounded-[20px] border border-solid border-[#ebedef]">
      <CardContent className="flex flex-col items-start gap-[17px] p-0">
        <div className="relative w-full">
          <Carousel className="w-full">
            <CarouselContent>
              <CarouselItem>
                <div className="relative h-[476px] bg-[url(/image-4.png)] bg-cover bg-center rounded-md">
                  <CarouselPrevious className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-[#ffffff66] h-[42px] w-[42px]" />
                  <CarouselNext className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-[#ffffff66] h-[42px] w-[42px]" />
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>

          <div className="flex gap-3 mt-3 overflow-x-auto">
            {productImages.map((image, index) => (
              <img
                key={index}
                className={`h-[94px] ${index === 5 ? "w-[30px]" : "w-[94px]"} object-cover rounded-md cursor-pointer ${index === 0 ? "ring-2 ring-primary-colordark-blue" : ""}`}
                alt={image.alt}
                src={image.src}
              />
            ))}
          </div>
        </div>

        <div className="flex w-full items-start justify-between px-3 py-[9px] rounded-[10px] [background:linear-gradient(134deg,rgba(252,238,213,1)_6%,rgba(252,238,213,1)_75%,rgba(255,231,186,1)_100%)]">
          <div className="flex items-center gap-[9px]">
            <div className="relative w-[30px] h-[30px] bg-secondary-colormon-yellow-40 rounded-md flex items-center justify-center">
              <div className="w-6 h-6 overflow-hidden">
                <div className="h-[22px] bg-[url(/029---pet-health.png)] bg-[100%_100%]" />
              </div>
            </div>
            <span className="font-body-14px-bold text-primary-colordark-blue-80">
              100% health guarantee for pets
            </span>
          </div>

          <div className="flex items-center gap-[9px]">
            <div className="relative w-[30px] h-[30px] rounded-md flex items-center justify-center">
              <img
                className="w-[26px] h-[27px]"
                alt="Pet identification icon"
                src="/group-4.png"
              />
            </div>
            <span className="font-body-14px-bold text-primary-colordark-blue-80">
              100% guarantee of pet identification
            </span>
          </div>
        </div>

        <div className="flex items-center gap-[21px] px-2.5 py-1.5">
          <div className="flex items-center gap-2">
            <ShareIcon className="w-5 h-5" />
            <span className="font-body-14px-bold text-primary-colordark-blue-80">
              Share:
            </span>
          </div>
          <div className="flex items-center gap-4">
            {socialIcons.map((icon, index) => (
              <img
                key={index}
                className="w-[18.77px] h-[18.77px] cursor-pointer"
                alt={icon.alt}
                src={icon.src}
              />
            ))}
          </div>
        </div>
      </CardContent>

      <CardContent className="flex flex-col items-start gap-[18px] p-0">
        <Breadcrumb>
          {breadcrumbItems.map((item, index) => (
            <React.Fragment key={index}>
              <BreadcrumbItem>
                <BreadcrumbLink
                  href={item.href}
                  className={`font-body-14px-medium text-neutral-color60 ${item.current ? "font-semibold" : ""}`}
                >
                  {item.label}
                </BreadcrumbLink>
              </BreadcrumbItem>
              {index < breadcrumbItems.length - 1 && (
                <BreadcrumbSeparator>
                  <ChevronRightIcon className="w-6 h-6" />
                </BreadcrumbSeparator>
              )}
            </React.Fragment>
          ))}
        </Breadcrumb>

        <div className="flex flex-col items-start gap-1.5">
          <div className="flex flex-col items-start gap-0.5">
            <span className="font-body-14px-medium text-neutral-color40">
              SKU #1000078
            </span>
            <h1 className="font-heading-24px-bold text-neutral-color100">
              Shiba Inu Sepia
            </h1>
          </div>
          <span className="font-body-20px-bold text-primary-colordark-blue-80">
            34.000.000 VND
          </span>
        </div>

        <div className="flex items-start gap-[18px]">
          <Button className="h-11 px-7 py-3.5 bg-primary-colordark-blue rounded-[57px] font-body-16px-bold">
            Contact us
          </Button>
          <Button
            variant="outline"
            className="h-11 px-7 py-3.5 rounded-[57px] border-2 border-primary-colordark-blue-80 font-body-16px-bold text-primary-colordark-blue-80"
          >
            <MessageSquareIcon className="mr-2 h-6 w-6" />
            Chat with Monito
          </Button>
        </div>

        <Table>
          <TableBody>
            {productSpecs.map((spec, index) => (
              <TableRow key={index} className="border-b border-[#ebedef]">
                <TableCell className="py-2 px-[11px] w-[194px] font-body-14px-medium text-neutral-color60">
                  {spec.label}
                </TableCell>
                <TableCell className="py-2 px-[11px] font-body-14px-medium text-neutral-color60">
                  {spec.label === "Additional Information" ? (
                    <div>
                      :{" "}
                      {spec.value.split("\n").map((line, i) => (
                        <React.Fragment key={i}>
                          {i === 0 ? line : <>&nbsp;&nbsp;{line}</>}
                          {i < spec.value.split("\n").length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </div>
                  ) : (
                    <>: {spec.value}</>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
