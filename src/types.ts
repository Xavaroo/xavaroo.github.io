export interface HolidayPackage {
  id: string;
  title: string;
  destination: string;
  duration: string;
  price: number;
  image: string;
  images?: string[];
  categories: ('Adventure' | 'Heritage' | 'Serenity' | 'Legacy' | 'Retreat')[];
  highlights: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
  }[];
}

export type Category = 'All' | 'Adventure' | 'Heritage' | 'Serenity' | 'Legacy' | 'Retreat';
