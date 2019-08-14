import React, { Component } from 'react'
import Contact from '../../component/Contact'
import {Input, Row, Col, Checkbox, Button, } from 'antd'
import './index.css'
import Texty from 'rc-texty'
import QueueAnim from 'rc-queue-anim'

const {TextArea} = Input;
export default class Cooperate extends Component {
    constructor(props){
        super(props)
        this.state = {
            name:'',
            email:'',
            contact:'',
            projectName:'',
            money:'',
            date:'',
            projectType:'',
            requireMents:''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);
    }
    render() {
        return (
            <div className='cooperate'>
                <div className='cooperate-title blue'>
                        <Texty className='t1' duration="600">与我们合作 |</Texty>
                        <Texty className='t2' duration='800'>聘请我们帮助您构建个性化的互联网软件产品</Texty>
                </div>
                <QueueAnim type='bottom'>
                    <div key='1'>
                         <div className='white cooperate-p1'>
                    合作过程我们默认与您签订保密协议。 您提交给我们的所有信息将被严格保密，仅与您项目中的相关人员共享。请发送电子邮件至
                    <b>ceo@quseit.com</b>
                    或填写以下项目请求，我们通常会在1-3个工作小时内回复。
                    </div>
                
                    {this.renderForm()}
                    </div>
                   
                </QueueAnim>
                

                <Contact/>
                
            </div>
        )
    }
    renderForm(){
        return (
            <form className='white cooperate-form' onSubmit={this.handleSubmit}>
                <div>
                    <p>您的联系方式</p>
                    <Row>
                        <Col md={8} className='input-item'>
                            <label>姓名*</label>
                            <Input value={this.state.name} onChange={this.handleName} allowClear size='large' placeholder='输入您的姓名' className='input'/>
                        </Col>
                        <Col md={8} className='input-item'>
                            <label>电子邮箱*</label>
                            <Input value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})} allowClear size='large' placeholder='输入Email' className='input'/>
                        </Col>
                        <Col md={8} className='input-item'>
                            <label>电话/微信</label>
                            <Input value={this.state.contact} onChange={(e)=>this.setState({contact:e.target.value})} allowClear size='large' placeholder='输入电话或微信' className='input'/>
                        </Col>
                    </Row>
                </div>
                <div className='form-item'>
                    <p>项目详情</p>
                    <Row>
                        <Col md={8} className='input-item'>
                            <label>公司/项目名称</label>
                            <Input value={this.state.projectName} onChange={(e)=>this.setState({projectName:e.target.value})} allowClear size='large' placeholder='输入公司或项目名称' className='input'/>
                        </Col>
                        <Col md={8} className='input-item'>
                            <label>预算金额（元）</label>
                            <Input value={this.state.money} onChange={(e)=>this.setState({money:e.target.value})} allowClear size='large' placeholder='输入预算金额' className='input'/>
                        </Col>
                        <Col md={8} className='input-item'>
                            <label>期望交付周期（天）</label>
                            <Input value={this.state.date} onChange={(e)=>this.setState({date:e.target.value})} allowClear size='large' placeholder='输入期望交付天数' className='input'/>
                        </Col>
                    </Row>
                    <Checkbox.Group onChange={this.handleCheckbox}>
                         <Row className='cBox'>
                        <label>项目类型（可多选）</label>
                        <Col md={12} sm={12}className='checkBoxs'>
                            <Checkbox className='cbox' value='iOS应用'>iOS应用</Checkbox>
                            <Checkbox className='cbox' value='微信服务应用'>微信服务应用</Checkbox>
                            <Checkbox className='cbox' value='Web 开发'>Web 开发</Checkbox>
                            <Checkbox className='cbox' value='UI/UE设计'>UI/UE设计</Checkbox>
                        </Col>
                        <Col md={12}  sm={12} className='checkBoxs'>
                            <Checkbox className='cbox' value='Android应用'>Android应用</Checkbox>
                            <Checkbox className='cbox' value='微信小程序'>微信小程序</Checkbox>
                            <Checkbox className='cbox' value='产品原型设计'>产品原型设计</Checkbox>
                        </Col>
                    </Row>
                    </Checkbox.Group>
                   
                    <Row className='cBox'>
                        <label>详细需求</label>
                        <TextArea 
                        rows={6} 
                        className='textArea' 
                        placeholder='输入您的项目需求或详细描述'
                        value={this.state.requireMents}
                        onChange={(e)=>this.setState({requireMents:e.target.value})}/>
                    </Row>
                </div>
                <div className='btn-box'>
                    <Button type='primary' className='btn' htmlType='submit'>提交</Button>
                </div>
            </form>
        )
    }
    handleSubmit(e){
        console.log(this.state);
        e.preventDefault();
    }
    handleName(e){
        this.setState({
            name: e.target.value
        })
    }
    handleCheckbox(checkedValue){
        this.setState({
            projectType: checkedValue
        })
    }

}
