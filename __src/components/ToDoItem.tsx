import React, { FC } from "react";
import { ToDo } from "../models/ToDo";

interface IToDoItem {
    item: ToDo;
    handler: (id: string, value: string) => void;
}

const ToDoItem: FC<IToDoItem> = ({ item, handler }) => {
    console.log("render ToDoItem");
    return (
        <input
            type="text"
            value={item.value}
            onChange={(e) => handler(item.id, e.target.value)}

        />
    )
};

const ToDoItemMemo = React.memo(ToDoItem, (prevProps, nextProps) => {

    console.log("memo", prevProps.item, nextProps.item);

    // return prevProps.item.id === nextProps.item.id && prevProps.item.value === nextProps.item.value;
    return prevProps.item.value === nextProps.item.value;
    // return false;
});

export {
    ToDoItemMemo as ToDoItem
}