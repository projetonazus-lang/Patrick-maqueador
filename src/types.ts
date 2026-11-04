export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  idealFor: string;
  description: string;
  highlights: string[];
  image: string;
  badge?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'noivas' | 'festas' | 'formandas' | 'social';
  categoryLabel: string;
  image: string;
  description: string;
  clientName: string;
  eventDate: string;
  productsUsed: string[];
  finishType: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  content: string;
  occasion: string;
  date: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
