import React, { Component } from 'react'
import {admainRoute} from "./routes"
import {Route,Redirect,Switch} from "react-router-dom"
//引入布局frame
import Frame from "./components/frame"
export default class App extends Component {
  render() {
    return (
      <>
        <Frame>
          <Switch>
            {
              admainRoute.map(route=>{
                return <Route key={route.pathname} path={route.pathname} component={route.component} exact={route.exact}/>
              })
            }
            <Redirect to={admainRoute[0].pathname} from="/admin" exact/>
            <Redirect to="/404" />
          </Switch> 
        </Frame>
      </>
    )
  }
}
