import {v1} from 'uuid';
import {FilterValuesType, TodolistType} from "../App";


export type AddTodolistActionType = ReturnType<typeof addTodolistAC>
export type RemoveTodolistActionType = ReturnType<typeof removeTodolistAC>



type ActionsType = AddTodolistActionType | RemoveTodolistActionType

const initialState: Array<TodolistType> =  []

export const todolistsReducer = (state: Array<TodolistType> = initialState, action: ActionsType): Array<TodolistType> => {
    switch (action.type) {
        case "ADD-TODOLIST": {
            return [{
                id: action.todolistId,
                title: action.title,
                filter: 'all'
            }, ...state]
        }
        case "REMOVE-TODOLIST": {
            return state.filter(tl => tl.id !== action.todoId)
        }


        default:
            return state;
    }
}


export const addTodolistAC = (title: string) =>( {type: 'ADD-TODOLIST', title: title, todolistId: v1()} as  const)


export const removeTodolistAC = (todoId: string) => {
  return {type: 'REMOVE-TODOLIST', todoId} as const
}
