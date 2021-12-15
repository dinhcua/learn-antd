import React from 'react'
import { Row, Col, Typography, Input, Button } from 'antd'
const { Title } = Typography
export default function Subscribe() {
    return (
        <div className='subscrible'>
            <div className='bgSubscrible'>
                <Row justify='space-between'>
                    <Col span={10}>
                        <Title level={2}>Get our pro offers</Title>
                        <Title level={5}>Create a visual identity for your company, and an overall brand</Title>
                    </Col>
                    <Col span={10}>
                        <Input className='inputEmal' placeholder='Type your email here' suffix={<Button size='large' type='primary'>Subscrible</Button>}></Input>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
