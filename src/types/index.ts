// src/types/index.ts
export interface Topic {
    id: number;
    title: string;
    category: 'known' | 'hidden';
    shortDescription: string;
    fullDescription: string;
    imageUrl: string | unknown;
    slug: string;
  }