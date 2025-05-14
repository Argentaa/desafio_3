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
exports.CarouselNext = exports.CarouselPrevious = exports.CarouselItem = exports.CarouselContent = exports.Carousel = void 0;
const React = __importStar(require("react"));
const lucide_react_1 = require("lucide-react");
const utils_1 = require("../../lib/utils");
const CarouselContext = React.createContext({
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
const Carousel = React.forwardRef(({ className, children, ...props }, ref) => {
    const [api, setApi] = React.useState();
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [slideCount, setSlideCount] = React.useState(0);
    const handlePrevious = React.useCallback(() => {
        api?.scrollPrev();
    }, [api]);
    const handleNext = React.useCallback(() => {
        api?.scrollNext();
    }, [api]);
    const handleKeyDown = React.useCallback((event) => {
        if (event.key === "ArrowLeft") {
            event.preventDefault();
            handlePrevious();
        }
        else if (event.key === "ArrowRight") {
            event.preventDefault();
            handleNext();
        }
    }, [handlePrevious, handleNext]);
    React.useEffect(() => {
        if (!api)
            return;
        const onSelect = () => {
            setCurrentIndex(api.selectedScrollSnap());
        };
        api.on("select", onSelect);
        return () => {
            api.off("select", onSelect);
        };
    }, [api]);
    return (<CarouselContext.Provider value={{
            api,
            currentIndex,
            slideCount,
            setSlideCount,
        }}>
      <div ref={ref} className={(0, utils_1.cn)("relative", className)} role="region" aria-roledescription="carousel" onKeyDownCapture={handleKeyDown} {...props}>
        {children}
      </div>
    </CarouselContext.Provider>);
});
exports.Carousel = Carousel;
Carousel.displayName = "Carousel";
const CarouselContent = React.forwardRef(({ className, children, ...props }, ref) => {
    const { setSlideCount } = useCarousel();
    React.useEffect(() => {
        setSlideCount(React.Children.count(children));
    }, [children, setSlideCount]);
    return (<div ref={ref} className={(0, utils_1.cn)("overflow-hidden", className)} {...props}>
      <div className="flex transition-transform duration-300 ease-in-out">
        {children}
      </div>
    </div>);
});
exports.CarouselContent = CarouselContent;
CarouselContent.displayName = "CarouselContent";
const CarouselItem = React.forwardRef(({ className, children, ...props }, ref) => {
    return (<div ref={ref} role="group" aria-roledescription="slide" className={(0, utils_1.cn)("min-w-0 flex-shrink-0 flex-grow-0 basis-full", className)} {...props}>
      {children}
    </div>);
});
exports.CarouselItem = CarouselItem;
CarouselItem.displayName = "CarouselItem";
const CarouselPrevious = React.forwardRef(({ className, ...props }, ref) => {
    return (<button ref={ref} className={(0, utils_1.cn)("inline-flex items-center justify-center rounded-full border border-border bg-background p-2 text-foreground shadow-sm hover:bg-accent hover:text-accent-foreground", className)} {...props}>
      <lucide_react_1.ChevronLeftIcon className="h-4 w-4"/>
      <span className="sr-only">Previous slide</span>
    </button>);
});
exports.CarouselPrevious = CarouselPrevious;
CarouselPrevious.displayName = "CarouselPrevious";
const CarouselNext = React.forwardRef(({ className, ...props }, ref) => {
    return (<button ref={ref} className={(0, utils_1.cn)("inline-flex items-center justify-center rounded-full border border-border bg-background p-2 text-foreground shadow-sm hover:bg-accent hover:text-accent-foreground", className)} {...props}>
      <lucide_react_1.ChevronRightIcon className="h-4 w-4"/>
      <span className="sr-only">Next slide</span>
    </button>);
});
exports.CarouselNext = CarouselNext;
CarouselNext.displayName = "CarouselNext";
