
"use client";

import React, { useRef, useState, useCallback, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from 'lucide-react';


interface CarouselContextProps {
  scrollNext: () => void;
  scrollPrev: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
  carouselRef: React.RefObject<HTMLDivElement>;
  itemCount: number;
  activeItem: number;
}

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}


interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  opts?: {
    align?: "start" | "center" | "end";
    loop?: boolean;
    
  };
  orientation?: "horizontal" | "vertical";
  setApi?: (api: any) => void; // Simplified for this example
}


const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  ({ children, className, opts, orientation = "horizontal", ...props }, ref) => {
    const carouselRef = useRef<HTMLDivElement>(null);
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(true);
    const [itemCount, setItemCount] = useState(0);
    const [activeItem, setActiveItem] = useState(0);

    const scrollPrev = useCallback(() => {
      if (carouselRef.current) {
        const itemWidth = carouselRef.current.children[0]?.children[0]?.clientWidth || 0;
        carouselRef.current.scrollBy({ left: -itemWidth, behavior: "smooth" });
      }
    }, []);

    const scrollNext = useCallback(() => {
      if (carouselRef.current) {
        const itemWidth = carouselRef.current.children[0]?.children[0]?.clientWidth || 0;
        carouselRef.current.scrollBy({ left: itemWidth, behavior: "smooth" });
      }
    }, []);
    
    const updateScrollability = useCallback(() => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        setCanScrollPrev(scrollLeft > 0);
        setCanScrollNext(scrollLeft < scrollWidth - clientWidth -1); // -1 for precision issues
        
        const currentItemWidth = carouselRef.current.children[0]?.children[0]?.clientWidth || clientWidth;
        if (currentItemWidth > 0) {
          setActiveItem(Math.round(scrollLeft / currentItemWidth));
        }
      }
    }, []);


    useEffect(() => {
      if (carouselRef.current?.children[0]) {
        setItemCount(carouselRef.current.children[0].children.length || 0);
        updateScrollability(); // Initial check
        const currentCarouselRef = carouselRef.current;
        currentCarouselRef.addEventListener("scroll", updateScrollability);
      
        return () => {
            currentCarouselRef.removeEventListener("scroll", updateScrollability);
        };
      }
    }, [updateScrollability, children]);


    return (
      <CarouselContext.Provider
        value={{ scrollNext, scrollPrev, canScrollPrev, canScrollNext, carouselRef, itemCount, activeItem }}
      >
        <div
          ref={ref}
          className={cn("carousel-container group relative", className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    );
  }
);
Carousel.displayName = "Carousel";


const CarouselContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref) => {
    const { carouselRef } = useCarousel();
    return (
      <div ref={carouselRef} className={cn("carousel-content", className)} {...props}>
        <div className="carousel-content-container">{children}</div>
      </div>
    );
  }
);
CarouselContent.displayName = "CarouselContent";


const CarouselItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="group"
        aria-roledescription="slide"
        className={cn("carousel-item", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
CarouselItem.displayName = "CarouselItem";


const CarouselPrevious = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { scrollPrev, canScrollPrev } = useCarousel();
    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(
          "carousel-button carousel-previous group-hover:opacity-100",
          !canScrollPrev && "opacity-50 cursor-not-allowed",
          className
        )}
        onClick={scrollPrev}
        disabled={!canScrollPrev}
        {...props}
      >
        <ChevronLeft className="h-6 w-6" />
        <span className="sr-only">Previous slide</span>
      </Button>
    );
  }
);
CarouselPrevious.displayName = "CarouselPrevious";


const CarouselNext = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { scrollNext, canScrollNext } = useCarousel();
    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(
          "carousel-button carousel-next group-hover:opacity-100",
          !canScrollNext && "opacity-50 cursor-not-allowed",
          className
        )}
        onClick={scrollNext}
        disabled={!canScrollNext}
        {...props}
      >
        <ChevronRight className="h-6 w-6" />
        <span className="sr-only">Next slide</span>
      </Button>
    );
  }
);
CarouselNext.displayName = "CarouselNext";

export { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext };

