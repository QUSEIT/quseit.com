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
const foot={
    ch:{
        list : [{
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
    }],
    banquan:'Copyright © 2019 京ICP备17072685号-2',
    mobile:{
        title:'联系方式',
        content:[{
            name:'与我们合作',url:'/cooperate',
        },{
            name:'发送邮件: ceo@quseit.com'
        },{
            name:'网站：https://quseit.cn',url:'https://quseit.cn'
        },{
            name:'与我们互动：',icon:icons
        }]}
    },
    en:{
        list : [{
        title:"Solutions",
        content:[{name:"Cross-border logistics"},{name:"社交电商"},{name:"互动直播"}],
    },{
        title:"Services",
        content:[{name:"Design"},{name:"设计冲刺"},{name:"UE & UI"},{name:"iOS development"},{name:"Android development"},{name:"微信服务开发"},{name:"web development"}],
    },{
        title:"Tools",
        content:[{name:"Python"},{name:"Github"},{name:"Vim"},{name:"Android studio"},{name:"Xcode"},{name:"敏捷开发"},{name:"每日构建"}],
    },{
        title:"Learning",
        content:[{name:"设计冲刺指导"},{name:"推荐图书"},{name:"开发手册"},{name:"技术分享活动"}],
    },{
        title:"Contact",
        content:[{
            name:"与我们合作",url:"/cooperate"
        },{
            name:"Email: ceo@quseit.com"
        },{
            name:"加入我们",url:"/join"
        }],
        icon: icons
    }],
    banquan:'Copyright © 2019 京ICP备17072685号-2',
    mobile:{
        title:'联系方式',
        content:[{
            name:'与我们合作',url:'/cooperate',
        },{
            name:'发送邮件: ceo@quseit.com'
        },{
            name:'网站：https://quseit.cn',url:'https://quseit.cn'
        },{
            name:'与我们互动：',icon:icons
        }]}
    }
    
};


class Foot extends React.Component{
    render(){
        const text = this.props.en?foot.en:foot.ch;
        return (
            <Footer type='primary' className='footer'>
                <Row className='footbox' type='flex' justify='space-between'>
                   { 
                       text.list.map((item,index) => 
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
                        {text.banquan}
                </Row>
                {
                 <Row className='mobile-footbox'>  
                    <p className='item-title'>{ text.mobile.title}</p>
                    <ul className='item-content'>
                        {
                            text.mobile.content.map((item,i)=>
                            <li key={i}>
                            {
                                item.url?<a href={item.url}>{item.name}</a>:item.name
                            }
                            {
                                item.icon?
                                <React.Fragment>
                                    {item.icon.map((item,index)=>
                                        <img key={index} src={item}/>
                                     )}
                                </React.Fragment>
                                :null
                            }
                        </li>)
                        }
                        
                    </ul>
                </Row>
                    }
               
            </Footer>
            
        )
    }
}

export default Foot;