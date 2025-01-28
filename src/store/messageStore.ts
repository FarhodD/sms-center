import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

export interface SearchData {
  items: Item[];
  total: number;
}

export interface Item {
  id: number;
  organization: Organization;
  recipient: string;
  content: string;
  sentAt: string;
}

export interface Organization {
  id: number;
  value: string;
}

interface SearchDataStore {
  searchData: SearchData;
  setSearchData: (data: SearchData) => void;
  clearSearchData: () => void;
}


export const useSearchDataStore = create<SearchDataStore>((set) => ({
  searchData: { items: [], total: 0 },
  setSearchData: (data) => set({ searchData: data }),
  clearSearchData: () => set({ searchData: { items: [], total: 0 } }),
}));