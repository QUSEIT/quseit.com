import React from 'react';
import './index.css'
import { Link } from 'react-router-dom'
import {Layout, Menu, Row, Col, Button, Dropdown} from 'antd'
const {Header} = Layout;

const nav = [{
    title:'首页',
    enTitle:'Home',
    url:'/',
},
/*,{
    title:'服务',
    enTitle:'Services',
    url:'/service',
},{
    title:'公司概况',
    enTitle:'About Us',
    url:'/introduce',
},{
    title:'联系我们',
    enTitle:'Contact',
    url:'/cooperate',
},{
    title:'工作向导',
    enTitle:'Work guide',
    url:'/guide',
},*/
{
    title:'博客',
    enTitle:'Facebook',
    url:'https://www.facebook.com/quseit',
}
];

class Head extends React.Component{
    handleBtnClick = ()=>{
        this.props.setLaungh();
    }
    render(){
        const menu = (
            <Menu className='dropdown-menu'>
                {nav.map((item,index)=>(
                    <Menu.Item key={index}>
                        <Link to={item.url}  en={this.props.en}>
                        {this.props.en?item.enTitle:item.title}
                        </Link>
                    </Menu.Item>    
                ))}
                <Menu.Divider />
                <Menu.Item key={nav.length} onClick={this.handleBtnClick}>
                    {this.props.en?'中文':'English'}
                </Menu.Item>
            </Menu>
        )
        return (
            <Header className='app-head'>
                <Row>
                    <Col lg={0} md={0} sm={8} xs={8} className='moblie-dropdown'>
                        <Dropdown 
                        onVisibleChange={this.handleOpenMenu} 
                        overlay={menu} 
                        placement="bottomLeft" 
                        trigger={['click']}>
                            <Button className='nav-btn'></Button>
                        </Dropdown>
                    </Col>
                    <Col lg={5} md={5} sm={9} xs={9}>
                        <div className="app-logo">
                            <img src={require('../../assets/guide/logo.png')} alt='优趣天下'/>
                        </div>
                    </Col>
                    <Col lg={19} md={18} sm={0} xs={0}>
                        <Row type='flex' justify='end'>
                            <Col lg={16} md={22} sm={24}>
                                <Menu theme="light" mode="horizontal" className='nav'>
                                    {nav.map((item,index)=>(
                                        <Menu.Item key={index} className='nav-item'>
                                            <Link to={{pathname:item.url,en:this.props.en}}>
                                            {this.props.en?item.enTitle:item.title}
                                            </Link>
                                        </Menu.Item>
                                    ))}
                                </Menu>
                            </Col>
                            <Col md={2}>
                                <Button type='primary' ghost className='head-btn' onClick={this.handleBtnClick} style={{display: 'none'}}>
                                    {this.props.en?'中文':'En'}
                                    </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Header>
        )
    }
}

export default Head;
