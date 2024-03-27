import { create } from 'zustand';

export enum AppLanguage {
  EN_US = 'EN_US',
  ZH_CN = 'ZH_CN',
}

export interface AppContext {
  language: AppLanguage;
  setLanguage: (lang: AppLanguage) => void;
}

export const useAppContext = create<AppContext>(set => {
  return {
    language: AppLanguage.EN_US,
    setLanguage: lang => {
      set({ language: lang });
    },
  };
});
