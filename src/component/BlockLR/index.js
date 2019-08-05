import React from 'react'
import './index.css'
import {Row, Col } from 'antd'
import {OverPack} from 'rc-scroll-anim'
import QueueAnim from 'rc-queue-anim'

// 左右分栏
class BlockLR extends React.Component{
    render(){
        const left = this.props.children[0].key==='left'?this.props.children[0]:this.props.children[1];
        const right = this.props.children[0].key==='right'?this.props.children[0]:this.props.children[1];
        return (
            <OverPack>
                <QueueAnim>
                    <Row 
                        className={"block2 " + this.props.className}
                        type='flex' 
                        align='middle'
                        key='a'
                    >
                    <Col md={10}>        
                        {left}
                    </Col>
                    <Col md={10} push={3}>
                        {right}
                    </Col>
            </Row>
                </QueueAnim>
            </OverPack>
            
        )
    }
}

export default BlockLR;