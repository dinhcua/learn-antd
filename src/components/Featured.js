import React from 'react'
import { Row, Col, Card, Typography } from 'antd'
import image_5 from '../assets/image-5.png'
import image_6 from '../assets/img2.png'
import image_7 from '../assets/img3.png'
import image_8 from '../assets/img4.png'
import { ClockCircleOutlined } from '@ant-design/icons';
const { Meta } = Card
const { Title } = Typography
function Description() {
    return (
        <p className='des'>
            <span style={{ color: '#999', fontWeight: 'light' }}><ClockCircleOutlined /> 7 Days/6 Nights</span>
            <span style={{ color: 'red', fontWeight: 'bold' }}>$544.00</span>
        </p>
    )

}
export default function Featured() {
    return (
        <div>
            <div className="box-title-2">
                <Title level={2}>Featured Tour Places</Title>
                <Title level={5}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</Title>
            </div>
            <Row gutter={32} justify='center'>
                <Col span={5}>
                    <Card
                        hoverable
                        style={{ borderRadius: 20 }}
                        cover={<img style={{ padding: 20 }} alt="example" src={image_5} />}
                    >
                        <Meta title={<Description />} ></Meta>
                    </Card>
                </Col>
                <Col span={5}>
                    <Card
                        hoverable
                        style={{ borderRadius: 20 }}
                        cover={<img style={{ padding: 20 }} alt="example" src={image_6} />}
                    >
                        <Meta title={<Description />} ></Meta>
                    </Card>
                </Col>
                <Col span={5}>
                    <Card
                        hoverable
                        style={{ borderRadius: 20 }}
                        cover={<img style={{ padding: 20 }} alt="example" src={image_7} />}
                    >
                        <Meta title={<Description />} ></Meta>
                    </Card>
                </Col>
                <Col span={5}>
                    <Card
                        hoverable
                        style={{ borderRadius: 20 }}
                        cover={<img style={{ padding: 20 }} alt="example" src={image_8} />}
                    >
                        <Meta title={<Description />} ></Meta>
                    </Card>
                </Col>

            </Row>
        </div >
    )
}
