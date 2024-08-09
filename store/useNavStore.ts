import { create } from "zustand";
import { persist } from "zustand/middleware";

type NavStore = {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
  currentSection: string;
  setCurrentSection: (section: string) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
};

export const useNavStore = create<NavStore>()(
  persist(
    (set) => ({
      selectedTab: "home", // Change to lowercase
      setSelectedTab: (tab) => set({ selectedTab: tab.toLowerCase() }), // Ensure lowercase
      currentSection: "home",
      setCurrentSection: (section) =>
        set({ currentSection: section.toLowerCase(), selectedTab: section.toLowerCase() }), // Ensure lowercase
      isLoading: true,
      setIsLoading: (loading) => set({ isLoading: loading }),
    }),
    {
      name: "nav-storage",
    }
  )
);