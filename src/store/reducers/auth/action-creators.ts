import axios from "axios";
import authReducer from ".";
import { AppDispatch } from "../..";
import { IUser, SetAuthAction, SetUserAction } from "./types";

export const AuthActionCreators = {
    setUser: (user: IUser): SetUserAction => ({ type: "SET_USER", payload: user }),
    setIsAuth: (auth: boolean): SetAuthAction => ({ type: "SET_AUTH", payload: auth }),
    login: (username: string, password: string) => async (dispatch: AppDispatch) => {
        try {
            const response = await axios.get<IUser[]>('./users.json')
            const mockUser = response.data.find(user => user.username === username && user.password === password)
            if (mockUser) {
                localStorage.setItem('auth', 'true');
                localStorage.setItem('username', mockUser.username);
                dispatch(AuthActionCreators.setIsAuth(true))
                dispatch(AuthActionCreators.setUser(mockUser))
            } else {
                console.log('username or password do not match')
            }
        } catch (error) {

        }
    },
    logout: () => async (dispatch: AppDispatch) => {
        try {
            localStorage.removeItem('auth')
            localStorage.removeItem('username')
            dispatch(AuthActionCreators.setUser({} as IUser))
            dispatch(AuthActionCreators.setIsAuth(false))
        } catch (error) {

        }
    }
}