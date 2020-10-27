import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";
import { ToDo } from "../models/IToDo";

const toDoState:Array<ToDo>=[];

const toDoSlice = createSlice({
    name: "todo",
    initialState: toDoState,
    reducers: {
        createToDo(state) {
            return state.concat([{id:nanoid(),text:""}]);
        },
        updateToDoById(state, action:PayloadAction<{id:string,value:string}>) {
            const {id,value}=action.payload;
            return state.map(todo=>{
                if (todo.id===id) {
                    return {...todo,text:value};
                }
                return todo;
            });
        },
        deleteToDo(state, action:PayloadAction<string>) {
            const id=action.payload;

            return state.filter(todo=>todo.id!==id);
        }
    }
});

const {reducer,actions}=toDoSlice;

export {
    reducer as todoReducer,
    actions as todoActions
};