import React, { Component } from 'react'
import BlueTitle from '../../component/BlueTitle'
import Contact from '../../component/Contact'
import {Collapse, Tag} from 'antd'
import './index.css'
import QueueAnim from 'rc-queue-anim'

const {Panel} = Collapse;

const panelset = [{
    header:'UI 设计师',
    number:2,
    content:[{
        title:"工作职责",
        body:['计算机编程的基础','诚实、踏实']
    }]
},{
    header:'iOS开发工程师',
    number:2,
    content:[{
        title:"工作职责",
        body:['计算机编程的基础','诚实、踏实']
    }]
},{
    header:'Android开发工程师',
    number:2,
    content:[{
        title:"工作职责",
        body:['计算机编程的基础','诚实、踏实']
    }]
},{
    header:'Web开发工程师',
    number:2,
    content:[{
        title:"工作职责",
        body:['对web开发充满热情','有钻研精神及很强的自学能力','计算机编程的基础','诚实、踏实']
    },{
        title:"任职要求",
        body:['精通HTML/XHTML、CSS等网页制作技术，熟悉页面架构和布局',
        '深刻理解手机平台上各主流浏览器之间的兼容性',
        '熟悉HTML5特性，了解HTML5最新规范',
        '精通JavaScript、Ajax等Web开发技术, 熟悉AngularJS、VUE.JS优先考虑']
    }]
}]

export default class Join extends Component {
    render() {
        return (
            <div>
                <BlueTitle content='我们为你保留了一个位置' className='join-title'/>
                {this.renderP1()}
                <Contact />
            </div>
        )
    }
    renderP1(){
        return (
            <QueueAnim type='bottom' duration='1000'>
            <div className='white join' key='1'>
                <h2>选择你的角色</h2>
                <Collapse expandIconPosition='right' bordered={false} defaultActiveKey="3">
                    {
                        panelset.map((item,index) => (
                            <Panel header={item.header} key={index} extra={this.renderTag(item.number)} className='item-header'>
                                {
                                    item.content.map((con,i)=>(
                                        <div key={i}>
                                            <p className='item-title'>{con.title}：</p>
                                            <ul className='item-con'>
                                                {
                                                    con.body.map((li,j)=>
                                                    <li key={j}>{li}</li>
                                                    )
                                                }
                                            </ul>
                                        </div>
                                    ))
                                }
                                <div className='remind'>
                                    <p>请发送简历至<b>ceo@quseit.com</b></p>
                                    <p>邮件主题为:<b>“职位+姓名”</b></p>
                                </div>
                            </Panel>
                       ))
                    }
                    
                </Collapse>
                
            </div>
            </QueueAnim>
        )
    }
    renderTag(text){
        return (
            <Tag className='header-tag'>{text}</Tag>
        )
    }
}
