import { Language } from './language';

export type GeneralInitialState = {
  language: string;
  selectedLang: Language;
  isOnBoardingCompleted: boolean;
  isNetErrorPopUpVisible: boolean;
};
