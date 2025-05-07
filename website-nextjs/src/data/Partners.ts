export type PartnerProps = {
  name: string;
  image: string;
  linkedinUrl: string;
  specialties: string[];
  highlight: string;
  href: string;
  fullDescription: string;
};

export type ValuesProps = {
  message: string;
  name: string;
  src: string;
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
      "Sócio fundador e diretor do Batista, Ramos e Câmara Sociedade de Advogados. Especialista em direito do trabalho. Atuação voltada para a estruturação e compliance de empresas.",
  },
  {
    name: "Felipe Ramos",
    image: "/img/socios/ramos-none.png",
    linkedinUrl: "https://www.linkedin.com/in/felipebramos/",
    specialties: ["Cível", "Família", "Imobiliário"],
    highlight: "🌟 Ouvidor Geral OAB/CG",
    href: "/nosso-time/#ramos",
    fullDescription:
      "Advogado. Sócio fundador do BRCR. Pós-graduando em Advocacia Cível. Pós-graduando em Direito de Família e Sucessões. Atua em Direito civil, família, sucessões, bancário rural e estruturação de negócios.",
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

export const values: ValuesProps[] = [
  {
    message:
      "BRCR possui diferenciais que o tornam um escritório competitivo e inovador no mercado jurídico, apto a oferecer o que há de melhor e mais personalizado na defesa dos interesses de seus clientes.",
    name: "Sociedade de Advogados",
    src: "/img/icones/grupo.svg",
  },
  {
    message:
      "Em nosso escritório de advocacia, primamos pela prestação de serviços com transparência e responsabilidade em cada caso que assumimos. Valorizamos a confiança depositada por nossos clientes e buscamos sempre manter um diálogo claro e honesto em todas as etapas do processo e dos procedimentos.",
    name: "Responsabilidade e Transparência",
    src: "/img/icones/olho.svg",
  },
  {
    message:
      "Com uma atuação proativa, os membros do escritório contribuem, de forma contínua, com a publicação de artigos para divulgação de suas ideias.",
    name: "Artigos e Publicações",
    src: "/img/icones/documento.svg",
  },
  {
    message:
      "Com soluções que favorecem o cliente, a partir da expertise e ampla experiência profissional, atendendo todas as necessidades jurídicas pessoais e empresariais com precisão e eficiência.",
    name: "Atuação Estratégica e Criativa",
    src: "/img/icones/aperto-de-maos.svg",
  },
  {
    message:
      "Acreditamos que clientes e colaboradores contribuem na melhoria da gestão e na dinâmica do escritório. Essa forma de pensar faz com que nossos integrantes desenvolvam diferentes competências dentro da estrutura, sempre em um ambiente participativo e meritocrático.",
    name: "Infraestrutura",
    src: "/img/icones/puzzle.svg",
  },
];
