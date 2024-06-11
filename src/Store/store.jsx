import { configureStore } from "@reduxjs/toolkit";
import counterReduser from "../slice/UserSlice"
const store=configureStore({
    reducer:{
        userinfo:counterReduser
    }
})
export default store