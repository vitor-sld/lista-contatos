import { configureStore } from "@reduxjs/toolkit";
import contatos from "./reducers/contatos";

export const store = configureStore({
    reducer:({
        contatos
    })
})


export type RootReducer = ReturnType<typeof store.getState>