import React from 'react'
import {Layout, Row, Col} from 'antd'
import './index.css'

const {Footer} = Layout;
const icons = [
    require('../../assets/home/2-facebook.png'),
    require('../../assets/home/4-twitter.png'),
    require('../../assets/home/google-logo.png'),
    require('../../assets/home/sina-weibo.png')
]
const list = [{
    title:"解决方案",
    content:[{name:"跨境物流"},{name:"社交电商"},{name:"互动直播"}],
},{
    title:"服务",
    content:[{name:"设计"},{name:"设计冲刺"},{name:"UE & UI"},{name:"iOS开发"},{name:"Android开发"},{name:"微信服务开发"},{name:"网站开发"}],
},{
    title:"工具",
    content:[{name:"Python"},{name:"Github"},{name:"Vim"},{name:"Android studio"},{name:"Xcode"},{name:"敏捷开发"},{name:"每日构建"}],
},{
    title:"学习",
    content:[{name:"设计冲刺指导"},{name:"推荐图书"},{name:"开发手册"},{name:"技术分享活动"}],
},{
    title:"联系",
    content:[{
        name:"与我们合作",url:"/cooperate"
    },{
        name:"Email: ceo@quseit.com"
    },{
        name:"加入我们",url:"/join"
    }],
    icon: icons
}];


class Foot extends React.Component{
    render(){
        return (
            <Footer type='primary' className='footer'>
                <Row className='footbox' type='flex' justify='space-between'>
                   { 
                       list.map((item,index) => 
                       (<Col md={4} key={index} className='footbox-item'>
                           <p className='item-title'>{item.title}</p>
                           <ul className='item-content'>
                               {
                                   item.content.map((a,i)=>
                                <li key={i}>
                                    <a href={a.url?a.url:'javascript:void(0);'}>
                                        {a.name}
                                    </a>
                                
                                </li>)
                                }
                                {
                                    item.icon?
                                    <li>
                                        {item.icon.map((a,i)=>
                                        <img key={i} src={a}/>
                                        )}
                                    </li>
                                    :null
                                }
                           </ul>
                       </Col>)
                   )}
                </Row>
                <Row className='banquan'>
                        Copyright © 2018 京ICP备17072685号-2
                </Row>
                <Row className='mobile-footbox'>
                <p className='item-title'>联系方式</p>
                <ul className='item-content'>
                    <li><a href='/cooperate'>与我们合作</a></li>
                    <li>发送邮件: ceo@quseit.com</li>
                    <li>网站：<a href='https://quseit.cn'>https://quseit.cn</a></li>
                    <li className='mobile-bottom'>与我们互动：
                        {icons.map((item,index)=>
                           <img key={index} src={item}/>
                           )}
                    </li>
                </ul>
                </Row>
            </Footer>
            
        )
    }
}

export default Foot;