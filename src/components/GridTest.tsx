import React from 'react'
import { Row, Col } from 'antd';
import MenuTest from './MenuTest';
import FormTest from './FormTest';


export default function GridTest() {
    return (
        <>
            <MenuTest />
            <Row justify='center' align='middle' style={{ height: '500px'}}>
                <FormTest />
            </Row>
        </>
    )
}
