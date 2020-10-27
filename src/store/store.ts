import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { createLogger } from "redux-logger";
import reducer from "../reducers";

const middlewares: any = [];
if (process.env.NODE_ENV === "development") {
    const logger = createLogger({
        diff: true,
    });

    middlewares.push(logger);
}

export const store = configureStore({
    reducer,
    middleware: [...getDefaultMiddleware(), ...middlewares],
});
console.log("store",store);
export type RootState = ReturnType<typeof store.getState>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();