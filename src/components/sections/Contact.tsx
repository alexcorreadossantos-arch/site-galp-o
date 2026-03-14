import { useState } from "react";
import { Send, Sparkles, MessageSquare } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formState, setFormState] = useState({
    nome: "",
    contato: "",
    categoria: "",
    resina: "",
    tamanho: "",
    dimW: "",
    dimD: "",
    mensagem: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const briefingData = {
      ...formState,
      data_envio: new Date().toLocaleString("pt-BR"),
      categoria_formatada: {
        mesa_jantar: "Mesa de Jantar",
        mesa_centro: "Mesa de Centro",
        relogio: "Relógio de Parede",
        tabua: "Tábua de Churrasco",
        abridor: "Abridor de Garrafa Magnético",
        outro: "Tenho uma idéia"
      }[formState.categoria] || "Projeto Especial",
      resina_formatada: {
        azul_centauro: "Azul Centauro",
        esmeralda: "Verde Esmeralda",
        transparente: "Cristal Puro",
        preto_ebano: "Preto Ébano",
        personalizada: "Cor Personalizada"
      }[formState.resina] || "Personalizada"
    };

    try {
      const serviceId = "service_ewei3mg";
      const templateId = "template_xj1d05y";
      const publicKey = "r5ASSUPsH4JYMXvIU";

      const templateParams = {
        from_name: formState.nome,
        reply_to: formState.contato,
        category: briefingData.categoria_formatada,
        resin: briefingData.resina_formatada,
        size: formState.tamanho === "indefinido" ? "Não definido" : `${formState.dimW} x ${formState.dimD} cm`,
        message: formState.mensagem,
        submission_date: briefingData.data_envio
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      toast.success("Projeto enviado! Analisaremos os detalhes agora mesmo.");
      setIsSubmitting(false);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Erro no processamento:", error);
      toast.error("Ocorreu um erro ao processar. Mas não se preocupe, tentaremos novamente.");
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--gold)/0.05)] via-[hsl(var(--gold)/0.02)] to-[hsl(var(--gold)/0.05)]" />
      <div className="relative max-w-3xl mx-auto text-center space-y-8">
        <p className="text-xs tracking-[0.4em] text-gold uppercase">Sua Peça Única Aguarda</p>
        <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight">
          Transforme Madeira
          <span className="block italic font-normal text-gold mt-2">em Obra de Arte</span>
        </h2>
        <p className="font-elegant text-lg text-foreground/60 max-w-xl mx-auto">
          Conte-nos sobre o seu sonho. Criamos um briefing rápido para captar a essência da sua futura peça exclusiva.
        </p>

        <div className="mt-12 bg-card/30 backdrop-blur-sm border border-gold-muted p-8 md:p-12 text-left max-w-4xl mx-auto relative overflow-hidden group text-foreground">
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-gold/10 blur-[80px] rounded-full group-hover:bg-gold/15 transition-colors duration-700" />

          {isSubmitted ? (
            <div className="py-12 text-center space-y-6 animate-in fade-in zoom-in duration-500">
              <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto border border-gold/30">
                <Sparkles className="text-gold w-10 h-10" />
              </div>
              <h3 className="font-display text-3xl font-bold">Briefing Recebido!</h3>
              <p className="font-elegant text-xl text-foreground/70">
                Nossa equipe de design já está analisando seus detalhes.<br />
                Em breve, entraremos em contato para dar vida a este projeto.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="text-gold text-sm tracking-widest uppercase hover:underline underline-offset-4 pt-4"
              >
                Enviar outro projeto
              </button>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-6 custom-scrollbar">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] tracking-[0.2em] uppercase text-gold font-medium">Seu Nome</label>
                  <Input
                    required
                    placeholder="Ex: Alexandre Santos"
                    className="bg-background/50 border-gold-muted focus:border-gold transition-colors h-12 focus-gold-glow"
                    value={formState.nome}
                    onChange={(e) => setFormState({ ...formState, nome: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] tracking-[0.2em] uppercase text-gold font-medium">WhatsApp ou E-mail</label>
                  <Input
                    required
                    placeholder="Ex: (54) 99999-9999"
                    className="bg-background/50 border-gold-muted focus:border-gold transition-colors h-12 focus-gold-glow"
                    value={formState.contato}
                    onChange={(e) => setFormState({ ...formState, contato: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] tracking-[0.2em] uppercase text-gold font-medium">Tipo de Peça</label>
                  <Select onValueChange={(val) => setFormState({ ...formState, categoria: val })}>
                    <SelectTrigger className="bg-background/50 border-gold-muted focus:border-gold h-12 focus-gold-glow">
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-gold-muted text-foreground">
                      <SelectItem value="mesa_jantar">Mesa de Jantar</SelectItem>
                      <SelectItem value="mesa_centro">Mesa de Centro</SelectItem>
                      <SelectItem value="relogio">Relógio de Parede</SelectItem>
                      <SelectItem value="tabua">Tábua de Churrasco</SelectItem>
                      <SelectItem value="abridor">Abridor de Garrafa Magnético</SelectItem>
                      <SelectItem value="outro">Projeto Especial</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] tracking-[0.2em] uppercase text-gold font-medium">Tipo de Acabamento</label>
                  <Select onValueChange={(val) => setFormState({ ...formState, resina: val })}>
                    <SelectTrigger className="bg-background/50 border-gold-muted focus:border-gold h-12 focus-gold-glow">
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-gold-muted text-foreground">
                      <SelectItem value="azul_centauro">Azul Centauro (Destaque)</SelectItem>
                      <SelectItem value="esmeralda">Verde Esmeralda</SelectItem>
                      <SelectItem value="transparente">Cristal Puro</SelectItem>
                      <SelectItem value="preto_ebano">Preto Ébano</SelectItem>
                      <SelectItem value="personalizada">Cor Personalizada</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] tracking-[0.2em] uppercase text-gold font-medium">Tamanho Aproximado</label>
                  <Select 
                    onValueChange={(val) => setFormState({ ...formState, tamanho: val, dimW: "", dimD: "" })}
                    value={formState.tamanho || "indefinido"}
                  >
                    <SelectTrigger className="bg-background/50 border-gold-muted focus:border-gold h-12 focus-gold-glow">
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-gold-muted text-foreground">
                      <SelectItem value="indefinido">Não definido</SelectItem>
                      <SelectItem value="selecionar">Selecionar Dimensões</SelectItem>
                    </SelectContent>
                  </Select>

                  {formState.tamanho === "selecionar" && (
                    <div className="flex items-center gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
                      <div className="flex-1">
                        <Input
                          type="text"
                          placeholder="Largura (cm)"
                          value={formState.dimW}
                          onChange={(e) => {
                            const val = e.target.value.replace(/\D/g, '').slice(0, 3);
                            setFormState(prev => ({ ...prev, dimW: val }));
                          }}
                          className="bg-background/50 border-gold-muted focus:border-gold h-12 focus-gold-glow text-center"
                        />
                      </div>
                      <span className="text-gold/40">x</span>
                      <div className="flex-1">
                        <Input
                          type="text"
                          placeholder="Profundidade (cm)"
                          value={formState.dimD}
                          onChange={(e) => {
                            const val = e.target.value.replace(/\D/g, '').slice(0, 3);
                            setFormState(prev => ({ ...prev, dimD: val }));
                          }}
                          className="bg-background/50 border-gold-muted focus:border-gold h-12 focus-gold-glow text-center"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] tracking-[0.2em] uppercase text-gold font-medium">Conte-nos mais sobre seu sonho</label>
                <Textarea
                  placeholder="Descreva detalhes, inspirações ou dúvidas..."
                  className="bg-background/50 border-gold-muted focus:border-gold min-h-[120px] resize-none focus-gold-glow"
                  value={formState.mensagem}
                  onChange={(e) => setFormState({ ...formState, mensagem: e.target.value })}
                />
              </div>

              <div className="pt-4 flex justify-center">
                <button
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-12 py-5 bg-gradient-gold text-primary-foreground font-semibold tracking-[0.2em] uppercase text-sm transition-all duration-300 hover:opacity-90 hover:scale-105 shadow-gold flex items-center justify-center gap-3 disabled:opacity-50 disabled:scale-100 focus:outline-none"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send size={18} />
                      Enviar Briefing
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>

        <div className="flex flex-wrap gap-8 justify-center pt-8 border-t border-gold-muted/20">
          <a href="https://wa.me/5554996043029" className="flex items-center gap-2 text-gold hover:text-white transition-colors text-xs tracking-widest uppercase group">
            <MessageSquare size={16} className="group-hover:scale-110 transition-transform" />
            WhatsApp Direto
          </a>
          <a href="mailto:contato@galpao360.com" className="flex items-center gap-2 text-gold hover:text-white transition-colors text-xs tracking-widest uppercase group">
            <Send size={16} className="group-hover:scale-110 transition-transform" />
            contato@galpao360.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
