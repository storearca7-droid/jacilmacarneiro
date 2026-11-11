export interface Specialty {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  focusAreas: string[];
  subcategories?: string[];
  iconName: 'brain' | 'heart' | 'sparkles' | 'baby';
}

export interface TrainingItem {
  category: 'PosGraduacao' | 'Capacitacao';
  title: string;
  status: 'concluido' | 'em_andamento';
  description?: string;
}

export interface ContactChannel {
  title: string;
  modality: string;
  location?: string;
  phone?: string;
  whatsapp?: string;
  instagram?: string;
  linkText: string;
  url: string;
  isPrimary?: boolean;
}
