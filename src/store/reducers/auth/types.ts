export interface AuthState {
    isAuth: boolean;
    user: IUser;
}

export interface IUser {
    username: string;
    password: string;
}

export interface SetAuthAction {
    type: string;
    payload: boolean;
}

export interface SetUserAction {
    type: string;
    payload: IUser;
}

export type AuthAction = SetAuthAction | SetUserAction