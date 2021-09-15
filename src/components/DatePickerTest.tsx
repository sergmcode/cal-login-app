import { Button, DatePicker, message, Tooltip } from "antd"
import moment, { Moment } from "moment";
import { useState } from "react";
import { SearchOutlined } from '@ant-design/icons'

const DatePickerTest = () => {
    const [date, setDate] = useState<Moment>();
    const datePickerOnChangeHandler = (value: any) => {
        message.info(`Selected Date: ${value ? value.format('YYYY-MM-DD') : 'None'}`);
        setDate(value);
    }
    return (
        <div>
            <DatePicker onChange={datePickerOnChangeHandler} />
            <Button type="primary" icon={<SearchOutlined />} style={{ marginLeft: 8 }} >
                Search
            </Button>
            {/* <Tooltip title="search">
                <Button type="primary" shape="circle" icon={<SearchOutlined />} style={{ marginLeft: 8 }} />
            </Tooltip> */}
            {/* <div style={{ marginTop: 16 }}>
                Selected Date: {date ? date.format('YYYY-MM-DD') : 'None'}
            </div> */}
            {/* <Button type="primary" style={{ marginLeft: 8 }} onClick={()=>console.log('btn click')} >
                Primary Button
            </Button> */}
        </div>
    )
}

export default DatePickerTest