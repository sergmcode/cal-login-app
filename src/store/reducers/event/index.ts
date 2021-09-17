import { EventAction, EventActionEnum, EventState } from "./types";

const initialState: EventState = {
    events: [],
    guests: [],
    foo: 'bar'
}

export default function EventReducer(state: EventState = initialState, action: EventAction): EventState {
    switch (action.type) {
        case EventActionEnum.SET_GUESTS:
            return { ...state, guests: action.payload }
        case EventActionEnum.SET_EVENTS:
            return { ...state, events: action.payload }
        case EventActionEnum.SET_FOO:
            return { ...state, foo: action.payload }
        default:
            return state
    }
}