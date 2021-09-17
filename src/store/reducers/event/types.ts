import { IEvent } from "../../../models/IEvent";
import { IUser } from "../auth/types";

export interface EventState {
    guests: IUser[];
    events: IEvent[];
    foo: string;
}

export enum EventActionEnum {
    SET_GUESTS = "SET_GUESTS",
    SET_EVENTS = "SET_EVENTS",
    SET_FOO = "SET_FOO"
}

export interface SetGuestsAction {
    type: EventActionEnum.SET_GUESTS;
    payload: IUser[];
}

export interface SetEventsAction {
    type: EventActionEnum.SET_EVENTS;
    payload: IEvent[];
}

export interface SetFooAction {
    type: EventActionEnum.SET_FOO;
    payload: string;
}

export type EventAction = 
    SetEventsAction |
    SetGuestsAction |
    SetFooAction