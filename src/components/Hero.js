import React from 'react'
import { Typography, Input, Select, Button } from 'antd'
import { SearchOutlined, EnvironmentOutlined } from '@ant-design/icons';

const { Title } = Typography
const { Option } = Select

export default function Hero() {
    return (
        <div className='hero'>
            <div className="box-title">
                <Title className='white-text'>Exploring The World <br /> In Comfort.</Title>
                <Title className='white-text' level={5}>You do not have the right to remain silent… let us know <br /> what it takes to challenge you</Title>
            </div>
            <div className='box-search' >
                <Input.Group compact>
                    <Input style={{ width: '44%', height: '70px' }} placeholder='Search destination' prefix={<SearchOutlined />} />
                    <Select className='select-box' defaultValue={<div className='test'>
                        <EnvironmentOutlined /> Location
                    </div>}>
                        <Option value="location">Location</Option>
                        <Option value="conbo">Combo</Option>
                    </Select>
                    <Select className='select-box' defaultValue="1 Person">
                        <Option value="Home">1 Person</Option>
                        <Option value="2person">2 Person </Option>
                        <Option value="3person">3 Person </Option>
                        <Option value="4person">4 Person </Option>
                    </Select>
                    <Button type='primary' className='search-button'>Seach</Button>
                </Input.Group>
            </div>
        </div>
    )
}
