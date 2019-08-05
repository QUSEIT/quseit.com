import React from 'react'
import {Layout, Row, Col} from 'antd'
import './index.css'

const {Footer} = Layout;
const list = [{
    title:"解决方案",
    content:["跨境物流","社交电商","互动直播"],
},{
    title:"服务",
    content:["设计","设计冲刺","UE & UI","iOS开发","Android开发","微信服务开发","网站开发"],
},{
    title:"工具",
    content:["Python","Github","Vim","Android studio","Xcode","敏捷开发","每日构建"],
},{
    title:"学习",
    content:["设计冲刺指导","推荐图书","开发手册","技术分享活动"],
},{
    title:"联系",
    content:["与我们合作","Email: ceo@quseit.com","加入我们"],
    icon:[require('../../assets/home/2-facebook.png'),require('../../assets/home/4-twitter.png'),require('../../assets/home/google-logo.png'),require('../../assets/home/sina-weibo.png')]
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
                                <li key={i}>{a}</li>)
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
            </Footer>
            
        )
    }
}

export default Foot;