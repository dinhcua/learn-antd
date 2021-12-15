import React from 'react'
import { Typography, Card, Row, Col } from 'antd'
import icon_1 from '../assets/Icon-1.png'
import icon_2 from '../assets/Icon-2.png'
import icon_3 from '../assets/Icon-3.png'

const { Title } = Typography
const { Meta } = Card;

export default function BestProvide() {
    return (
        <div>
            <div className="box-title-2">
                <Title level={2}>We provide</Title>
                <Title level={5}>Take high quality online courses from the best online instrictors<br />
                    around the world & develop your skills.</Title>
            </div>
            <div className="card-list">
                <Row justify="center">
                    <Col span={6} className='mid'>
                        <Card
                            hoverable
                            style={{ width: 300 }}
                            cover={<img alt="example" src={icon_1} />}
                        >
                            <Meta title="Select Destination" description="At first choose the place you wanted to go" />

                        </Card>
                    </Col>
                    <Col span={6} className='mid'>
                        <Card
                            hoverable
                            style={{ width: 300 }}
                            cover={<img alt="example" src={icon_2} />}
                        >
                            <Meta title="Select Destination" description="At first choose the place you wanted to go" />

                        </Card>
                    </Col>
                    <Col span={6} className='mid'>
                        <Card
                            hoverable
                            style={{ width: 300 }}
                            cover={<img alt="example" src={icon_3} />}
                        >
                            <Meta title="Select Destination" description="At first choose the place you wanted to go" />

                        </Card>
                    </Col>
                </Row>,
            </div>
        </div>
    )
}
