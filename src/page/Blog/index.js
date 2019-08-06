import React, { Component } from 'react'
import './index.css'
import {Row, Col, Pagination} from 'antd'
import Texty from 'rc-texty'
import QueueAnim from 'rc-queue-anim'

const blogs = [{
    title:'DO Global 旗下 app 因涉嫌廣告詐欺將遭 Google 全面下架',
    content:'app至今下載總量已超過了六億次',
    author:'River Yan',
    date:'2019年4月29日',
    label:'ad fraud, do global, gear, google'
},{
    title:'关于代码审计的人性化',
    content:'通过专注代码构造，文化因素和整体状态，使代码审计更加成功。',
    author:'River Yan',
    date:'2019年4月29日',
    label:'Web, Consulting, Code audit'
},{
    title:'关于代码审计的人性化',
    content:'通过专注代码构造，文化因素和整体状态，使代码审计更加成功。',
    author:'River Yan',
    date:'2019年4月29日',
    label:'Web, Consulting, Code audit'
},{
    title:'关于代码审计的人性化',
    content:'通过专注代码构造，文化因素和整体状态，使代码审计更加成功。',
    author:'River Yan',
    date:'2019年4月29日',
    label:'Web, Consulting, Code audit'
},{
    title:'关于代码审计的人性化',
    content:'通过专注代码构造，文化因素和整体状态，使代码审计更加成功。',
    author:'River Yan',
    date:'2019年4月29日',
    label:'Web, Consulting, Code audit'
},{
    title:'关于代码审计的人性化',
    content:'通过专注代码构造，文化因素和整体状态，使代码审计更加成功。',
    author:'River Yan',
    date:'2019年4月29日',
    label:'Web, Consulting, Code audit'
},{
    title:'关于代码审计的人性化',
    content:'通过专注代码构造，文化因素和整体状态，使代码审计更加成功。',
    author:'River Yan',
    date:'2019年4月29日',
    label:'Web, Consulting, Code audit'
}]

export default class Blog extends Component {
    constructor(props){
        super(props)
        this.state = {
            page:1,
            pageSize:5,
            length:blogs.length,
        }
        this.handlePagination = this.handlePagination.bind(this);
        this.showData = this.showData.bind(this);
    }
    render() {
        return (
            <div>
                <div className='white blog-header'>
                    <Texty className='header-text' duration='1000'>
                        BLOG
                    </Texty>
                </div>
                {this.renderP1()}
            </div>
        )
    }
    renderP1(){
        return (
            <QueueAnim type="bottom">
                <div  className='blog-contain white' key='a'>
                    <div className='blog-body'>
                        {
                        this.showData(this.state.page,this.state.pageSize)
                        }
                    </div>
                    <Pagination 
                    total={this.state.length} 
                    pageSize={this.state.pageSize}
                    size='small' 
                    onChange={this.handlePagination}/>
                </div>
            </QueueAnim>
           
        )
    }
    handlePagination(page,pageSize){
        this.setState({
            page: page,
            pageSize: pageSize
        })
    }
    showData(page,pageSize){
        let length = this.state.length - 1;
        let start = (page - 1) * pageSize;
        let end = (page * pageSize - 1)>length? length: (page*pageSize - 1);
        let items = [];
        for(let i= start; i <= end; i++){
            items.push(
                <Row className='blog-item' key={i}>
                    <Col md={24}>
                        <h4 className='item-title'>{blogs[i].title}</h4>
                        <div className='item-content'>{blogs[i].content}</div>
                        <Row className='item-footer'>
                            <Col md={4} sm={12}>
                            <div className='item-author'>{blogs[i].author}</div>
                            </Col>
                            <Col md={6} sm={12}>
                            <div className='item-date'>{blogs[i].date}</div>
                            </Col>
                            <Col md={14} sm={24}>
                            <div className='item-label'><b>标签：</b>{blogs[i].label}</div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            )
            
        }
        return items;
    }
}
