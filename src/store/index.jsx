import { configureStore } from '@reduxjs/toolkit';
import quesSlice from './ques-slice';


const store = configureStore({
    reducer: {
        ques: quesSlice.reducer
    }
})

export default store;