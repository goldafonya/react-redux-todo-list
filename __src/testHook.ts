import { useState } from 'react';

export default (initialValue: Array<any>) => {
    const [list, setList] = useState<Array<{ value: string }>>(initialValue);

    return {
        todos: list,
        addTodo: (todoText: string) => {
            setList([...list, { value: todoText }]);
        },
        deleteTodo: (todoIndex: number) => {
            const newTodos = list.filter((_: any, index: number) => index !== todoIndex);

            setList(newTodos);
        },
        updateTodo: (index: number, value: string) => {
            const listLocal = [...list];
            const item = { ...listLocal[index], value };
            listLocal[index] = item;
            setList(listLocal);
        }
    };
};
