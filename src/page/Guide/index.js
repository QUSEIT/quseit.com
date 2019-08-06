import React, { Component } from 'react'
import './index.css'
import Texty from 'rc-texty'
import {Input, Row, Col } from 'antd'


export default class Guide extends Component {
    render() {
        return (
            <div>
                <div className='blue guide-title'>
                    <Row type='flex' justify='space-between'>
                        <Col md={12}>
                            <Texty className='text'>优趣工作向导</Texty>
                        </Col>
                        <Col md={6}>
                            <Input 
                            prefix={<img src={require('../../assets/guide/search-icon.png')}/>}
                            placeholder='搜索'/>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}
