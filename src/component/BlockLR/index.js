import React from 'react'
import './index.css'
import {Row, Col } from 'antd'
import {Parallax} from 'rc-scroll-anim'
import QueueAnim from 'rc-queue-anim'

// 左右分栏
class BlockLR extends React.Component{
    render(){
        const left = this.props.children[0].key==='left'?this.props.children[0]:this.props.children[1];
        const right = this.props.children[0].key==='right'?this.props.children[0]:this.props.children[1];
        return (
                <Row 
                    className={"block2 " + this.props.className}
                    type='flex' 
                    align='middle'
                    key='a'
                >
                    <Col md={10}>   
                        <Parallax 
                        animation={{ x: 0, opacity: 1, playScale: [0.2, 0.4] }}
                        style={{ transform: 'translateX(-100px)', opacity: 0 }}
                        >
                        {left}
                        </Parallax>    
                    </Col>
                    <Col md={10} push={3}>
                        <Parallax 
                        animation={{ x: 0, opacity: 1, playScale: [0.2, 0.4] }}
                        style={{ transform: 'translateX(100px)', opacity: 0 }}
                        >
                            {right}
                        </Parallax>
                    </Col>
                </Row>
            
        )
    }
}

export default BlockLR;