import {configureStore} from "@reduxjs/toolkit";
import themeSlice from "./themeslice";
const store=configureStore({
    reducer:{theme:themeSlice.reducer}
})
export default store