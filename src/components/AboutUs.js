import React from 'react'
import { Row, Col, Typography, Card, Button } from 'antd'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import image_2 from '../assets/image-2.png'
import image_3 from '../assets/img.png'

const { Title } = Typography
const { Meta } = Card
export default function AboutUs() {
    return (
        <div>
            <Row justify="center" style={{ margin: '50px 0' }}>
                <Col span={8}>
                    <Title level={5}>ABOUT US</Title>
                    <Title level={3}>Explore all corners of
                        the world with us.</Title>
                </Col>
                <Col span={8}>
                    <p>
                        These exercises ran in parallel with a series of focus groups comprising of parents. These exercises ran in parallel with a series of focus groups comprising of parents.
                    </p>
                </Col>
            </Row>
            <Row justify="center" gutter={32} style={{ overflow: 'hidden' }}>
                <Col span={9}>
                    <Card
                        hoverable
                        style={{ width: '100%' }}
                        cover={<img alt="example" src={image_2} />}
                    >
                        <Meta style={{ height: 100 }} title="Nanjing, China" description="These exercises ran in parallel with a series of focus groups comprising of parents. These exercises ran in parallel with a series."></Meta>
                    </Card>
                </Col>
                <Col span={9}>
                    <img src={image_3} className='img' alt='tst' />
                    <div className='arrow-btn'>
                        <Button shape='circle' icon={<ArrowLeftOutlined />} size='large' />
                        <Button shape='circle' icon={<ArrowRightOutlined />} size='large' />
                    </div>
                </Col>
                <img src={image_2} className='img-right' alt='test' />
            </Row>
        </div>
    )
}
