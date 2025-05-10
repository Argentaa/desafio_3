import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

// Article data for mapping
const articles = [
  {
    id: 1,
    image: "/image-3-1.png",
    title: "What is a Pomeranian? How to Identify Pomeranian Dogs",
    description:
      "The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circus dog breed.",
  },
  {
    id: 2,
    image: "/image-3-2.png",
    title: "Dog Diet You Need To Know",
    description:
      "Dividing a dog's diet may seem simple at first, but there are some rules you should know so that your dog can easily absorb the nutrients in the diet. For those who are just starting to raise dogs, especially newborn puppies with relatively weak resistance.",
  },
  {
    id: 3,
    image: "/image-3-3.png",
    title:
      "Why Dogs Bite and Destroy Furniture and How to Prevent It Effectively",
    description:
      "Dog bites are common during development. However, no one wants to see their furniture or important items being bitten by a dog.",
  },
];

export const DivByAnima = (): JSX.Element => {
  return (
    <section className="w-full py-16 px-8 md:px-32">
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-0.5">
            <p className="font-body-16px-medium font-[number:var(--body-16px-medium-font-weight)] text-black text-[length:var(--body-16px-medium-font-size)] tracking-[var(--body-16px-medium-letter-spacing)] leading-[var(--body-16px-medium-line-height)]">
              You already know ?
            </p>
            <h2 className="[font-family:'SVN-Gilroy-Bold',Helvetica] font-bold text-primary-colordark-blue text-2xl tracking-[0] leading-9">
              Useful Pet Knowledge
            </h2>
          </div>

          <Button
            variant="outline"
            className="border-[1.5px] border-solid border-[#003459] rounded-[57px] flex items-center gap-2"
          >
            <span className="font-body-14px-medium font-[number:var(--body-14px-medium-font-weight)] text-primary-colordark-blue text-[length:var(--body-14px-medium-font-size)] leading-[var(--body-14px-medium-line-height)] tracking-[var(--body-14px-medium-letter-spacing)]">
              View more
            </span>
            <ChevronRightIcon className="w-5 h-5" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Card
              key={article.id}
              className="rounded-xl shadow-shadown-1 overflow-hidden"
            >
              <CardContent className="p-2">
                <div className="flex flex-col gap-2">
                  <div className="relative w-full h-60 rounded-[10px] overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      alt="Pet article image"
                      src={article.image}
                    />
                  </div>

                  <div className="flex flex-col gap-2.5 p-2">
                    <Badge className="bg-state-colorblue-sea text-neutral-color00 rounded-[28px] px-2.5 py-0.5 w-fit">
                      <span className="text-[length:var(--body-10px-bold-font-size)] leading-[var(--body-10px-bold-line-height)] font-body-10px-bold font-[number:var(--body-10px-bold-font-weight)] tracking-[var(--body-10px-bold-letter-spacing)]">
                        Pet knowledge
                      </span>
                    </Badge>

                    <div className="flex flex-col gap-1.5">
                      <h3 className="font-body-16px-bold font-[number:var(--body-16px-bold-font-weight)] text-neutral-color100 text-[length:var(--body-16px-bold-font-size)] tracking-[var(--body-16px-bold-letter-spacing)] leading-[var(--body-16px-bold-line-height)]">
                        {article.title}
                      </h3>

                      <p className="h-[60px] font-body-14px-regular font-[number:var(--body-14px-regular-font-weight)] text-neutral-color80 text-[length:var(--body-14px-regular-font-size)] tracking-[var(--body-14px-regular-letter-spacing)] leading-[var(--body-14px-regular-line-height)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
                        {article.description}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
