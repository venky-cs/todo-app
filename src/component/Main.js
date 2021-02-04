import React,{useState,useEffect} from 'react'
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import All from './All'
import Active from './Active'
import Completed from './Completed'

export let TodoContext = ''

function Main() {
    let data = JSON.parse(localStorage.getItem('todo')) || []
    console.log(data)
    const [state, setState] = useState([data])
    console.log('state testing.....', state, data)
    TodoContext = React.createContext([state])

    useEffect(() => {
        setState(data)
    }, [])
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
                    <TodoContext.Provider value={state}>
                    <Route exact path="/">
                        <All />
                    </Route>
                    <Route path="/active">
                        <Active />
                    </Route>
                    <Route path="/completed">
                        <Completed />
                    </Route>
                    </TodoContext.Provider>
                </Switch>
            </Router>
        </div>
    )
}

export default Main
