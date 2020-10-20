import React, { useState } from "react";
import { ToDo } from "../models/ToDo";
import { ToDoItem } from "./ToDoItem";

export const ToDoList: React.FC = () => {
    const [list, setList] = useState<Array<ToDo>>([]);

    const onAdd = () => setList([...list, new ToDo()]);
    const updateItemById = (id: string, value: string) => {
        // const listLocal = [...list];

        // const index: number = listLocal.findIndex(item => item.id === id);
        // const item = { ...listLocal[index], value };
        // listLocal[index] = item;

        setList(list.map(item => {
            if (item.id === id) return ({ ...item, value });

            return item;
        }));
    }

    console.log("render ToDoList", JSON.parse(JSON.stringify(list)));
    return (
        <div>
            <ul>

                {list.map(item => (
                    <li
                        key={item.id}>
                        <ToDoItem
                            item={item}
                            handler={updateItemById}
                        />
                    </li>
                ))}
            </ul>
            <div>
                <button onClick={onAdd}>add</button>
            </div>
        </div>
    )
};