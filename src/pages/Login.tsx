import { Row } from 'antd'
import React, { FC } from 'react'
import FormTest from '../components/FormTest'

const Login: FC = () => {
    return (
        <Row justify='center' align='middle' style={{ height: '500px' }}>
            <FormTest />
        </Row>
    )
}
 
export default Login