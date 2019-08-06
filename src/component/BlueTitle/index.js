import React from 'react'
import './index.css'
import {Row} from 'antd'
import Texty from 'rc-texty'

class BlueTitle extends React.Component{
    render(){
        return (
            <Row className={'blue bluetitle ' + this.props.className}>
                <Texty 
                className='title'
                duration='1000'
                >
                    {this.props.title}
                </Texty>
                <Texty 
                className='content'
                type='bounce'
                >
                    {this.props.content}
                </Texty>
                {this.props.children}
            </Row>
        )
    }
}

export default BlueTitle;