import React, { Component } from 'react'
import './Detail.css'
import {Row, Col} from 'antd'

export default class Detail extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const id = this.props.match.params.id;
        const blogs = this.props.location.blogs;
        return (
            <div className='white blog-contain detail'>
                <div className='blog-item'>
                    <h2 className='item-title'>
                        {blogs[id].title}
                        {/* 标题标题标题 */}
                    </h2>
                    <div className='item-titlelabel'> 
                        <Row type='flex' justify='center'>
                            <Col ml={4} md={4} sm={4} >
                                <div className='item-author'>
                                {blogs[id].author}
                                {/* 作者 */}
                                </div>
                            </Col>
                            <Col ml={4} md={4} sm={6}>
                                <div className='item-date'>
                                    {/* 日期 */}
                                {blogs[id].date}
                                </div>
                            </Col>
                            <Col ml={6} md={10} sm={14}>
                                <div className='item-label'>
                                <b>标签：</b>
                                {blogs[id].label}
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className='detail-content'>
                        {/* 内容 */}
                    {blogs[id].content}
                    </div>
                </div>
            </div>
        )
    }
}
