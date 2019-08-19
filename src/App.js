import React from 'react';
import './App.css';
import Head from './component/Head'
import {BrowserRouter, Route} from 'react-router-dom'
import {Layout} from 'antd'
import Foot from './component/Foot'
import Index from './page/Home'
import Introduce from './page/Introduce'
import Service from './page/Service'
import Cooperate from './page/Cooperate'
import Join from './page/Join'
import Blog from './page/Blog'
import Guide from './page/Guide'

const {Content} = Layout;

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      isEnglish:false,
    }
  }

  switchLaungh = () => {
    this.setState({
      isEnglish:!this.state.isEnglish
    })
  }

  render(){
    return (
    <BrowserRouter>
      <Layout>
        <Head en={this.state.isEnglish} setLaungh={this.switchLaungh}/>
        <Content className='app-body'>
          <Route exact path='/' component={()=><Index  en={this.state.isEnglish}/>}></Route>
          <Route path='/service' component={Service}></Route>
          <Route path='/introduce' component={Introduce}></Route>
          <Route path='/guide' component={Guide}></Route>
          <Route path='/blog' component={Blog}></Route>
          <Route path='/cooperate' component={Cooperate}></Route>
          <Route path='/join' component={Join}></Route>

        </Content>
          
        <Foot />
       
      </Layout>
        
  </BrowserRouter>
  )
  }
}

export default App;
