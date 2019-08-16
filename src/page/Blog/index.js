import React, { Component } from 'react'
import './index.css'
import {Row, Col, Pagination} from 'antd'
import Texty from 'rc-texty'
import QueueAnim from 'rc-queue-anim'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Detail from './Detail'


export default class Blog extends Component {
    constructor(props){
        super(props)
        this.state = {
            page:1,
            pageSize:5,
            blogs:'',
        }
        this.handlePagination = this.handlePagination.bind(this);
        this.showData = this.showData.bind(this);
        this.renderP1 =this.renderP1.bind(this);
        // this.renderBlog =this.renderBlog.bind(this);
    }
    async componentDidMount() {
        let data = await fetch('/blogs.json').then(function(response) {
            return response.json();
        });
        this.setState({
                blogs:data,
            })
    }
    render() {
        return (
            <div>
                <Router>
                   
                    <Switch>
                        <Route path='/blog/:id' component={Detail}/>
                        <Route render={this.renderP1}/>
                    </Switch>
                </Router>
               
            </div>
        )
    }
    renderP1(){
        return (
            <QueueAnim type="bottom">
                <div className='white blog-header'>
                    <Texty className='header-text' duration='1000'>
                        BLOG
                    </Texty>
                </div>
                <div  className='blog-contain white' key='a'>
                    <div className='blog-body'>
                        {
                        this.showData(this.state.page,this.state.pageSize)
                        }
                    </div>
                    <Pagination 
                    total={this.state.blogs.length} 
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
        const blogs = this.state.blogs;
        let length = blogs.length - 1;
        let start = (page - 1) * pageSize;
        let end = (page * pageSize - 1)>length? length: (page*pageSize - 1);
        let items = [];
        for(let i= start; i <= end; i++){
            items.push(
                <Link key={i} to={{
                    pathname:'/blog/'+i,
                    blogs:blogs}}>
                    <Row className='blog-item'>
                        <Col md={24}>
                            <h4 className='item-title'>{blogs[i].title}</h4>
                            <div className='item-content'>{blogs[i].content}</div>
                            <Row className='item-footer'>
                                <Col md={4} sm={0} xs={0}>
                                <div className='item-author'>{blogs[i].author}</div>
                                </Col>
                                <Col md={6} sm={24} xs={24}>
                                <div className='item-date'>{blogs[i].date}</div>
                                </Col>
                                <Col md={14} sm={0} xs={0}>
                                <div className='item-label'><b>标签：</b>{blogs[i].label}</div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Link>
            )
            
        }
        return items;
    }
}
