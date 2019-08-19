import React from 'react'
import {Button, Row, Col, Card} from 'antd'
import './index.css'
import {Parallax } from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
import Block1 from '../../component/Block1'
import Contact from '../../component/Contact'

const p4Img=[
    {
        title:require('../../assets/home/logo_6.png'),
        body:require('../../assets/home/img_5.png')
    },
    {
        title:require('../../assets/home/logo_3.png'),
        body:require('../../assets/home/img_3.png')
    },
    {
        title:require('../../assets/home/logo_5.png'),
        body:require('../../assets/home/img_4.png')
    },
    {
        title:require('../../assets/home/logo_4.png'),
        body:require('../../assets/home/img_7.png')
    },
    {
        title:require('../../assets/home/logo_2.png'),
        body:require('../../assets/home/img_6.png')
    },
    {
        title:require('../../assets/home/logo.png'),
        body:require('../../assets/home/img_5.png')
    },
]
const homeText = {
    p1:{
      ch:{
        title:'我们帮助创业公司与企业家将他们的商业理念变为现实',
        body:'作为一个充满热情和信念的互联网团队，我们始终关注了解互联网产业发展最新趋势和技术动态，学习掌握最新的设计理念和开发方法，为客户提供一流的产品设计和技术实现方案。',
        btn:'联系我们',
        img:require('../../assets/home/img_2.png')
    },en:{
        title:'We help startups and entrepreneurs transform their business ideas into reality',
        body:'As an Internet team full of enthusiasm and conviction, we always pay attention to the latest trends and technological developments in Internet industry, learn the latest design concepts and development methods, and provide customers with first-class product design and technology realization solutions.',
        btn:'Contact us',
        img:require('../../assets/home/img_2.png')
    }},
    p2:{
        ch:{
            title:'专注的领域',
            item:[
                {
                    img:require('../../assets/home/icon_5.png'),
                    title:'互联网产品',
                    body:'我们擅长于互联网产品尤其是移动互联网产品的设计。我们时刻学习并深入掌握最新的设计',
                    mobile:['iOS应用开发','Android应用开发','微信服务应用','Web开发']
                },{
                    img:require('../../assets/home/icon_6.png'),
                    title:'区块链技术',
                    body:'我们擅长于互联网产品尤其是移动互联网产品的设计。我们时刻学习并深入掌握最新的设计',
                    mobile:['iOS应用开发','Android应用开发','微信服务应用','Web开发']
                },{
                    img:require('../../assets/home/icon_3.png'),
                    title:'编程教育',
                    body:'我们擅长于互联网产品尤其是移动互联网产品的设计。我们时刻学习并深入掌握最新的设计',
                    mobile:['iOS应用开发','Android应用开发','微信服务应用','Web开发']
                }
            ]
        },
        en:{
            title:'Our Expertise',
            item:[
                {
                    img:require('../../assets/home/icon_5.png'),
                    title:'Internet Products',
                    body:'  iOS App development,Android development,web-based apps,iOS App development',
                    mobile:['iOS App development','Android development','web-based apps','iOS App development']
                },{
                    img:require('../../assets/home/icon_6.png'),
                    title:'Blockchain Technology',
                    body:'  iOS App development,Android development,Python',
                    mobile:['iOS App development','Android development','Python']
                },{
                    img:require('../../assets/home/icon_3.png'),
                    title:'Programming Education',
                    body:'  iOS App development,Android development,Python',
                    mobile:['iOS App development','Android development','Python']
                }
            ]
        }
    },
    p3:{
        ch:{
            title:'我们的服务',
            left:[{
                img:require('../../assets/home/icon.png'),
                title:'UI/UE设计', 
            },{
                img:require('../../assets/home/icon_7.png'),
                title:'移动应用开发',
            },{
                img:require('../../assets/home/icon_4.png'),
                title:'Web开发'
            },{
                img:require('../../assets/home/icon_2.png'),
                title:'应用增长'
            }],
            right:{
                title:'我们有您需要的经验和技能',
                body:[
                    '我们的首要任务是帮助创业公司和企业家将他们的商业理念变为现实。我们擅长于互联网产品尤其是移动互联网产品的设计。我们时刻学习并深入掌握最新的设计趋势和方法，如扁平化设计、Material Design、微信风格设计等。',
                    '我们擅长的开发技术包括不限于以下：微信服务号开发、小程序、HTML5/Javascript、Django、Tornado、Android、iOS、Unity3D。'
                ]}
        },
    en:{
        title:'What We Offer',
        left:[{
            img:require('../../assets/home/icon.png'),
            title:'UI/UE', 
        },{
            img:require('../../assets/home/icon_7.png'),
            title:'Mobile Apps',
        },{
            img:require('../../assets/home/icon_4.png'),
            title:'Web Development'
        },{
            img:require('../../assets/home/icon_2.png'),
            title:'用户增长'
        }],
        right:{
            title:'We Are Skillful',
            body:[
                'Our primary mission is to help startups and entrepreneurs transform their business ideas into reality. Developing easy-to-manage web apps and smart software solutions with the use of cutting-edge web development technologies, we help our customers achieve success.',
                'The technology we are good at: Wechat service, HTML5 Javascript, Django, Tornado, Android, iOS, Unity3D'
            ]}
        }
    }
}

class Home extends React.Component{
    render(){
        return (
            <div>
                {this.renderP1()}
                {this.renderP2()}
                {this.renderP3()}
                {this.renderP4()}
                {this.renderP5()}
                {this.renderP6()}
                {this.renderP7()}
                
            <Contact/>
               
            </div>
            
        )
    }
    renderP1(){
        const p1 = homeText.p1;
        const content = this.props.en?p1.en:p1.ch;
        return (
                <QueueAnim type='right' duration='1000'>
                    <div className='home-p1' key="demo1">
                        <Row type="flex" justify="space-between" align="middle">
                            <Col md={{span:12,order:1}} sm={{order:2}} xs={{order:2}}>
                                <h1>
                                {content.title}
                                </h1>
                                <p>
                                {content.body}
                                </p>
                                <Button type='primary' className='p1-btn' href='/cooperate'>{content.btn}</Button>
                            </Col>
                            <Col md={{span:11,order:2}} sm={{order:1}} xs={{order:1}}>
                                <img  src={content.img} alt=''/>
                            </Col>
                        </Row>
                    </div>
                    </QueueAnim>
        )
    }
    renderP2(){
        const p2 = homeText.p2;
        const content = this.props.en?p2.en:p2.ch;
        // const content = p2.ch;
        const item = content.item;
        return (
            <Block1 className='blue' title={content.title}>
                <Parallax
                animation={{ x: 0, opacity: 1, playScale: [0.2, 0.5] }}
                style={{ transform: 'translateX(100px)', opacity: 0 }}
                >
                    <Row>
                        {
                            item.map((a,i)=>
                            <Col md={8} key={i}>
                                <Card hoverable='true' className='card-box'>
                                    <Row type='flex' align="middle">
                                        <Col md={24} sm={12}  xs={10}>
                                            <img className='cardbox-img' alt={a.title} src={a.img} />
                                            <div className='cardbox-title'>{a.title}</div>
                                        </Col>
                                        <Col md={0} sm={12} xs={{span:12,push:2}}>
                                            <ul>
                                                {
                                                    a.mobile.map((l,n)=>
                                                     <li key={n}>{l}</li>
                                                    )
                                                }
                                            </ul>
                                        </Col>
                                        <Col md={24} sm={0} xs={0}>
                                            <div className='cardbox-content'>
                                            {a.body}                                        
                                            </div>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                            )
                        }
                    </Row>
                </Parallax>  
            </Block1>
        )
    }
    renderP3(){
        const p3 = homeText.p3;
        const content = this.props.en?p3.en:p3.ch;
        // const content = p3.ch;
        const left = content.left;
        const right = content.right;
        return (
            <Block1 className='grey p3' title={content.title}>
                <Row>
                <Parallax
                animation={{ x: 0, opacity: 1, playScale: [0.2, 0.5] }}
                style={{ transform: 'translateX(-100px)', opacity: 0 }}
                >
                    <Col md={12} key='d1' >
                        <Row>
                        {
                            left.map((item,index)=>
                            <Col md={12}  className='flex-center' key={index}>
                                <Card hoverable='true' className='p3-card'>
                                    <Row>
                                        <Col md={24} sm={10} xs={10}>
                                        <img src={item.img} alt={item.title}/>
                                        </Col>
                                        <Col md={24} sm={14} xs={14}>
                                        <div>{item.title}</div>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                            )
                        }
                        </Row>
                    </Col>
                </Parallax> 
                    <Parallax
                animation={{ x: 0, opacity: 1, playScale: [0.2, 0.5] }}
                style={{ transform: 'translateX(100px)', opacity: 0 }}
                >
                    <Col md={12} key='d2' className='p3-right'>
                        <div className='right-title'>{right.title}</div>
                        {right.body.map((item,index)=>
                            <p className='right-content' key={index}>{item}</p>
                            )}
                    </Col>
                </Parallax>
                </Row>
            </Block1>
        )
    }
    renderP4(){
        return (
            <Block1 className='white p4' title='我们的案例'>
                 <Parallax
                animation={{ y: 0, opacity: 1, playScale: [0.2, 0.5] }}
                style={{ transform: 'translateY(100px)', opacity: 0 }}
                >
                <Row gutter={16} type='flex' justify='center'>
                    {
                        p4Img.map((item,index)=>
                        <Col md={8} sm={24} xs={24} key={index} className='flex-center'>
                            <Card hoverable='true' className='p4-card'>
                                <Row>
                                    <Col xs={24}>
                                        <img src={item.title} alt='' className='title'/>
                                    </Col>
                                    <Col xs={24}>
                                        <img src={item.body} alt='' className='body'/>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        )
                    }
                </Row>
                </Parallax>
            </Block1>
        )
    }
    renderP5(){
        return (
            <Block1 className=' blue p5' title='合作伙伴'>
               <Parallax
                animation={{ y: 0, opacity: 1, playScale: [0.2, 0.5] }}
                style={{ transform: 'translateY(100px)', opacity: 0 }}
                >
                <Row key='a'>
                    <Col xl={5} lg={8} md={12} sm={12} xs={12}>
                        <img alt='uber' src={require('../../assets/home/logo-uber.png')}/>
                    </Col>
                    <Col xl={5} lg={8} md={12}  sm={12} xs={12}>
                        <img alt='abs' src={require('../../assets/home/logo-abs.png')}/>
                    </Col>
                    <Col xl={5} lg={8} md={12}  sm={12} xs={12}>
                        <img alt='origin' src={require('../../assets/home/logo-origin.png')}/>
                    </Col>
                    <Col xl={5} lg={8} md={12}  sm={12} xs={12}>
                        <img alt='musicion' src={require('../../assets/home/logo-musicoin.png')}/>
                    </Col>
                    <Col xl={4} lg={8} md={12}  sm={12} xs={12}>
                        <img alt='rm' src={require('../../assets/home/logo-rm.png')}/>
                    </Col>
                    <Col xl={5} lg={8} md={12}  sm={12} xs={12}>
                        <img alt='mixolo' src={require('../../assets/home/logo-mixolo.png')}/>
                    </Col>
                    <Col xl={5} lg={8} md={12}  sm={12} xs={12}>
                        <img alt='ogury' src={require('../../assets/home/logo-ogury-5.png')}/>
                    </Col>
                    <Col xl={5} lg={8} md={12}  sm={12} xs={12}>
                        <img alt='cp' src={require('../../assets/home/logo-cp.png')}/>
                    </Col>
                    <Col xl={5} lg={8} md={12}  sm={12} xs={12}>
                        <img alt='' src={require('../../assets/home/logo-rong.png')}/>
                    </Col>
                </Row>
                </Parallax>
            </Block1>
        )
    }
    renderP6(){
        return (
            <Block1 className='white p6' >
            <Parallax
                animation={{ y: 0, opacity: 1, playScale: [0.2, 0.5] }}
                style={{ transform: 'translateY(100px)', opacity: 0 }}
                >
                <Row className='bgpic' type='flex' justify='end' key='a'>
                    <Col md={10} lg={10}>
                        <h3>我们团队</h3>
                        <p>
                        我们是一支具有强大价值观的团队，这些价值观建立在我们做出的每一个决策
                        以及我们所构建的一切事务之上。我们正在努力建立世界的典范：透明，快乐，
                        探索和快速发展
                        </p>
                        <a href='javascript:void(0)'>Full team >></a>
                    </Col>
                    <Col md={0} sm={24} className='mobile-bgpic'>
                        <img src={require('../../assets/mobile/home-img.png')} />
                    </Col>
                </Row>
            </Parallax>
            </Block1>
        )
    }
    renderP7(){
        return (
            <Block1 className='grey home-p7' >
                <Row type="flex" justify="space-between" key='a' align='middle'>
                    <Col md={{span:12,order:1}} sm={{span:24,order:2}} xs={{span:24,order:2}}>
                        <Parallax
                    animation={{ x: 0, opacity: 1, playScale: [0.2, 0.5] }}
                    style={{ transform: 'translateX(-100px)', opacity: 0 }}
                    >
                        <h1>
                        我们正在招人
                        </h1>
                        <p>
                        我们正在建立一支聪明，富有创造力，<br/>
                        充满激情的乐观主义者团队，<br/>
                        他们会在其他人看到障碍时看到机会， <br/>
                        如果这听起来像你，欢迎联系我们。
                        </p>
                        <Button type='primary' className='p7-btn' ghost href='/join'>开放的职位  ></Button>
                        </Parallax>
                    </Col>
                    <Col md={{span:11,order:2}} sm={{span:24,order:1}} xs={{span:24,order:1}}>
                        <Parallax
                    animation={{ x: 0, opacity: 1, playScale: [0.2, 0.5] }}
                    style={{ transform: 'translateX(100px)', opacity: 0 }}
                    >
                        <img  src={require('../../assets/home/2.png')} alt=''/>
                        </Parallax>
                    </Col>
                </Row>
            </Block1>
        )
    }
}

export default Home;