import React from 'react'
import Group from '../assets/Group.png'
import Group_1 from '../assets/Group-1.png'
import Group_2 from '../assets/Group-2.png'
import Group_3 from '../assets/Group-3.png'
import Group_4 from '../assets/Group-4.png'
import Group_5 from '../assets/Group-5.png'
import { Row, Col, Typography } from 'antd'

const { Title } = Typography
export default function Partner() {
    return (
        <div>
            <div className="box-title-2">
                <Title level={2}>Our Tour Partner</Title>
                <Title level={5}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</Title>
            </div>
            <Row justify='center'>
                <Col span={4} className='mid'>
                    <img src={Group} alt="partner" className='partner' />
                </Col>
                <Col span={4} className='mid'>
                    <img src={Group_1} alt="partner" className='partner' />
                </Col>
                <Col span={4} className='mid'>
                    <img src={Group_2} alt="partner" className='partner' />
                </Col>
                <Col span={4} className='mid'>
                    <img src={Group_3} alt="partner" className='partner' />
                </Col>
            </Row>
            <Row justify='center' style={{ margin: 30 }}>
                <Col span={4} className='mid'>
                    <img src={Group_4} alt="partner" className='partner' />
                </Col>
                <Col span={4} className='mid'>
                    <img src={Group_5} alt="partner" className='partner' />
                </Col>
            </Row>

        </div>
    )
}
