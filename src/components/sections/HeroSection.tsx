import { RefObject } from "react";
import logoGalpao from "@/assets/logo-galpao.png";

interface HeroSectionProps {
  videoRef: RefObject<HTMLVideoElement>;
  heroVideo: string;
  videoLoaded: boolean;
}

const HeroSection = ({ videoRef, heroVideo, videoLoaded }: HeroSectionProps) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video background */}
      <video
        ref={videoRef}
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 scale-[1.12] origin-center ${videoLoaded ? "opacity-60" : "opacity-0"}`}
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/30 to-background/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />

      {/* Hero Content */}
      <div className="relative text-center px-6 max-w-5xl mx-auto">
        <img
          src={logoGalpao}
          alt="Galpão 360 Logo"
          className={`w-full max-w-[120px] md:max-w-[150px] mx-auto mb-6 mix-blend-screen contrast-150 brightness-[1.15] transition-all duration-1000 ease-out delay-300 ${videoLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"}`}
        />
        <h1 className="font-display text-7xl md:text-9xl font-bold mb-4 leading-none tracking-tight">
          <span className="block text-foreground">Galpão 360</span>
        </h1>
        <h2 className="font-display text-gold italic font-normal text-4xl md:text-6xl mb-8 tracking-wide">
          Wood Studio
        </h2>

        <p className="font-elegant text-xl md:text-2xl font-light text-foreground/70 mb-10 italic tracking-wide">
          A exclusividade da natureza refletindo a sua personalidade.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => document.getElementById('colecao')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-4 bg-gradient-gold text-primary-foreground font-semibold tracking-[0.15em] uppercase text-sm transition-all duration-300 hover:opacity-90 hover:scale-105 shadow-gold"
          >
            Ver Coleção
          </button>
          <button
            onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-4 border border-gold-muted text-gold font-light tracking-[0.15em] uppercase text-sm transition-all duration-300 hover:border-gold hover:bg-[hsl(var(--gold)/0.08)]"
          >
            Solicitar Orçamento
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
