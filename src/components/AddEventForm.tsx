import { Button, DatePicker, Form, Input, Row, Select } from 'antd'
import { Moment } from 'moment'
import React, { FC, useState } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { IEvent } from '../models/IEvent'
import { IUser } from '../store/reducers/auth/types'
import { formatDate } from '../utils/date'

interface AddEventFormProps {
    guests: IUser[];
    submit: (event: IEvent) => void;
}

const AddEventForm: FC<AddEventFormProps> = (props: AddEventFormProps) => {
    const [event, setEvent] = useState<IEvent>({
        author: '',
        date: '',
        description: '',
        guest: ''
    } as IEvent)
    const { user } = useTypedSelector(state => state.auth)
    const selectDate = (date: Moment | null) => {
        // console.log(formatDate(date?.toDate() as Date))
        setEvent({ ...event, date: formatDate(date?.toDate() as Date) })
    }
    const submitForm = () => {
        props.submit({ ...event, author: user.username })
    }
    return (
        <>
            <Form
                onFinish={submitForm}
            >
                <Form.Item
                    label='Event description'
                    name='event_description'
                    rules={[{ required: true, message: 'Please name the event' }]}

                >
                    <Input
                        value={event.description}
                        onChange={(e) => setEvent({ ...event, description: e.target.value })}
                    />
                </Form.Item>
                <Form.Item
                    label='Pick a user'
                    name='pick_user'
                    rules={[{ required: true, message: 'Please pick a user' }]}
                >
                    <Select
                        onChange={(guest: string) => setEvent({ ...event, guest })}
                    >
                        {props.guests.map(guest =>
                            <Select.Option key={guest.username} value={guest.username}>{guest.username}</Select.Option>
                        )}
                    </Select>
                </Form.Item>
                <Form.Item
                    label='Pick date'
                    name='pick_date'
                    rules={[{ required: true, message: 'Please pick a date' }]}
                >
                    <DatePicker onChange={selectDate} />
                </Form.Item>
                <Row justify='end'>
                    <Form.Item>
                        <Button htmlType='submit'>
                            Create
                        </Button>
                    </Form.Item>
                </Row>
            </Form>
        </>
    )
}

export default AddEventForm