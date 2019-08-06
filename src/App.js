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
          <Route path='/guide' component={Guide}></Route>
          <Route path='/blog' component={Blog}></Route>
          <Route path='/cooperate' component={Cooperate}></Route>
          <Route path='/join' component={Join}></Route>

        </Content>
          
        <Foot />
       
      </Layout>
        
  </BrowserRouter>
  );
}

export default App;
