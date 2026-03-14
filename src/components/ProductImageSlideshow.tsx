import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProductImageSlideshowProps {
  imgs: string[];
  title: string;
  onZoom: (imgs: string[], index: number) => void;
}

const ProductImageSlideshow = ({ imgs, title, onZoom }: ProductImageSlideshowProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (imgs.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imgs.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [imgs.length]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? imgs.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % imgs.length);
  };

  return (
    <div
      className="group relative w-full h-full overflow-hidden aspect-square cursor-zoom-in"
      onClick={() => onZoom(imgs, currentIndex)}
    >
      {imgs.map((img, index) => (
        <div
          key={img}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
        >
          <img
            src={img}
            alt={`${title} - view ${index + 1}`}
            className={`w-full h-full object-cover transition-transform duration-[6000ms] ease-out ${imgs.length > 1
              ? index === currentIndex ? "scale-110" : "scale-100"
              : "scale-100 group-hover:scale-110"
              }`}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent pointer-events-none" />
      {/* Indicators */}
      {imgs.length > 1 && (
        <>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {imgs.map((_, index) => (
              <div
                key={index}
                className={`h-1 transition-all duration-300 rounded-full ${index === currentIndex ? "w-4 bg-gold" : "w-1 bg-white/30"
                  }`}
              />
            ))}
          </div>

          {/* Navigation Controls */}
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/40 z-20"
            aria-label="Previous image"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/40 z-20"
            aria-label="Next image"
          >
            <ChevronRight size={18} />
          </button>
        </>
      )}
    </div>
  );
};

export default ProductImageSlideshow;
