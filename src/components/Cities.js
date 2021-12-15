import React, { useState } from 'react'
import { Typography, Image, Row, Col, Tag } from 'antd'
import imageCity1 from '../assets/image-6.png'
import imageCity2 from '../assets/image-7.png'
import imageCity3 from '../assets/image-8.png'
const { Title } = Typography
export default function Cities() {
    const [visible, setVisible] = useState(false);
    return (
        <div>
            <div className="box-title-2">
                <Title level={2}>Our popular cities</Title>
                <Title level={5}>We’re a team of humans with the strategy, tools, and solutions and digital products.</Title>
            </div>

            <Row justify='center'>
                <Col span={6} className='mid'>
                    <Image
                        preview={{ visible: false }}
                        width={300}
                        src={imageCity1}
                        onClick={() => setVisible(true)}
                    />
                    <div className='title'>
                        <Title className='white' level={2}>Barcelona</Title>
                        <Title className='white' level={5}>10 Popular Places</Title>
                    </div>
                    <Tag className='tag'>Japan</Tag>
                    <div style={{ display: 'none' }}>
                        <Image.PreviewGroup preview={{ visible, onVisibleChange: vis => setVisible(vis) }}>
                            <Image src={imageCity1} />
                            <Image src={imageCity2} />
                            <Image src={imageCity3} />
                        </Image.PreviewGroup>
                    </div>
                </Col>
                <Col span={6} className='mid'>
                    <Image
                        preview={{ visible: false }}
                        width={300}
                        src={imageCity2}
                        onClick={() => setVisible(true)}
                    />
                    <Tag className='tag'>Bali</Tag>
                    <div className='title'>
                        <Title className='white' level={2}>Barcelona</Title>
                        <Title className='white' level={5}>10 Popular Places</Title>
                    </div>
                    <div style={{ display: 'none' }}>
                        <Image.PreviewGroup preview={{ visible, onVisibleChange: vis => setVisible(vis) }}>
                            <Image src={imageCity2} />
                            <Image src={imageCity1} />
                            <Image src={imageCity3} />
                        </Image.PreviewGroup>
                    </div>
                </Col>
                <Col span={6} className='mid'>
                    <Image
                        preview={{ visible: false }}
                        width={300}
                        src={imageCity3}
                        onClick={() => setVisible(true)}
                    />
                    <Tag className='tag'>Spain</Tag>
                    <div className='title'>
                        <Title className='white' level={2}>Barcelona</Title>
                        <Title className='white' level={5}>10 Popular Places</Title>
                    </div>
                    <div style={{ display: 'none' }}>
                        <Image.PreviewGroup preview={{ visible, onVisibleChange: vis => setVisible(vis) }}>
                            <Image src={imageCity3} />
                            <Image src={imageCity2} />
                            <Image src={imageCity1} />
                        </Image.PreviewGroup>
                    </div>
                </Col>

            </Row>


        </div>
    )
}
