import React from 'react'
import './index.css'
import {Row, Col} from 'antd'
import {Parallax} from 'rc-scroll-anim'

const text = {
    ch:[{
        img:require('../../assets/home/icon_8.png'),
        title:'合作与帮助',
        body:['Wechat: river4','Email: ceo@quseit.com']
    },{
        img:require('../../assets/home/icon_9.png'),
        title:'通讯地址',
        body:['北京市xxxxxxx  xxx x    邮编x xxxx','优趣天下信息有限公司']
    }],
    en:[{
        img:require('../../assets/home/icon_8.png'),
        title:'Support',
        body:['Wechat: river4','Email: ceo@quseit.com']
    },{
        img:require('../../assets/home/icon_9.png'),
        title:'Mailing Address',
        body:['北京市xxxxxxx  xxx x    邮编x xxxx','优趣天下信息有限公司']
    }]
}

class Contact extends React.Component{
    render(){
        const content = this.props.en?text.en:text.ch;
        return (
            <div className='white component-contact'>
                <Row type="flex" justify="space-between">
                    {content.map((item,index)=>
                        <Col md={10} push={2} key={index}>
                    <Parallax
                    animation={{ x: 0, opacity: 1, playScale: [0.1, 0.3] }}
                    style={{ transform: 'translateX(-100px)', opacity: 0 }}
                    >
                        <Row type='flex' align='middle'>
                            <Col md={6} className='content-icon'>
                                <img src={item.img} alt={item.title}/>
                            </Col>
                            <Col md={18}>
                                <div className='content-title'>{item.title}</div>
                                {
                                    item.body.map((p,i)=>
                                     <p className='content-con' key={i}>{p}</p>
                                    )
                                } 
                            </Col>
                        </Row>
                        </Parallax>
                    </Col>
                        )}
                </Row>
            </div>
        )
    }
}

export default Contact;