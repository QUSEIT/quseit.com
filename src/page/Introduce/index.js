import React from 'react'
import BlueTitle from '../../component/BlueTitle'
import {Row, Col, Card, Avatar} from 'antd'
import {Link} from 'react-router-dom'
import './index.css'
import {OverPack,Parallax} from 'rc-scroll-anim'
import QueueAnim from 'rc-queue-anim'
import BlockLR from '../../component/BlockLR'

const {Meta} = Card;

class Introduce extends React.Component{
    render(){
        return (
        <div>
            <BlueTitle 
            title='优趣天下'
            content='致力于为创业者和企业家提供一流的互联网产品技术开发服务'/>
            {this.renderP1()}

            <Parallax 
            animation={{ x: 0, opacity: 1, playScale: [0.2, 0.5] }}
            style={{ transform: 'translateX(100px)', opacity: 0 }}
            >
                {this.renderP2()}
            </Parallax>

            <Parallax 
            animation={{ x: 0, opacity: 1, playScale: [0.2, 0.5] }}
            style={{ transform: 'translateX(-100px)', opacity: 0 }}
            >
                {this.renderP3()}
            </Parallax>
            
            {this.renderP4()}

            <Parallax 
            animation={{ y: 0, opacity: 1, playScale: [0.2, 0.5] }}
            style={{ transform: 'translateY(100px)', opacity: 0 }}
            >
                {this.renderP5()}
            </Parallax>
            
        </div>
        )
    }
    renderP1(){
        return (
                <QueueAnim type='bottom' duration='1000'>
                <BlockLR  className="white intro-p1" key='a'>
                    <div key='left'>
                        <h3>关于我们</h3>
                        <div>
                            优趣天下是一家屡获殊荣的应用开发公司，拥有300多个成功发布的产品，
                            来自全球200多家满意的客户。 除DevOps咨询服务外，公司还为iOS和Android，
                            Web开发，虚拟现实开发服务提供高质量的移动应用程序开发。除DevOps咨询服务
                            外，公司还为iOS和Android，Web开发，虚拟现实开发服务提供高质量的移动应用
                            程序开发。除DevOps咨询服务外，公司还为iOS和Android，Web开发，虚拟现实
                            开发服务提供高质量的移动应用程序开发。                   
                        </div>
                    </div>
                    <div key='right'>
                        <img alt="" src={require('../../assets/introduce/img_3.png')}/>
                    </div>
                </BlockLR>
            </QueueAnim>
        )
    }
    renderP2(){
        return (
            <Row 
            className="white intro-p2" 
            type='flex' 
            align='middle'
            key='b'
            >
                <Col md={10}>
                    <img alt="" src={require('../../assets/introduce/img_2.png')}/>
                </Col>
                <Col md={10} push={3} className='intro-box'>
                    <h3>在优趣工作</h3>
                    <div>
                    我们正在努力建立世界典范：透明，快乐，好奇和快速发展。 我们的价值观很大
                    程度上决定了为什么优趣是一个很好的工作场所，同时也是我们成功的原因。我们
                    正在建立一支聪明，富有创造力，充满激情的乐观主义者团队，他们会在其他人看
                    到障碍时看到机会。 如果这听起来像你，欢迎
                    <Link to='/'>加入我们</Link>        。           
                    </div>
                </Col>
            </Row>    
        )
    }
    renderP3(){
        return ( 
            <Row 
            className="white intro-p2" 
            type='flex' 
            align='middle'
            key='c'
            >
                <Col md={10}  className='intro-box'>
                    <h3>丰富的企业活动</h3>
                    <div>
                    我们是一家高速成长的互联网创业公司，我们这里不仅仅有工作，更有成长。
                    每一位同事都投入时间和热情让工作更有意义、有价值，让我们所做的事业更
                    快发展！我们优秀，我们有趣！                 
                    </div>
                </Col>
                <Col md={10} push={3}>
                    <img alt="" src={require('../../assets/introduce/img.png')}/>
                </Col>
            </Row>
        )
    }
    renderP4(){
        return (
                <div className='white intro-p4'>
                    <h3>管理团队</h3>
                    <Row>
                    <Parallax 
            animation={{ x: 0, opacity: 1, playScale: [0.2, 0.5] }}
            style={{ transform: 'translateX(-100px)', opacity: 0 }}
            >
                        <Col md={10} >
                            <Card hoverable='true' className='card'>
                                <Avatar 
                                className='avatar'
                                src={require('../../assets/introduce/img_4.png')}/>
                                <div className='title'>严河存</div>
                                <div className='label'>CTO</div>
                                <div className='body'>优趣天下创始人，负责公司全球化的服务及产品研发策略以及公司的技术架构，全球最流行的安卓Python应用QPython作者，Google开发者南宁社区活跃组织者，前Zynga高级开发工程师、前绿盟科技产品经理、前新浪邮件高级开发工程师。</div>
                                <div className='contact'>
                                    <i className='git'></i>
                                    <i className='weibo'></i>
                                </div>
                            </Card>
                        </Col>
                        </Parallax>
                        <Parallax 
            animation={{ x: 0, opacity: 1, playScale: [0.2, 0.4] }}
            style={{ transform: 'translateX(100px)', opacity: 0 }}
            >
                        <Col md={10} push={3}>
                            <Card hoverable='true' className='card'>
                                <Avatar 
                                className='avatar'
                                src={require('../../assets/introduce/img_5.png')}/>
                                <div className='title'>曲池峰</div>
                                <div className='label'>COO</div>
                                <div className='body'>优趣天下联合创始人，著名开源邮件系统Exmail创始人、前zynga高级系统工程师、前platform系统运维经理、前智联招聘系统运维经理、前新浪邮件高级系统工程师。</div>
                                <div className='contact'>
                                    <i className='git'></i>
                                    <i className='weibo'></i>
                                </div>
                            </Card>
                        </Col>
                        </Parallax>
                    </Row>
                </div>
                
        )
    }
    renderP5(){
        return (
                <div className='white intro-p4 intro-p5'>
                    <h3>主要成员</h3>
                    <Row className='row' key='a'>
                        <Col md={5} >
                            <Card 
                            className='card' 
                            bordered={false}
                            cover={<img alt='' src={require('../../assets/introduce/img_6.png')}/>}
                            >
                               <Meta 
                               title='Huang Mei'
                               description='Product Manager'
                               className='mess'
                               />
                            </Card>
                        </Col>
                        <Col md={5} push={1}>
                            <Card 
                            className='card' 
                            bordered={false}
                            cover={<img alt='' src={require('../../assets/introduce/img_11.png')}/>}
                            >
                               <Meta 
                               title='Wei Zhang'
                               description='Product Manager'
                               className='mess'
                               />
                            </Card>
                        </Col>
                        <Col md={5}  push={2}>
                            <Card 
                            className='card' 
                            bordered={false}
                            cover={<img alt='' src={require('../../assets/introduce/img_9.png')}/>}
                            >
                               <Meta 
                               title='Qiu Weiming'
                               description='Fullstack Developer'
                               className='mess'
                               />
                            </Card>
                        </Col>
                        <Col md={5}  push={3}>
                            <Card 
                            className='card' 
                            bordered={false}
                            cover={<img alt='' src={require('../../assets/introduce/img_12.png')}/>}
                            >
                               <Meta 
                               title='Meng Cunfang'
                               description='Python Developer'
                               className='mess'
                               />
                            </Card>
                        </Col>
                    </Row>
                    <Row className='row' key='b'>
                        <Col md={5} push={3}>
                            <Card 
                            className='card' 
                            bordered={false}
                            cover={<img alt='' src={require('../../assets/introduce/img_8.png')}/>}
                            >
                               <Meta 
                               title='He Qiuling'
                               description='React Developer'
                               className='mess'
                               />
                            </Card>
                        </Col>
                        <Col md={5}  push={4}>
                            <Card 
                            className='card' 
                            bordered={false}
                            cover={<img alt='' src={require('../../assets/introduce/img_10.png')}/>}
                            >
                               <Meta 
                               title='Yan Fufeng'
                               description='React Developer'
                               className='mess'
                               />
                            </Card>
                        </Col>
                        <Col md={5}  push={5}>
                            <Card 
                            className='card' 
                            bordered={false}
                            cover={<img alt='' src={require('../../assets/introduce/img_7.png')}/>}
                            >
                               <Meta 
                               title='Vince  Chou'
                               description='Marketing Analyst'
                               className='mess'
                               />
                            </Card>
                        </Col>
                    </Row>
                </div>
                
        )
    }
}

export default Introduce;