import { Instagram, Facebook } from "lucide-react";

const SocialMedia = () => {
  const socialLinks = [
    {
      name: "Instagram",
      icon: <Instagram size={24} />,
      url: "https://www.instagram.com/galpao360.woodstudio",
      delay: "duration-500",
    },
    {
      name: "Facebook",
      icon: <Facebook size={24} />,
      url: "https://www.facebook.com/galpão360woodstudio",
      delay: "duration-500 delay-75",
    },
    {
      name: "TikTok",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
        </svg>
      ),
      url: "https://tiktok.com/@galpao360woodstudio",
      delay: "duration-500 delay-150",
    },
  ];

  return (
    <section className="py-24 border-y border-gold-muted bg-card/30">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          Nos siga nas redes sociais
        </h2>
        <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-16">
          Acompanhe nosso dia a dia e criações exclusivas
        </p>
        <div className="flex flex-wrap justify-center gap-12 md:gap-20">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col items-center gap-5 transition-transform hover:-translate-y-2 ${link.delay}`}
            >
              <div className="w-16 h-16 rounded-full border border-gold-muted bg-background flex items-center justify-center text-gold group-hover:border-gold group-hover:bg-[hsl(var(--gold)/0.05)] group-hover:shadow-[0_0_20px_rgba(186,160,111,0.2)] transition-all duration-300">
                {link.icon}
              </div>
              <span className="text-xs tracking-widest uppercase text-foreground/60 font-light group-hover:text-gold transition-colors duration-300">
                {link.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
