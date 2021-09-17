import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import authReducer from "./reducers/auth";
import EventReducer from "./reducers/event";

const rootReducer = combineReducers({
    auth: authReducer,
    event: EventReducer
})
export const store = createStore(
    rootReducer, 
    applyMiddleware(thunk)
)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch