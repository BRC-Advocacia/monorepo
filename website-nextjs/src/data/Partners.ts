export type PartnerProps = {
  name: string;
  image: string;
  linkedinUrl: string;
  specialties: string[];
  highlight: string;
  href: string;
  fullDescription: string;
};

export const partners: PartnerProps[] = [
  {
    name: "Francian Batista",
    image: "/img/socios/batista-none.png",
    linkedinUrl: "https://www.linkedin.com/in/francian-batista-7541411aa/",
    specialties: ["Empresarial", "Tributário", "Societário"],
    highlight: "🌟 Coordenador de Comissões OAB/CG",
    href: "/nosso-time/#batista",
    fullDescription:
      "Especialista em direito do trabalho. Atuação voltada para a estruturação e compliance de empresas.",
  },
  {
    name: "Felipe Ramos",
    image: "/img/socios/ramos-none.png",
    linkedinUrl: "https://www.linkedin.com/in/felipebramos/",
    specialties: ["Cível", "Família", "Imobiliário"],
    highlight: "🌟 Ouvidor Geral OAB/CG",
    href: "/nosso-time/#ramos",
    fullDescription:
      "Advogado. Pós-graduando em Advocacia Cível. Pós-graduando em Direito de Família e Sucessões. Atua em Direito civil, família, sucessões, bancário rural e estruturação de negócios.",
  },
  {
    name: "Thiago Câmara",
    image: "/img/socios/camara-none.png",
    linkedinUrl: "https://www.instagram.com/advthiagocamara/",
    specialties: ["Consumidor", "Trabalhista"],
    highlight: "🌟 Procurador do PROCON de Esperança",
    href: "/nosso-time/#camara",
    fullDescription:
      "Advogado Graduado em Direito pela Unifacisa. Com foco na expertise em leis trabalhistas e uma abordagem humanizada centrada no cliente, sua missão é garantir que seus direitos sejam respeitados e que você tenha uma jornada de trabalho justa e equitativa.",
  },
];
