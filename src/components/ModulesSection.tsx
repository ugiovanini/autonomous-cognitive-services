import { 
  Settings, 
  DollarSign, 
  Megaphone, 
  Heart, 
  Scale, 
  Server,
  Calendar
} from "lucide-react";

const ModulesSection = () => {
  const modules = [
    {
      icon: Calendar,
      title: "Agenda",
      description: "Agendamento inteligente com regras de negócio. Criar, remarcar e cancelar com automação completa.",
      color: "from-cyan-500/20 to-blue-500/20",
      iconColor: "text-cyan-400",
    },
    {
      icon: DollarSign,
      title: "Financeiro",
      description: "Fluxo de caixa, cobranças automatizadas, relatórios e integrações com meios de pagamento.",
      color: "from-emerald-500/20 to-green-500/20",
      iconColor: "text-emerald-400",
    },
    {
      icon: Megaphone,
      title: "Marketing",
      description: "Automação de campanhas, CRM integrado e comunicação multicanal personalizada.",
      color: "from-orange-500/20 to-amber-500/20",
      iconColor: "text-orange-400",
    },
    {
      icon: Heart,
      title: "Terapêutico",
      description: "Suporte a profissionais de saúde com HITL obrigatório para decisões críticas.",
      color: "from-rose-500/20 to-pink-500/20",
      iconColor: "text-rose-400",
    },
    {
      icon: Scale,
      title: "Jurídico",
      description: "Gestão de prazos, documentos e fluxos com validação humana em ações sensíveis.",
      color: "from-violet-500/20 to-purple-500/20",
      iconColor: "text-violet-400",
    },
    {
      icon: Server,
      title: "TIC",
      description: "Automação de infraestrutura, suporte técnico e integrações via APIs REST.",
      color: "from-sky-500/20 to-indigo-500/20",
      iconColor: "text-sky-400",
    },
  ];

  return (
    <section id="modules" className="py-24 lg:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 radial-gradient opacity-50" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-sm text-primary mb-4">
            Módulos Verticais
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Especialização por Domínio
          </h2>
          <p className="text-lg text-muted-foreground">
            Agentes especializados que entendem o contexto específico de cada área, 
            com regras e workflows adaptados para cada necessidade.
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {modules.map((module, index) => (
            <div
              key={module.title}
              className="group relative"
            >
              <div className="glass rounded-2xl p-8 h-full hover:glow-border transition-all duration-300 hover:-translate-y-2">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${module.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <module.icon className={`w-8 h-8 ${module.iconColor}`} />
                </div>

                {/* Content */}
                <h3 className="font-display font-semibold text-xl text-foreground mb-3">
                  {module.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {module.description}
                </p>

                {/* Hover indicator */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Admin note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass">
            <Settings className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              Módulo <span className="text-foreground font-medium">Administração</span> centraliza configurações e relatórios operacionais
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
