import { IToDo } from "../model/IToDo";
import { useState, useCallback } from "react";
import { nanoid } from "@reduxjs/toolkit";

export const useToDoList=(initList:Array<IToDo>=[]):{
    todoList:Array<IToDo>;
    addToDo:()=>void;
    deleteToDo:(id:string)=>void;
    updateToDoById:(id:string,value:string)=>void;
}=>{
    const [todoList,setToDoList]=useState<Array<IToDo>>(initList);
    const addToDo=useCallback(()=>{
        setToDoList(list=>[...list,{id:nanoid(),text:""}]);
    },[]);
    const deleteToDo=useCallback((id:string)=>{
        setToDoList(list=>list.filter(i=>i.id!==id));
    },[]);
    const updateToDoById=useCallback(
        (id:string, value:string)=>{
            setToDoList(list=>{
                const index = list.findIndex(todo=>todo.id===id);
                const listLocal = [...list];
                const item = {...listLocal[index], text:value};
                listLocal[index]=item;
                return listLocal;
            });
        },[]);
    return {
        todoList,
        addToDo,
        updateToDoById,
        deleteToDo
    };
};