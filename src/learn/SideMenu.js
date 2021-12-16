import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Button, Drawer } from 'antd'
import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
} from '@ant-design/icons';
const { SubMenu } = Menu


export default function SideMenu() {
    const [collapsed, setcollapsed] = useState(true)
    const [visible, setVisible] = useState(true)
    const onClose = () => {
        setVisible(!visible)
    }
    return (
        <div className='side-menu'>
            <Button type="primary" onClick={onClose} className='btn-menu' style={{ marginBottom: 16, display: 'inline-block !important' }}>
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button>
            <Drawer
                title={
                    <div style={{ textAlign: 'center' }}>Menu</div>
                }
                placement={'left'}
                closable={false}
                onClose={onClose}
                visible={visible}
                key={'left'}
            >
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="light"
                    inlineCollapsed={false}
                    className='menu'
                >
                    <Menu.Item key="1" icon={<PieChartOutlined />}>
                        <Link to="/">Home</Link>
                    </Menu.Item>
                    <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Application List">
                        <SubMenu key="sub3" title="app 1">
                            <Menu.Item key="11">
                                <Link to="/apps/1/detail">detail 1</Link>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub4" title="app 2">
                            <Menu.Item key="12">
                                <Link to="/apps/2/detail">detail 2</Link>
                            </Menu.Item>
                        </SubMenu>
                    </SubMenu>
                </Menu>
            </Drawer>
        </div >
    )
}
