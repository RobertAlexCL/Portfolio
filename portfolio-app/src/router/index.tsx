import React from 'react'
import { Route, Switch } from 'react-router'
import About from '../pages/About'
import Contact from '../pages/Contact'
import HomePage from '../pages/HomePage'
import Projects from '../pages/Projects'

const Router = () => {

    return (<Switch>
        <Route exact path="/">
            <HomePage />
        </Route>
        <Route exact path="/projects">
            <Projects />
        </Route>
        <Route exact path="/about">
            <About />
        </Route>
        <Route exact path="/contact">
            <Contact />
        </Route>
    </Switch>)
}

export default Router