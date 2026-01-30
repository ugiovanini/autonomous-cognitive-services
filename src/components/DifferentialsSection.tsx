import { Shield, Users, Eye, Lock, Scale, Zap } from "lucide-react";

const DifferentialsSection = () => {
  const differentials = [
    {
      icon: Users,
      title: "Human-in-the-Loop (HITL)",
      description: "Validação humana obrigatória em decisões críticas. Saúde, jurídico e financeiro sempre com supervisão.",
      highlight: true,
    },
    {
      icon: Eye,
      title: "Observabilidade Total",
      description: "Logs, métricas e auditoria de todas as decisões. Rastreabilidade completa para compliance.",
    },
    {
      icon: Lock,
      title: "Segurança Enterprise",
      description: "OAuth2, RBAC, JWT e segregação multi-tenant. Seus dados protegidos em cada camada.",
    },
    {
      icon: Shield,
      title: "LGPD by Design",
      description: "Privacidade desde a concepção. Minimização de dados e logs sem PII sensível.",
    },
    {
      icon: Scale,
      title: "Governança de IA",
      description: "Alinhado às normas ISO/IEC 38500 e 42001. IA responsável e auditável.",
    },
    {
      icon: Zap,
      title: "RAG Integrado",
      description: "Respostas enriquecidas com conhecimento do seu negócio. Base vetorial com FAISS.",
    },
  ];

  return (
    <section id="differentials" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full glass text-sm text-primary mb-4">
              Por que nos escolher
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-foreground">Não é chatbot.</span>
              <br />
              <span className="text-foreground">Não é RPA isolado.</span>
              <br />
              <span className="gradient-text">É automação governada.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              A AOP combina o melhor da IA conversacional com automação de processos, 
              mas com algo que falta em soluções genéricas: governança nativa e 
              controle humano quando necessário.
            </p>

            {/* Key point */}
            <div className="glass rounded-2xl p-6 glow-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-lg text-foreground mb-1">
                    Autonomia com Responsabilidade
                  </h4>
                  <p className="text-muted-foreground">
                    Agentes executam com autonomia, mas decisões críticas sempre passam 
                    por validação humana. Confiança construída sobre transparência.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {differentials.map((item, index) => (
              <div
                key={item.title}
                className={`glass rounded-xl p-5 hover:glow-border transition-all duration-300 ${
                  item.highlight ? "sm:col-span-2 glow-primary" : ""
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    item.highlight 
                      ? "bg-gradient-to-br from-primary to-accent" 
                      : "bg-primary/10"
                  }`}>
                    <item.icon className={`w-5 h-5 ${
                      item.highlight ? "text-primary-foreground" : "text-primary"
                    }`} />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
