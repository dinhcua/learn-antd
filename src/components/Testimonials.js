import React from 'react'
import { Row, Col, Avatar, Rate, Card, Typography } from 'antd'
const { Meta } = Card
const { Title } = Typography
function CoverComment() {
    return (
        <div>
            <Rate style={{ display: 'flex', justifyContent: 'center', marginBottom: 10 }} disabled defaultValue={5} />
            <p>Before we define any approach, we need to define the brands' overall goal. We then need to dive.</p>
        </div>
    )
}

export default function Testimonials() {
    return (
        <div>
            <div className="box-title-2">
                <Title level={2}>What our client say</Title>
                <Title level={5}>Create a visual identity for your company, and an overall brand</Title>
            </div>
            <Row gutter={16} justify='center'>
                <Col span={4} className='mid'>
                    <Card
                        hoverable
                        style={{ width: 300, padding: '15px' }}
                        cover={<CoverComment />}
                    >
                        <Meta title="Sayem Ahmed" description="Product designer" avatar={<Avatar size={'large'} src="https://joeschmoe.io/api/v1/random" />} />
                    </Card>
                </Col>
                <Col span={4} className='mid'>
                    <Card
                        hoverable
                        style={{ width: 300, padding: '15px' }}
                        cover={<CoverComment />}
                    >
                        <Meta title="Sayem Ahmed" description="Product designer" avatar={<Avatar size={'large'} src="https://joeschmoe.io/api/v1/random" />} />
                    </Card>
                </Col>
                <Col span={4} className='mid'>
                    <Card
                        hoverable
                        style={{ width: 300, padding: '15px' }}
                        cover={<CoverComment />}
                    >
                        <Meta title="Sayem Ahmed" description="Product designer" avatar={<Avatar size={'large'} src="https://joeschmoe.io/api/v1/random" />} />
                    </Card>
                </Col>
                <Col span={4} className='mid'>
                    <Card
                        hoverable
                        style={{ width: 300, padding: '15px' }}
                        cover={<CoverComment />}
                    >
                        <Meta title="Sayem Ahmed" description="Product designer" avatar={<Avatar size={'large'} src="https://joeschmoe.io/api/v1/random" />} />
                    </Card>
                </Col>

            </Row>
        </div>
    )
}
