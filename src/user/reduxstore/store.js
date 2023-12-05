import { configureStore } from '@reduxjs/toolkit';
import basketReducer from "./basketReducer";

const store = configureStore({
    reducer: { 
     //name        reducer 파일이름
      basket : basketReducer,
    }
  }) 
  
  export default store;