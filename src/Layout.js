import React from 'react'
import './layout.css'
import { Layout } from 'antd'
import NavBar from './learn/NavBar'
import SideMenu from './learn/SideMenu'
import MainContent from './learn/MainContent'
import { HashRouter } from 'react-router-dom'

const { Header, Footer, Content, Sider } = Layout
export default function LayoutC() {
    return (
        <Layout>
            <HashRouter>
                {/* <Header>
                    <NavBar />

                </Header> */}

                <SideMenu />
                {/* <HashRouter> */}
                <Content style={{ height: '100vh' }}>
                    <MainContent />
                </Content>
            </HashRouter>
            {/* </HashRouter> */}
        </Layout>
    )
}
