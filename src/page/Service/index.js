import React from 'react'
import BlueTitle from '../../component/BlueTitle'
import './index.css'
import {Row, Col, Button} from 'antd'
import Texty from 'rc-texty'
import {Parallax,} from 'rc-scroll-anim'
import QueueAnim from 'rc-queue-anim'


class Service extends React.Component{
    render(){
        return (
        <div>
            <BlueTitle 
            title='我们的服务'
            content='术业专攻，成就所托&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;我们为您提供专业的互联网产品技术开发服务'/>
           
           {this.renderP1()}

            {this.renderP2()}
           <Parallax 
            animation={{ x: 0, opacity: 1, playScale: [0.3, 0.6] }}
            style={{ transform: 'translateX(100px)', opacity: 0 }}
            >
                {this.renderP3()}
            </Parallax>
           <Parallax 
            animation={{ x: 0, opacity: 1, playScale: [0.3, 0.6] }}
            style={{ transform: 'translateX(100px)', opacity: 0 }}
            >
                {this.renderP4()}
            </Parallax>
            
            {this.renderP5()}
        </div>
        )
    }
    renderP1(){
        return (
            <QueueAnim type='bottom'>
                 <Row 
                    className="block2 white ser-p1"
                    type='flex' 
                    align='middle'
                    key='a'
                >
                    <Col md={{span:10,order:1}} sm={{span:24,order:2}} xs={{span:24,order:2}}>   
                        <Parallax 
                        animation={{ x: 0, opacity: 1, playScale: [0.2, 0.4] }}
                        style={{ transform: 'translateX(-100px)', opacity: 0 }}
                        >
                        <div className='title'>
                        产品设计
                        </div>
                        <div className='body'>
                        项目立项之初我们会做大量的用户调研、竞品分析，充分发掘、理解用户使用产品的每一个场景和细节 。迭代推进项目过程中我们会不断与目标用户进行沟通、获取反馈，将产品改进至用户乐于使用的程度 。产品发布之后，我们会持续分析大量用户的使用行为以及内心所求，进而做出合理的产品版本规划。
                        </div>
                        </Parallax>    
                    </Col>
                    <Col  md={{span:10,push:3,order:2}} sm={{span:24,order:1}} xs={{span:24,order:1}}>
                        <Parallax 
                        animation={{ x: 0, opacity: 1, playScale: [0.2, 0.4] }}
                        style={{ transform: 'translateX(100px)', opacity: 0 }}
                        >
                        <div className='mobile-title'>
                        产品设计
                        </div>
                            <Row className='imgs'>
                            <Col md={8} sm={8} xs={8} className='img-item'>
                                <img alt='原型设计' src={require('../../assets/service/icon.png')}/>
                                <p>原型设计</p>
                            </Col>
                            <Col md={8} sm={8} xs={8}  className='img-item'>
                                <img alt='' src={require('../../assets/service/ui.png')}/>
                                <p>UI/UE</p>
                            </Col>
                            <Col md={8} sm={8} xs={8}  className='img-item'>
                                <img alt='' src={require('../../assets/service/vi.png')}/>
                                <p>VI设计</p>
                            </Col>
                        </Row>
                        </Parallax>
                    </Col>
                </Row>
                </QueueAnim>
        )
    }
    renderP2(){
        return (
        <Row 
            className="block2 grey ser-p1"
            type='flex' 
            align='middle'
            key='a'
        >
            <Col md={{span:10,push:3,order:2}} sm={{span:24,order:2}} xs={{span:24,order:2}}>   
                <Parallax 
                animation={{ x: 0, opacity: 1, playScale: [0.2, 0.4] }}
                style={{ transform: 'translateX(100px)', opacity: 0 }}
                >
                    <div className='title'>
                    应用开发
                    </div>
                    <div className='body'>
                    我们擅长iOS，安卓，微信（公众号、小程序）开发。从商城到直播，从工具到社交，我们在这几个领域内积累了深厚的产品设计和技术开发经验能帮助您快速把想法变成现实。
                    </div>
                </Parallax>    
            </Col>
            <Col  md={{span:10,order:1}} sm={{span:24,order:1}} xs={{span:24,order:1}}>
                <Parallax 
                animation={{ x: 0, opacity: 1, playScale: [0.2, 0.4] }}
                style={{ transform: 'translateX(-100px)', opacity: 0 }}
                >
                <div className='mobile-title'>
                应用开发
                </div>
                    <Row className='imgs'>
                    <Col md={8} sm={8} xs={8} className='img-item'>
                    <img alt='' src={require('../../assets/service/android-icon.png')}/>
                            <p>安卓开发</p>
                    </Col>
                    <Col md={8} sm={8} xs={8}  className='img-item'>
                        <img alt='' src={require('../../assets/service/ui.png')}/>
                        <p>UI/UE</p>
                    </Col>
                    <Col md={8} sm={8} xs={8}  className='img-item'>
                    <img alt='' src={require('../../assets/service/wechat-incon.png')}/>
                            <p>开放平台</p>
                    </Col>
                </Row>
                </Parallax>
            </Col>
        </Row>
        )
    }
    renderP3(){
        return (
            <Row 
                className="block2 white ser-p1"
                type='flex' 
                align='middle'
                key='a'
            >
                    <Col md={{span:10,order:1}} sm={{span:24,order:2}} xs={{span:24,order:2}}>   
                        <Parallax 
                        animation={{ x: 0, opacity: 1, playScale: [0.2, 0.4] }}
                        style={{ transform: 'translateX(-100px)', opacity: 0 }}
                        >
                        <div className='title'>
                    高访问量网站开发
                    </div>
                    <div className='body'>
                    作为一个Python技术栈为主的团队，我们精通除Django、Tornado 、Flask在内的多个Python开发框架之外，还掌握JQuery,AngularJS , ReactJS，Vuejs 等各种的前端框架，能帮您快速构建出体验良好，支持海量用户的大型网站。
                    </div>
                        </Parallax>    
                    </Col>
                    <Col  md={{span:10,push:3,order:2}} sm={{span:24,order:1}} xs={{span:24,order:1}}>
                        <Parallax 
                        animation={{ x: 0, opacity: 1, playScale: [0.2, 0.4] }}
                        style={{ transform: 'translateX(100px)', opacity: 0 }}
                        >
                        <div className='mobile-title'>
                        高访问量网站开发
                        </div>
                        <img alt='' src={require('../../assets/service/img.png')}/>
                        </Parallax>
                    </Col>
                </Row>
        )
    }
    renderP4(){
        return (
            <Row 
                    className="block2 grey ser-p1"
                    type='flex' 
                    align='middle'
                    key='a'
                >
                    <Col md={{span:10,push:3,order:2}} sm={{span:24,order:2}} xs={{span:24,order:2}}>   
                        <Parallax 
                        animation={{ x: 0, opacity: 1, playScale: [0.2, 0.4] }}
                        style={{ transform: 'translateX(100px)', opacity: 0 }}
                        >
                        <div className='title'>
                        Python编程开发教育培训
                        </div>
                        <div className='body'>
                        顶尖的行业导师面对面，手把手教你快速从0开始；卓越的实习机会，让你充分感受一流的行业技术挑战，快速成长。
                        </div>
                        </Parallax>    
                    </Col>
                    <Col  md={{span:10,order:1}} sm={{span:24,order:1}} xs={{span:24,order:1}}>
                        <Parallax 
                        animation={{ x: 0, opacity: 1, playScale: [0.2, 0.4] }}
                        style={{ transform: 'translateX(-100px)', opacity: 0 }}
                        >
                        <div className='mobile-title'>
                        产品设计
                        </div>
                        <img alt='' src={require('../../assets/service/python-img.png')}/>

                        </Parallax>
                    </Col>
                </Row>
        )
    }
    renderP5(){
        return (
            <div className='white ser-p5'>
                <Parallax 
                animation={{opacity:1,playScale:[0.1,0.4]}}
                style={{opacity:0}}
                >
                    <Row type='flex' align="middle">
                        <Col md={24} sm={16} xs={16}>
                            <Texty className='title' mode='random'>与我们一起，开启一段伟大的合作</Texty>
                        </Col>
                        <Col md={24} sm={8} xs={8}>
                            <Button type='primary' ghost className='btn' href='/cooperate'>联系我们</Button>
                        </Col>
                    </Row>
                </Parallax>
            </div>
        )
    }
}

export default Service;