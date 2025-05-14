import * as React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

import { cn } from "../../lib/utils";

const CarouselContext = React.createContext<{
  api?: any;
  currentIndex: number;
  slideCount: number;
  setSlideCount: React.Dispatch<React.SetStateAction<number>>;
}>({
  currentIndex: 0,
  slideCount: 0,
  setSlideCount: () => null,
});

const useCarousel = () => {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
};

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const [api, setApi] = React.useState<any>();
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [slideCount, setSlideCount] = React.useState(0);

  const handlePrevious = React.useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const handleNext = React.useCallback(() => {
    api?.scrollNext();
  }, [api]);

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        handlePrevious();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        handleNext();
      }
    },
    [handlePrevious, handleNext]
  );

  React.useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrentIndex(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <CarouselContext.Provider
      value={{
        api,
        currentIndex,
        slideCount,
        setSlideCount,
      }}
    >
      <div
        ref={ref}
        className={cn("relative", className)}
        role="region"
        aria-roledescription="carousel"
        onKeyDownCapture={handleKeyDown}
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
});
Carousel.displayName = "Carousel";

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const { setSlideCount } = useCarousel();

  React.useEffect(() => {
    setSlideCount(React.Children.count(children));
  }, [children, setSlideCount]);

  return (
    <div
      ref={ref}
      className={cn("overflow-hidden", className)}
      {...props}
    >
      <div className="flex transition-transform duration-300 ease-in-out">
        {children}
      </div>
    </div>
  );
});
CarouselContent.displayName = "CarouselContent";

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn("min-w-0 flex-shrink-0 flex-grow-0 basis-full", className)}
      {...props}
    >
      {children}
    </div>
  );
});
CarouselItem.displayName = "CarouselItem";

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center rounded-full border border-border bg-background p-2 text-foreground shadow-sm hover:bg-accent hover:text-accent-foreground",
        className
      )}
      {...props}
    >
      <ChevronLeftIcon className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>
    </button>
  );
});
CarouselPrevious.displayName = "CarouselPrevious";

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center rounded-full border border-border bg-background p-2 text-foreground shadow-sm hover:bg-accent hover:text-accent-foreground",
        className
      )}
      {...props}
    >
      <ChevronRightIcon className="h-4 w-4" />
      <span className="sr-only">Next slide</span>
    </button>
  );
});
CarouselNext.displayName = "CarouselNext";

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
};
