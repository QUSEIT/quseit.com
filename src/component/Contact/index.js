import React from 'react'
import './index.css'
import {Row, Col} from 'antd'
import {Parallax} from 'rc-scroll-anim'

class Contact extends React.Component{
    render(){
        return (
            <div className='white component-contact'>
                <Row type="flex" justify="space-between">
                    <Col md={10} push={2}>
                    <Parallax
                    animation={{ x: 0, opacity: 1, playScale: [0.1, 0.3] }}
                    style={{ transform: 'translateX(-100px)', opacity: 0 }}
                    >
                        <Row type='flex' align='middle'>
                            <Col md={6} className='content-icon'>
                                <img src={require('../../assets/home/icon_8.png')} alt='合作与帮助'/>
                            </Col>
                            <Col md={18}>
                                <div className='content-title'>合作与帮助</div>
                                <p className='content-con'>Wechat: river4</p>
                                <p className='content-con'>Email: ceo@quseit.com</p>
                            </Col>
                        </Row>
                        </Parallax>
                    </Col>
                    <Col md={10}>
                        <Parallax
                        animation={{ x: 0, opacity: 1, playScale: [0.1, 0.3] }}
                        style={{ transform: 'translateX(100px)', opacity: 0 }}
                        >
                        <Row type='flex' align='middle'>
                            <Col md={6} className='content-icon'>
                                <img src={require('../../assets/home/icon_9.png')} alt='通讯地址'/>
                            </Col>
                            <Col md={18}>
                                <div className='content-title'>通讯地址</div>
                                <p className='content-con'>北京市xxxxxxx  xxx x    邮编x xxxx</p>
                                <p className='content-con'>优趣天下信息有限公司</p>
                            </Col>
                        </Row>
                        </Parallax>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Contact;