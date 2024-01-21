import { createSlice } from "@reduxjs/toolkit";
const themeSlice=createSlice(
    {
        name:"theme",
        initialState:{
            theme:"light",
        },
        reducers:{
            changetheme:(store,action)=>{
                if(store.theme === "light"){
                    store.theme = "dark";
                }
                else if(store.theme === "dark"){
                    store.theme = "light";
                }
            },
            showtheme:(store)=>{
                console.log(store.theme);
            }
        }
    }
)
export const themeAction=themeSlice.actions;
export default themeSlice;