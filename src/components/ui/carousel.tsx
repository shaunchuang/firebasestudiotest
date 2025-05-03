
import React, { useRef, useState } from 'react';

interface CarouselProps {
  children: React.ReactNode;
}

interface CarouselItemProps {
  children: React.ReactNode;
}

interface CarouselButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (scrollOffset: number) => {
    if (containerRef.current) {
      const newScrollPosition = scrollPosition + scrollOffset;
      containerRef.current.scrollLeft = newScrollPosition;
      setScrollPosition(newScrollPosition);
    }
  };

  return (
    <div className="carousel-container">
      <CarouselPrevious onClick={() => handleScroll(-200)}>Prev</CarouselPrevious>
      <div className="carousel-content" ref={containerRef}>
        <CarouselContent>{children}</CarouselContent>
      </div>
      <CarouselNext onClick={() => handleScroll(200)}>Next</CarouselNext>
    </div>
  );
};

const CarouselContent: React.FC<CarouselProps> = ({ children }) => {
    return <div className="carousel-content-container">{children}</div>;
  };

const CarouselItem: React.FC<CarouselItemProps> = ({ children }) => {
  return <div className="carousel-item">{children}</div>;
};

const CarouselPrevious: React.FC<CarouselButtonProps> = ({ onClick, children }) => {
  return (
    <button className="carousel-button carousel-previous" onClick={onClick}>
      {children}
    </button>
  );
};

const CarouselNext: React.FC<CarouselButtonProps> = ({ onClick, children }) => {
  return (
    <button className="carousel-button carousel-next" onClick={onClick}>
      {children}
    </button>
  );
};

export { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext };