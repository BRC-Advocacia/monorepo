export type PartnerProps = {
  name: string;
  image: string;
  linkedinUrl: string;
  specialties: string[];
  highlight: string;
  href: string;
};

export const partners: PartnerProps[] = [
  {
    name: "Francian Batista",
    image: "/img/socios/batista-none.png",
    linkedinUrl: "https://www.linkedin.com/in/francian-batista-7541411aa/",
    specialties: ["Empresarial", "Tributário", "Societário"],
    highlight: "🌟 Coordenador de Comissões OAB/CG",
    href: "/nosso-time/#batista",
  },
  {
    name: "Felipe Ramos",
    image: "/img/socios/ramos-none.png",
    linkedinUrl: "https://www.linkedin.com/in/felipebramos/",
    specialties: ["Cível", "Família", "Imobiliário"],
    highlight: "🌟 Ouvidor Geral OAB/CG",
    href: "/nosso-time/#ramos",
  },
  {
    name: "Thiago Câmara",
    image: "/img/socios/camara-none.png",
    linkedinUrl: "https://www.instagram.com/advthiagocamara/",
    specialties: ["Consumidor", "Trabalhista"],
    highlight: "🌟 Procurador do PROCON de Esperança",
    href: "/nosso-time/#camara",
  },
];
