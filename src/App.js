import React from 'react';
import './App.css';
import Head from './component/Head'
import {BrowserRouter, Route} from 'react-router-dom'
import {Layout} from 'antd'
import Foot from './component/Foot'
import Index from './page/Home'
import Introduce from './page/Introduce'
import Service from './page/Service'

const {Content} = Layout;


function Page3(){
  return <div>联系我们</div>
}
function Page4(){
  return <div>工作向导</div>
}
function Page5(){
  return <div>博客</div>
}
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Head />
        <Content>
          <Route exact path='/' component={Index}></Route>
          <Route path='/service' component={Service}></Route>
          <Route path='/introduce' component={Introduce}></Route>
          <Route path='/page3' component={Page3}></Route>
          <Route path='/page4' component={Page4}></Route>
          <Route path='/page5' component={Page5}></Route>

        </Content>
          
        <Foot />
       
      </Layout>
        
  </BrowserRouter>
  );
}

export default App;
