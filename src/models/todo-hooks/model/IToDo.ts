import { nanoid } from "@reduxjs/toolkit";

export class ToDo {
    id:string=nanoid();
    text="";
}