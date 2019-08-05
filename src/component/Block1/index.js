import React from 'react'
import './index.css'

class Block1 extends React.Component{
    render(){
        return (
            <div className={'block1 '+ this.props.className}>
                {this.props.title? <h2>{this.props.title}<i></i></h2>: null}
                {this.props.children}
            </div>
        )
    }
}

export default Block1;