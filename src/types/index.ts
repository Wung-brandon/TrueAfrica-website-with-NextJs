// src/types/index.ts
export interface Topic {
    id: number;
    title: string;
    category?: 'known' | 'hidden';
    shortDescription?: string;
    fullDescription: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    details?: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    imageUrl?: string | any;
    slug?: string;
  }