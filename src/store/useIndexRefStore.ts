import { RefObject } from 'react';
import { create } from 'zustand';

type IndexRefStore = {
  featuredEventsRef: RefObject<HTMLDivElement> | null;
  setFeaturedEventsRef: (ref: RefObject<HTMLDivElement>) => void;
  upcomingEventsRef: RefObject<HTMLDivElement> | null;
  setUpcomingEventsRef: (ref: RefObject<HTMLDivElement>) => void;
  faqRef: RefObject<HTMLDivElement> | null;
  setFAQRef: (ref: RefObject<HTMLDivElement>) => void;
};

export const useIndexRefStore = create<IndexRefStore>((set) => ({
  featuredEventsRef: null,
  setFeaturedEventsRef: (featuredEventsRef) => set({ featuredEventsRef }),
  upcomingEventsRef: null,
  setUpcomingEventsRef: (upcomingEventsRef) => set({ upcomingEventsRef }),
  faqRef: null,
  setFAQRef: (faqRef) => set({ faqRef }),
}));
