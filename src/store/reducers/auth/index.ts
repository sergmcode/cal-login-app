import { AppDispatch } from "../..";
import { AuthAction, AuthState, IUser } from "./types";

const initialState: AuthState = {
    isAuth: false,
    user: {username: '', password: ''}
}

export default function authReducer(state: AuthState = initialState, action: AuthAction): AuthState {
    switch (action.type) {
        case "SET_AUTH":
            return { ...state, isAuth: action.payload as boolean }
        case "SET_USER":
            return {...state, user: action.payload as IUser}
        default:
            return state;
    }
}
