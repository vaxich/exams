import {combineReducers, createStore} from 'redux'

let initialState = {items: [{name: 'Dimych'}, {name: 'Ignat'}]}
const usersReducer = (state = initialState, action: any) => {
    return state
}

const store = createStore(combineReducers({
    users: usersReducer
}))

store.subscribe(() => {
    const state = store.getState()
    console.log(state)
})

store.dispatch({type: 'ANY'})

//Что нужно написать вместо XXX, чтобы получить актуальный стейт?
// usersReducer - не верно
// store.getState() - верно