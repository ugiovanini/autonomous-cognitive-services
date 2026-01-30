import { MessageSquare, Brain, Workflow, Database, Shield } from "lucide-react";

const PlatformSection = () => {
  const architectureLayers = [
    {
      icon: MessageSquare,
      title: "Canal",
      description: "Web, WhatsApp, E-mail, Voz",
    },
    {
      icon: Brain,
      title: "Orquestrador",
      description: "Entendimento de intenção e roteamento",
    },
    {
      icon: Workflow,
      title: "Agentes & Workflows",
      description: "Execução automatizada de tarefas",
    },
    {
      icon: Database,
      title: "Dados",
      description: "Estado persistente e cache",
    },
    {
      icon: Shield,
      title: "Governança",
      description: "Auditoria, logs e HITL",
    },
  ];

  return (
    <section id="platform" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Autonomous Operations</span>
            <br />
            <span className="gradient-text">Platform (AOP)</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Plataforma multi-tenant de automação operacional e decisão assistida 
            baseada em Agentic AI. Do atendimento à execução, com governança em cada etapa.
          </p>
        </div>

        {/* Architecture Flow */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connection line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent hidden lg:block" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {architectureLayers.map((layer, index) => (
              <div
                key={layer.title}
                className="group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="glass rounded-2xl p-6 h-full hover:glow-border transition-all duration-300 hover:-translate-y-1">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300">
                    <layer.icon className="w-7 h-7 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                    {layer.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {layer.description}
                  </p>

                  {/* Step number */}
                  <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-xs font-medium text-primary">
                      {index + 1}
                    </span>
                  </div>
                </div>

                {/* Arrow connector for desktop */}
                {index < architectureLayers.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            <span className="text-primary font-medium">Núcleo arquitetural:</span>{" "}
            Conversação → Entendimento → Decisão Assistida → Execução → Observabilidade → Governança
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
