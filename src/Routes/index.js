import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Home from '../components/home'
import Guides from '../components/guides'
import Getstart from '../components/getstart'

import API from '../components/api'

import About from '../components/about'
import Post from '../components/post'
import Redirect from '../components/redirect'


class Routes extends Component{
  render(){
    return(
      <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/Getstart" component={Getstart} />
      <Route exact path="/api" component={API} />
      <Route exact path="/about" component={About} />
      <Route exact path="/tag/:type" component={Home}></Route>
      <Route exact path="/tag/:type" component={Home}></Route>
      <Route exact path="/tag/:type" component={Home}></Route>
      <Route exact path="/tag/:type" component={Home}></Route>
      <Route exact path="/tag/:type" component={Home}></Route>
      <Route exact path="/topic/:postId" component={Post}></Route>
      <Route render={() => ( <Redirect to="/404"></Redirect>)}/>
    </Switch>
    )
  }
}
export default Routes