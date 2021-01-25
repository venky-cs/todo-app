import React from 'react'
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import All from './All'
import Active from './Active'
import Completed from './Completed'

function Main() {
    return (
        <div className="main">
            <h3>#todo</h3>
            <Router>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">All</Link>
                        </li>
                        <li>
                            <Link to="/active">Active</Link>
                        </li>
                        <li>
                            <Link to="/completed">Completed</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route exact path="/">
                        <All />
                    </Route>
                    <Route path="/active">
                        <Active />
                    </Route>
                    <Route path="/completed">
                        <Completed />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Main
