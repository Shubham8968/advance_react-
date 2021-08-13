import React from 'react'
import About from "./About"
import Home from "./Home"
import Error from"./Error"
import NavBar from './NavBar'
import People from './People'
import Person from './Person'
import {BrowserRouter as Router, Route, Switch } from "react-router-dom" //we want to use our router in our web page so that we would require 
import { help } from 'yargs'
    //a router which can route our components to there respective Links and we would also require some kind of switch to enable or disable our router 
// we can use either way Unique path routes or we can Exact keyword
function ReactRouterDom() {
    return (
        <Router>
            <Route exact path="/home">
                <Home />
            </Route>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/error">
                <Error />
            </Route>
            <Route path="/people">
                <People />
            </Route>


        </Router>
        
    )
}

export default ReactRouterDom
