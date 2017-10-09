import { ADD_TODO, REMOVE_TODO, TOOGLE_TODO } from './actionTypes';

let nextTodoId = 0

export const addTodo = (text) => ({
    type: ADD_TODO,
    completed: false,
    id: nextTodoId++,
    text: text
})

export const toggleTodo = (id) => ({
    type: TOOGLE_TODO,
    id: id
})

export const removeTodo = (id) => ({
    type: REMOVE_TODO,
    id: id
})