import { ChevronLeft, Shield, Lock, Eye, FileText, UserCheck } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground py-20 px-6 font-elegant">
      <div className="max-w-4xl mx-auto space-y-16">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-gold hover:text-white transition-all text-sm tracking-[0.2em] uppercase group mb-8 border border-gold/20 px-4 py-2 rounded-full bg-gold/5 hover:bg-gold/10"
        >
          <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Voltar para a Experiência
        </Link>
        
        <header className="space-y-6 border-b border-gold/20 pb-12 text-center md:text-left">
          <div className="inline-block px-3 py-1 border border-gold/30 rounded-full mb-4">
             <span className="text-[10px] tracking-[0.3em] uppercase text-gold">Privacidade & Transparência</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight">Política de <span className="text-gold italic font-normal">Privacidade</span></h1>
          <p className="text-foreground/60 max-w-2xl text-lg leading-relaxed">
            Sua confiança é a base de nossa arte. No Galpão 360 Wood Studio, tratamos seus dados com o mesmo zelo com que tratamos nossas madeiras nobres.
          </p>
        </header>

        <section className="space-y-16 text-lg leading-relaxed text-foreground/80">
          {/* 1. Introdução */}
          <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-start">
            <div className="flex items-center gap-3 text-gold">
              <Shield size={24} />
              <h2 className="text-xl font-display font-semibold tracking-widest uppercase">1. Compromisso</h2>
            </div>
            <div className="space-y-4">
              <p>
                Sua privacidade é fundamental. É política do Galpão 360 Wood Studio respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site Galpão 360, e outros sistemas que operamos.
              </p>
              <p>
                Atuamos em conformidade com a <strong>Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018)</strong>, garantindo transparência e segurança no tratamento das suas informações pessoais.
              </p>
            </div>
          </div>

          {/* 2. Coleta de Dados via Briefing */}
          <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-start">
            <div className="flex items-center gap-3 text-gold">
              <FileText size={24} />
              <h2 className="text-xl font-display font-semibold tracking-widest uppercase">2. Briefing Digital</h2>
            </div>
            <div className="space-y-4 font-light">
              <p>
                Coletamos informações pessoais (nome, contato, preferências de projeto) através do nosso formulário de briefing com o objetivo de:
              </p>
              <ul className="list-none space-y-3 pl-2 border-l-2 border-gold/20">
                <li><span className="text-gold mr-2">✦</span>Identificar o cliente e estabelecer comunicação direta;</li>
                <li><span className="text-gold mr-2">✦</span>Compreender as especificações técnicas para orçamentos (tipo de peça, resina, dimensões);</li>
                <li><span className="text-gold mr-2">✦</span>Incentivar a co-criação de projetos artísticos personalizados.</li>
              </ul>
              <p className="p-4 bg-gold/5 border border-gold/10 italic text-sm">
                Utilizamos o serviço <strong>EmailJS</strong> para o processamento técnico do envio dessas informações. Seus dados são encaminhados diretamente para nossa equipe comercial de forma segura.
              </p>
            </div>
          </div>

          {/* 3. Armazenamento e Segurança */}
          <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-start">
            <div className="flex items-center gap-3 text-gold">
              <Lock size={24} />
              <h2 className="text-xl font-display font-semibold tracking-widest uppercase">3. Proteção</h2>
            </div>
            <div className="space-y-4 font-light">
              <p>
                Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Protegemos seus dados dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos, bem como acesso não autorizado.
              </p>
              <p>
                Não compartilhamos suas informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei ou para a execução de serviços logísticos vinculados ao seu pedido.
              </p>
            </div>
          </div>

          {/* 4. Direitos do Usuário (LGPD) */}
          <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-start">
            <div className="flex items-center gap-3 text-gold">
              <UserCheck size={24} />
              <h2 className="text-xl font-display font-semibold tracking-widest uppercase">4. Seus Direitos</h2>
            </div>
            <div className="space-y-4 font-light">
              <p>
                Conforme a LGPD, você possui o direito de:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Acessar seus dados pessoais",
                  "Corrigir dados incompletos ou inexatos",
                  "Solicitar a anonimização ou bloqueio",
                  "Portabilidade dos dados",
                  "Eliminar dados desnecessários",
                  "Revogar o consentimento"
                ].map((right, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm p-3 border border-gold/10 bg-card">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                    {right}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 5. Cookies */}
          <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-start">
            <div className="flex items-center gap-3 text-gold">
              <Eye size={24} />
              <h2 className="text-xl font-display font-semibold tracking-widest uppercase">5. Cookies</h2>
            </div>
            <div className="space-y-4 font-light">
              <p>
                Como é prática comum em quase todos os sites profissionais, este site usa cookies, que são pequenos arquivos baixados no seu computador, para melhorar sua experiência.
              </p>
              <p>
                Você pode impedir a configuração de cookies ajustando as configurações do seu navegador. No entanto, esteja ciente de que a desativação de cookies afetará a funcionalidade deste e de muitos outros sites que você visita.
              </p>
            </div>
          </div>

          {/* Rodapé Interno */}
          <div className="pt-12 border-t border-gold/20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="space-y-2 text-center md:text-left">
                <p className="text-sm font-semibold text-gold tracking-widest uppercase">Contato Encarregado de Dados</p>
                <p className="text-sm italic">contato@galpao360.com</p>
              </div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
                Última atualização: Março de 2024
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

