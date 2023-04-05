import { createSlice } from "@reduxjs/toolkit";

const reducer = createSlice({
    name: "todoApp",
    initialState: {
        todo:[],
    },
    reducers:{
        createTodo (state, actions){
            state.todo.push({
                text: actions.payload,
                completed: false,
                id: state.todo.length,
            })
        },
        editTodo (state, actions){
            state.todo[actions.payload.id].text =actions.payload.text
        },
        deleteTodo(state, actions){
            const nState = state.todo.filter(e=> e.id !== actions.payload.id)
            state.todo = nState
        }
    }

})

export const {createTodo, editTodo, deleteTodo} = reducer.actions
export default reducer.reducer