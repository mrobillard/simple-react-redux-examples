import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  SET_VISABILITY_FILTER
} from "./types";

let todoId = 2;

export const addTodo = text => ({
  type: ADD_TODO,
  id: todoId++,
  text
});

export const deleteTodo = id => ({
  type: REMOVE_TODO,
  id: id
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id: id
});

export const setVisibilityFilter = filter => ({
  type: SET_VISABILITY_FILTER,
  filter
});
