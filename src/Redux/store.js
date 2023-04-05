import { configureStore } from "@reduxjs/toolkit";
import todoApp from "./Reducer.js"
const store = configureStore({
    reducer:{todoApp},
});

export default store;