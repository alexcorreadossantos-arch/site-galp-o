import { X, ZoomIn, ZoomOut, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxProps {
  lightboxData: { imgs: string[], index: number } | null;
  onClose: () => void;
  isZoomed: boolean;
  setIsZoomed: (val: boolean) => void;
  setLightboxData: React.Dispatch<React.SetStateAction<{ imgs: string[], index: number } | null>>;
}

const Lightbox = ({ lightboxData, onClose, isZoomed, setIsZoomed, setLightboxData }: LightboxProps) => {
  if (!lightboxData) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-md flex flex-col items-center justify-center p-4 md:p-10 animate-in fade-in duration-300"
    >
      {/* Controls */}
      <div className="absolute top-6 right-6 flex items-center gap-4 z-10">
        <button
          className="text-gold hover:text-white transition-colors p-2 bg-background/40 backdrop-blur-sm rounded-full"
          onClick={() => setIsZoomed(!isZoomed)}
          title={isZoomed ? "Zoom Out" : "Zoom In"}
        >
          {isZoomed ? <ZoomOut size={24} /> : <ZoomIn size={24} />}
        </button>
        <button
          className="text-gold hover:text-white transition-colors p-2 bg-background/40 backdrop-blur-sm rounded-full"
          onClick={onClose}
        >
          <X size={24} />
        </button>
      </div>

      <div
        className={`relative w-full h-full flex items-center justify-center overflow-hidden cursor-move transition-all duration-500 rounded-lg`}
        onClick={() => !isZoomed && onClose()}
      >
        {/* Nav Left */}
        {!isZoomed && lightboxData.imgs.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxData(prev => prev ? { ...prev, index: prev.index === 0 ? prev.imgs.length - 1 : prev.index - 1 } : null);
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm hover:bg-black/80 transition-all z-20"
            aria-label="Previous image"
          >
            <ChevronLeft size={28} />
          </button>
        )}

        <img
          src={lightboxData.imgs[lightboxData.index]}
          alt="Enlarged View"
          className={`max-w-full max-h-full object-contain shadow-2xl border border-gold/20 transition-transform duration-500 ease-in-out ${isZoomed ? "scale-150 cursor-zoom-out" : "scale-100 cursor-zoom-in"}`}
          onClick={(e) => {
            e.stopPropagation();
            setIsZoomed(!isZoomed);
          }}
        />

        {/* Nav Right */}
        {!isZoomed && lightboxData.imgs.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxData(prev => prev ? { ...prev, index: (prev.index + 1) % prev.imgs.length } : null);
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm hover:bg-black/80 transition-all z-20"
            aria-label="Next image"
          >
            <ChevronRight size={28} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Lightbox;
