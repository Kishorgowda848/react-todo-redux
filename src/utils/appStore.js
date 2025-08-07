import { configureStore } from "@reduxjs/toolkit";
import taskSclice from './taskSclice';

const appStore = configureStore({
    reducer:{
        list:taskSclice
    }
})

export default appStore;