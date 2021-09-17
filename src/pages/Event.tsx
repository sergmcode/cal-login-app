import { createEvent } from '@testing-library/dom'
import { Button, Modal, Row } from 'antd'
import React, { FC, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import AddEventForm from '../components/AddEventForm'
import EventCalendar from '../components/EventCalendar'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { IEvent } from '../models/IEvent'
import { IUser } from '../store/reducers/auth/types'
import { EventActionCreators } from '../store/reducers/event/action-creators'
import { EventActionEnum, SetFooAction } from '../store/reducers/event/types'

const Event: FC = () => {
    const [isModalVisible, setIsModalVisible] = useState(false)
    const dispatch = useDispatch()
    const { guests, events, foo } = useTypedSelector(state => state.event)
    const { user } = useTypedSelector(s => s.auth)
    useEffect(() => {
        dispatch(EventActionCreators.fetchGuests())
        dispatch(EventActionCreators.fetchEvents(user.username))
    }, [])
    
    const closeModal = () => {
        setIsModalVisible(false)
    }
    const submitAddEventForm = (event: IEvent) => {
        setIsModalVisible(false)
        dispatch(EventActionCreators.createEvent(event))
    }
    return (
        <>
            <EventCalendar events={events} />
            <Row justify='center'>
                <Button onClick={() => setIsModalVisible(true)}>Add event</Button>
            </Row>
            <Modal title="Add event" visible={isModalVisible} onCancel={closeModal} footer={null}>
                <AddEventForm
                    guests={guests}
                    submit={submitAddEventForm}
                />
            </Modal>
        </>
    )
}

export default Event