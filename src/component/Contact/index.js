import React from 'react'
import './index.css'
import {Row, Col} from 'antd'

class Contact extends React.Component{
    render(){
        return (
            <div className='white contact'>
                <Row type="flex" justify="space-between">
                    <Col md={10} push={2}>
                        <Row type='flex' align='middle'>
                            <Col md={4}>
                                <img src={require('../../assets/home/icon_8.png')} alt='合作与帮助'/>
                            </Col>
                            <Col md={20}>
                                <div className='content-title'>合作与帮助</div>
                                <p className='content-con'>Wechat: river4</p>
                                <p className='content-con'>Email: ceo@quseit.com</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={10}>
                        <Row type='flex' align='middle'>
                            <Col md={4}>
                                <img src={require('../../assets/home/icon_9.png')} alt='通讯地址'/>
                            </Col>
                            <Col md={20}>
                                <div className='content-title'>通讯地址</div>
                                <p className='content-con'>北京市xxxxxxx  xxx x    邮编x xxxx</p>
                                <p className='content-con'>优趣天下信息有限公司</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Contact;