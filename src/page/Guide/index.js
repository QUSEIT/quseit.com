import React, { Component } from 'react'
import './index.css'
import Texty from 'rc-texty'
import {Input, Row, Col, Menu, Icon, Breadcrumb } from 'antd'
import {BrowserRouter as Router , Route, Switch, Link} from 'react-router-dom'

const list = [{
    id:'l1',
    icon:require('../../assets/guide/icon_2.png'),
    title:'App小组',
    docs:['优趣安卓应用开发框架简介','ORMLite-android ORM 框架']
},{
    id:'l2',
    icon:require('../../assets/guide/icon_3.png'),
    title:'200小组',
    docs:['初级Python开发工程师需要掌握','优趣 Python 编码规范整理',
    'JavaScript 编码规范指南','优趣产品过程介绍',
    'Django用户验证系统','django + uwsgi + nginx',
    'Django models AES 加密、解密','支付宝Python 接入使用说明']
},{
    id:'l3',
    icon:require('../../assets/guide/icon.png'),
    title:'技术支持',
    docs:['员工账号','工作时间','报销流程']
}]

export default class Guide extends Component {
    constructor(props){
        super(props);
        this.state= {
            breadItem:['欢迎阅读优趣工作室工作向导']
        }
    }
    render() {
        return (
            <div>
                <div className='blue guide-title'>
                    <Row type='flex' justify='space-between'>
                        <Col md={12}>
                            <Texty className='text'>优趣工作向导</Texty>
                        </Col>
                        <Col md={6}>
                            <Input 
                            prefix={<img src={require('../../assets/guide/search-icon.png')}/>}
                            placeholder='搜索'/>
                        </Col>
                    </Row>
                </div>
                <Router>
                    {this.renderMenu()}
                </Router>
                
            </div>
        )
    }
    renderMenu(){
        return (
            <div className='guide-body'>
                <Breadcrumb separator="»" className='guide-breadcrumd'>
                    <Breadcrumb.Item>
                        <Link 
                        to='/guide' 
                        onClick={()=>this.renderBreadcrumb('欢迎阅读优趣工作室工作向导')}>
                            Docs  
                        </Link>
                    </Breadcrumb.Item>
                    {
                        this.state.breadItem.map((item,index)=>
                        <Breadcrumb.Item key={index}>{item}</Breadcrumb.Item>
                        )
                    }
                </Breadcrumb>
                <Menu mode='horizontal' className='guide-menu'>
                    {
                        list.map((item,index) => 
                            <Menu.Item 
                            onClick={()=>this.renderBreadcrumb(item.title)}
                            className='guide-menuItem' 
                            key={index}>
                                <Link to={'/guide/' + item.id}>
                                    <img src={item.icon} alt={item.title}/>
                                    {item.title}
                                </Link>
                            </Menu.Item>
                            )
                    }
                    <Menu.Item className='guide-menuItem'>
                        <Icon type="plus" className='guide-menuItem-more'/>
                    </Menu.Item>
                </Menu>
                <div className='guide-content'>
                        <Switch>
                            {
                                list.map((item,index)=>
                                <Route 
                                key = {index}
                                path={'/guide/'+ item.id} 
                                render={this.renderDoc.bind(this,index)}
                                />)
                            }
                            <Route  render={this.renderWelcome}/>
                        </Switch>
                </div>
                <div className='guide-pagination'>
                    <Row type='flex' justify='end'>
                        <Col md={4} className='btn'>
                            上一页>
                        </Col>
                        <Col md={4} className='btn'>
                            下一页>
                        </Col>
                    </Row>
                </div>
            </div>
            
        )
    }
    renderWelcome(){
        return (
            <React.Fragment>
                <div className='guide-welcome'>
                    <h2>欢迎阅读优趣工作室工作向导</h2>
                    <p>	优趣工作室致力于为创业者提供一流的互联网产品技术开发服务。作为一个充满热情和信念的互联网创业团队，我们始终关注互联网产业发展最新趋势和技术动态，学习掌握最新的设计理念和开发方法，努力为客户提供一流的产品设计和技术实现方案。</p>
                </div>
                <div className='guide-docslist'>
                    <h3>工作向导</h3>
                    <ul className='list-title'>
                        {
                            list.map((item,index)=>
                                <li key={index}>
                                    <p> > {item.title}</p>
                                    <ul className='list-box'>
                                        {
                                            item.docs.map((doc,i)=>
                                            <li key={i}> - {doc}</li>
                                            )}
                                    </ul>
                                </li>
                            )
                        }
                    </ul>
                </div>
                <div className='guide-update'>
                    <h3>最新动态</h3>
                    <p>人才招聘持续进行中</p>
                    <p>新项目推进中</p>
                    <p>区块链实践推进中</p>
                </div>
            </React.Fragment>
        )
    }
    renderDoc(index){
        return (
            <div>
                <ul className='list-box'>
                    {list[index].docs.map((item,i)=>
                        <li key={i}>{item}</li>
                        )}
                </ul>
            </div>
        )
    }
    renderBreadcrumb(title){
        let arr = [title];
        this.setState({
            breadItem: arr,
        })
    }
}
