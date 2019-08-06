import React from 'react';
import './index.css'
import { Link } from 'react-router-dom'
import {Layout, Menu, Row, Col, Button} from 'antd'
const {Header} = Layout;

const nav = [{
    title:'首页',
    url:'/',
},{
    title:'服务',
    url:'/service',
},{
    title:'公司概况',
    url:'/introduce',
},{
    title:'联系我们',
    url:'/cooperate',
},{
    title:'工作向导',
    url:'/guide',
},{
    title:'博客',
    url:'/blog',
}];

class Head extends React.Component{
    render(){
        return (
            <Header className='app-head'>
                <Row>
                    <Col md={9}>
                        <div className="app-logo">优趣天下</div>
                    </Col>
                    <Col md={13}>
                         <Menu theme="light" mode="horizontal" className='nav'>
                            {nav.map((item,index)=>(
                                <Menu.Item key={index} className='nav-item'>
                                    <Link to={item.url}>
                                    {item.title}
                                    </Link>
                                </Menu.Item>
                            ))}
                        </Menu>
                    </Col>
                    <Col md={2}>
                        <Button type='primary' ghost className='head-btn'>En</Button>
                    </Col>
                </Row>
                
            </Header>
        )
    }
}

export default Head;