import {Component} from 'react'

import {Route, Switch} from 'react-router-dom'

import Home from './components/home'

import Login from './components/login'

import Profile from './components/userprofile'

import Teachers from './components/teachers'

import Students from './components/students'
class App extends Component {

  render(){
    return(
      <div>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/teachers" component={Teachers} />
        <Route exact path="/students" component={Students} />
        </Switch>
      </div>
    )
  }


}

export default App