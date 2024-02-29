import { createSlice } from '@reduxjs/toolkit';
import Arabic from '../../assets/languages/ar.json';
import English from '../../assets/languages/en.json';
import { GeneralInitialState } from './types';

const initialState: GeneralInitialState = {
  language: 'Arabic',
  selectedLang: Arabic,
  isOnBoardingCompleted: false,
  isNetErrorPopUpVisible: false,
};
const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
      if (action.payload === 'Arabic') {
        state.selectedLang = Arabic;
      } else {
        state.selectedLang = English;
      }
    },
    setNetworkPopUpVisible: (state, action) => {
      state.isNetErrorPopUpVisible = action.payload;
    },
    setOnBoardingCompleted: (state, action) => {
      state.isOnBoardingCompleted = action.payload;
    },
  },
});

export const { setLanguage, setNetworkPopUpVisible, setOnBoardingCompleted } =
  generalSlice.actions;
export default generalSlice.reducer;
