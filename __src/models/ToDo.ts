import { nanoid } from '@reduxjs/toolkit';

class ToDo {
    id = nanoid();
    value = "";
}

export { ToDo };