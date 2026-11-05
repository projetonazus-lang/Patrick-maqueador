import { ServiceItem, PortfolioItem, Testimonial, FaqItem } from '../types';

export const WHATSAPP_PHONE = '5567993438778';
export const WHATSAPP_DISPLAY = '(67) 99343-8778';
export const WHATSAPP_LINK = 'https://wa.me/5567993438778';
export const INSTAGRAM_HANDLE = '@patrick_makeup';
export const INSTAGRAM_LINK = 'https://www.instagram.com/patrick_makeup/';
export const STUDIO_ADDRESS = 'R. Recanto das Águas, 308 - Parque Residencial Maria Aparecida Pedrossian, Campo Grande - MS, CEP 79046-050';
export const STUDIO_CITY = 'Campo Grande - MS';
export const GOOGLE_RATING = 5.0;
export const GOOGLE_REVIEW_COUNT = 7;

export const HERO_IMAGE = '/assets/images/hero_glamour_makeup_1793794428232.jpg';
export const BRIDAL_IMAGE = '/assets/aistudio/image_7306326b.png';
export const FESTA_IMAGE = '/assets/aistudio/image_b4ef05cc.png';
export const ARTIST_IMAGE = '/assets/aistudio/image_f5b00a23.png';
export const SOCIAL_IMAGE = '/assets/aistudio/image_4e78258d.png';
export const NATURAL_GLOW_IMAGE = '/assets/images/portfolio_natural_glow_1793794448608.jpg';
export const FORMANDA_IMAGE = '/assets/images/portfolio_formanda_glam_1793794448482.jpg';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'noivas',
    title: 'Maquiagem de Noivas',
    subtitle: 'Um cuidado minucioso para o momento mais especial e inesquecível da sua história',
    duration: 'Atendimento exclusivo',
    idealFor: 'Noivas, casamentos religiosos, cerimônias civis e ensaios pré-wedding',
    description: 'Produção delicada e duradoura pensada para valorizar a beleza natural da noiva em cada detalhe. Técnicas de preparação de pele para resistir a fortes emoções, lágrimas e iluminação de fotografia e filmagem, transmitindo serenidade e elegância.',
    highlights: [
      'Atendimento personalizado e dedicado à noiva',
      'Preparação e hidratação da pele com foco em viço e fixação',
      'Aplicação de cílios e harmonia com o estilo do vestido',
      'Técnicas de alta durabilidade para lágrimas e clima'
    ],
    image: BRIDAL_IMAGE,
    badge: 'Produção Especial'
  },
  {
    id: 'social',
    title: 'Maquiagem Social',
    subtitle: 'Sofisticação e delicadeza para valorizar seus traços em qualquer ocasião',
    duration: 'Atendimento personalizado',
    idealFor: 'Aniversários, jantares, fotos corporativas, coquetéis e celebrações',
    description: 'Maquiagem com foco na leveza e no equilíbrio, respeitando a sua personalidade. Ideal para quem busca uma pele com acabamento impecável, olhos valorizados e lábios harmônicos, sem perder a autenticidade.',
    highlights: [
      'Alinhamento prévio com o estilo e preferência da cliente',
      'Pele uniforme com aspecto natural e saudável',
      'Destaque elegante para o olhar e sobrancelhas',
      'Finalização com produtos de excelente fixação'
    ],
    image: SOCIAL_IMAGE,
    badge: 'Versátil & Elegante'
  },
  {
    id: 'eventos',
    title: 'Maquiagem para Eventos',
    subtitle: 'Presença marcante e acabamento impecável para noites e festas memoráveis',
    duration: 'Atendimento com horário marcado',
    idealFor: 'Madrinhas, formandas, convidadas de honra e festas de gala',
    description: 'Produção com técnica precisa para eventos noturnos ou de longa duração. Olhar destacado com esfumados sofisticados ou pontos de brilho, contorno suave e fixação ideal para aproveitar a celebração com total confiança.',
    highlights: [
      'Harmonização das cores da make com vestido e acessórios',
      'Técnicas de definição para fotos e iluminação de festa',
      'Cílios minuciosamente aplicados para conforto durante o evento',
      'Resistência e conforto para curtir o momento'
    ],
    image: FESTA_IMAGE,
    badge: 'Destaque & Glamour'
  }
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: 'port-1',
    title: 'Produção Noiva Elegance',
    category: 'noivas',
    categoryLabel: 'Maquiagem de Noivas',
    image: BRIDAL_IMAGE,
    description: 'Pele iluminada com acabamento natural e olhos suaves em tons champagne para cerimônia inesquecível.',
    clientName: 'Noiva Patrick Alcântara Beauty',
    eventDate: 'Campo Grande - MS',
    productsUsed: ['Preparação com Hidratação Profunda', 'Pele Luminous', 'Tons Champagne e Rosé', 'Fixador de Longa Duração'],
    finishType: 'Acabamento Luminoso & Resistente'
  },
  {
    id: 'port-2',
    title: 'Glow Bronze & Lábios Nude',
    category: 'festas',
    categoryLabel: 'Eventos & Festas',
    image: HERO_IMAGE,
    description: 'Harmonia em tons terrosos quentes e acabamento acetinado com destaque para o brilho natural.',
    clientName: 'Produção para Evento',
    eventDate: 'Campo Grande - MS',
    productsUsed: ['Contorno Suave', 'Pontos de Luz em Ouro Rosé', 'Lábios Nude Hidratados', 'Cílios com Efeito Natural'],
    finishType: 'Glow Sofisticado'
  },
  {
    id: 'port-3',
    title: 'Rose Gold & Olhar Marcante',
    category: 'festas',
    categoryLabel: 'Eventos & Festas',
    image: FESTA_IMAGE,
    description: 'Pele radiante com esfumado metálico suave e definição elegante para noites especiais.',
    clientName: 'Madrinha / Convidada Especial',
    eventDate: 'Campo Grande - MS',
    productsUsed: ['Sombra Rose Gold', 'Delineado Sutil', 'Pele com Viço', 'Fixação Prolongada'],
    finishType: 'Soft Glam'
  },
  {
    id: 'port-4',
    title: 'Formatura & Celebração de Gala',
    category: 'formandas',
    categoryLabel: 'Eventos & Festas',
    image: FORMANDA_IMAGE,
    description: 'Produção expressiva com alta definição para fotos de formatura e longa duração para a comemoração.',
    clientName: 'Produção de Gala',
    eventDate: 'Campo Grande - MS',
    productsUsed: ['Pele Uniforme HD', 'Olhos Esfumados', 'Blush Acetinado', 'Batom de Longa Duração'],
    finishType: 'Alta Definição'
  },
  {
    id: 'port-5',
    title: 'Beleza Natural & Viço Real',
    category: 'social',
    categoryLabel: 'Maquiagem Social',
    image: SOCIAL_IMAGE,
    description: 'Maquiagem leve que valoriza a textura real e a singularidade da cliente para momentos diurnos.',
    clientName: 'Maquiagem Social',
    eventDate: 'Campo Grande - MS',
    productsUsed: ['Skincare Preparatório', 'Base Leve e Fluida', 'Sobrancelhas Naturais', 'Gloss Hidratante'],
    finishType: 'Clean Beauty & Viço Natural'
  }
];

export const GOOGLE_REVIEWS_INFO = {
  rating: 5.0,
  reviewCount: 7,
  source: 'Google Avaliações',
  badge: 'Classificação Máxima no Google'
};

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Como faço para agendar meu horário com o Patrick?',
    answer: 'O agendamento é feito diretamente pelo WhatsApp (67) 99343-8778. Você pode enviar a data desejada, o tipo de evento e o horário em que precisa estar pronta para verificarmos a disponibilidade na agenda.'
  },
  {
    id: 'faq-2',
    question: 'Onde o atendimento é realizado?',
    answer: 'O atendimento é realizado em nosso espaço em Campo Grande - MS, localizado na R. Recanto das Águas, 308 - Parque Residencial Maria Aparecida Pedrossian, CEP 79046-050. Para atendimentos em locais específicos ou noivas, consulte as condições via WhatsApp.'
  },
  {
    id: 'faq-3',
    question: 'Como funciona a preparação para noivas e eventos?',
    answer: 'Alinhamos previamente com você o estilo do evento, vestido e referências para que a maquiagem seja feita sob medida, valorizando sua essência e garantindo conforto e durabilidade durante todo o momento.'
  },
  {
    id: 'faq-4',
    question: 'Com quanta antecedência devo entrar em contato?',
    answer: 'Recomendamos entrar em contato com o máximo de antecedência possível, principalmente para datas comemorativas, finais de semana e noivas, garantindo o melhor horário para a sua produção.'
  }
];

export const STATS_DATA = [
  { value: '5,0 ★', label: 'Avaliação no Google', detail: 'Classificação máxima com 7 avaliações' },
  { value: '100%', label: 'Atendimento Personalizado', detail: 'Cuidado e respeito à sua individualidade' },
  { value: 'Noivas & Eventos', label: 'Produções Especiais', detail: 'Técnica e sensibilidade em cada detalhe' },
  { value: 'Campo Grande - MS', label: 'Localização Privilegiada', detail: 'Ambiente acolhedor e profissional' }
];
