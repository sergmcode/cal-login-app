import axios from "axios";
import { AppDispatch } from "../..";
import UserService from "../../../api/UserService";
import { IEvent } from "../../../models/IEvent";
import { IUser } from "../auth/types";
import { EventActionEnum, SetEventsAction, SetFooAction, SetGuestsAction } from "./types";

export const EventActionCreators = {
    setGuests: (payload: IUser[]): SetGuestsAction => ({ type: EventActionEnum.SET_GUESTS, payload }),
    setEvents: (payload: IEvent[]): SetEventsAction => ({ type: EventActionEnum.SET_EVENTS, payload }),
    setFoo: (payload: string): SetFooAction => ({ type: EventActionEnum.SET_FOO, payload }),
    fetchGuests: () => async (dispatch: AppDispatch) => {
        try {
            // const guests = await axios.get('./users.json')
            const response = await UserService.getUsers()
            dispatch(EventActionCreators.setGuests(response.data))
        } catch (error) {
            console.log(error)
        }
    },
    createEvent: (event: IEvent) => async (dispatch: AppDispatch) => {
        try {
            const events = localStorage.getItem('events') || '[]'
            const json = JSON.parse(events) as IEvent[]
            json.push(event)
            dispatch(EventActionCreators.setEvents(json))
            localStorage.setItem('events', JSON.stringify(json))
        } catch (error) {
            console.log(error)
        }
    },
    fetchEvents: (username: string) => async (dispatch: AppDispatch) => {
        try {
            const events = localStorage.getItem('events') || '[]'
            const json = JSON.parse(events) as IEvent[]
            const currentUserEvents = json.filter(e => e.author === username || e.guest === username)
            dispatch(EventActionCreators.setEvents(currentUserEvents))
        } catch (error) {
            console.log(error)
        }
    }
}