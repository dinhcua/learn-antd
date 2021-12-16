import React from 'react'
import { Breadcrumb } from 'antd';
import { Route, Routes, Link, useLocation } from 'react-router-dom';
import Detail1 from './Detail1';
import Detail2 from './Detail2';

const breadcrumbNameMap = {
    '/apps': 'Application List',
    '/apps/1': 'Application1',
    '/apps/2': 'Application2',
    '/apps/1/detail': 'Detail',
    '/apps/2/detail': 'Detail',
};
export default function MainContent(props) {
    const location = useLocation();
    const pathSnippets = location.pathname.split('/').filter(i => i);
    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
        const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
        return (
            <Breadcrumb.Item key={url}>
                <Link to={url}>{breadcrumbNameMap[url]}</Link>
            </Breadcrumb.Item>
        );
    });

    const breadcrumbItems = [
        <Breadcrumb.Item key="home">
            <Link to="/">Home</Link>
        </Breadcrumb.Item>,
    ].concat(extraBreadcrumbItems);
    return (
        <div style={{ margin: 20 }}>
            <Breadcrumb style={{ margin: '16px 0' }}>{breadcrumbItems}</Breadcrumb>
            <Routes>
                <Route path="/apps/1/detail" element={<Detail1 />}></Route>
                <Route path="/apps/2/detail" element={<Detail2 />}></Route>
            </Routes>
        </div>
    );
};