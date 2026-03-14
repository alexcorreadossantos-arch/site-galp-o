import { useEffect, useRef, useState } from "react";
import heroVideo from "@/assets/hero-video-new.mp4";
import riverTableImg from "@/assets/river-table-blue-straight.png";

// Sections
import HeroSection from "@/components/sections/HeroSection";
import IntroStrip from "@/components/sections/IntroStrip";
import FeaturedPiece from "@/components/sections/FeaturedPiece";
import Collection from "@/components/sections/Collection";
import Process from "@/components/sections/Process";
import SocialMedia from "@/components/sections/SocialMedia";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Lightbox from "@/components/sections/Lightbox";

const Index = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [lightboxData, setLightboxData] = useState<{ imgs: string[], index: number } | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleCanPlay = () => setVideoLoaded(true);
      video.addEventListener("canplay", handleCanPlay);
      return () => video.removeEventListener("canplay", handleCanPlay);
    }
  }, []);

  const handleZoom = (imgs: string[], index: number) => {
    setLightboxData({ imgs, index });
    setIsZoomed(false);
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection 
        videoRef={videoRef} 
        heroVideo={heroVideo} 
        videoLoaded={videoLoaded} 
      />

      <IntroStrip />

      <FeaturedPiece 
        featuredRef={featuredRef} 
        riverTableImg={riverTableImg} 
        onZoom={handleZoom}
      />

      <Collection onZoom={handleZoom} />

      <Process />

      <SocialMedia />

      <Contact />

      <Footer />

      <Lightbox 
        lightboxData={lightboxData}
        isZoomed={isZoomed}
        setIsZoomed={setIsZoomed}
        onClose={() => setLightboxData(null)}
        setLightboxData={setLightboxData}
      />
    </div>
  );
};

export default Index;

