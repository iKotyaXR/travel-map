import { configureStore } from '@reduxjs/toolkit';
import travelReducer from '../features/travel/travelSlice';

export const store = configureStore({
    reducer: {
        travel: travelReducer,
    },
});

// типы для хуков
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
