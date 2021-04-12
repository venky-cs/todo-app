import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import All from './All'
import Active from './Active'
import Completed from './Completed'

export let TodoContext = ''

function Main() {
    let data = JSON.parse(localStorage.getItem('todo')) || []
    // console.log(data)
    // const [state, setState] = useState([data])
    // console.log('state testing.....', state, data)
    const [test, setTest] = useState(false)

    const [text, setText] = useState('')
    const [list, setList] = useState([])
    const [todo, setTodo] = useState(data);

    useEffect(() => {
        setTodo(data)
    }, [test])
    TodoContext = React.createContext([todo])

    let positionRel = {
        position:'relative',
        bottom:'0',
    }
    let positionAbs = {
        position:'absolute',
        left:'40%',right:'0',
        bottom:'0',
    }
    return (
      <div className="main">
        <h3>#todo</h3>
        <Router>
          <nav>
            <ul>
              <li>
                <NavLink
                  exact
                  to="/"
                  activeClassName="active"
                  activeStyle={{ color: 'red' }}
                >
                  All
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  to="/active"
                  activeClassName="active"
                  activeStyle={{ color: 'red' }}
                >
                  Active
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  to="/completed"
                  activeClassName="active"
                  activeStyle={{ color: 'red' }}
                >
                  Completed
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="input">
            <input
              type="text"
              placeholder="add details"
              onChange={createText}
              value={text}
              // (e.key === 'Enter' ? text.length >= 1 ? updateList() : null : null)
              onKeyPress={(e) => {
                if (e.key === 'Enter' && text.length >= 1) {
                  updateList();
                  dataRender();
                } else {
                  console.log('error');
                }
              }}
            />
            <button
              onClick={() => {
                if (text.length >= 1) {
                  updateList();
                  dataRender();
                } else {
                  console.log('error');
                }
              }}
            >
              Add
            </button>
          </div>
          <Switch>
            <TodoContext.Provider value={todo}>
              <Route exact path="/">
                <All test={dataRender} />
              </Route>
              <Route path="/active">
                <Active test={dataRender} />
              </Route>
              <Route path="/completed">
                <Completed test={dataRender} />
              </Route>
            </TodoContext.Provider>
          </Switch>
        </Router>

        <footer style={data.length > 6 ? positionRel : positionAbs}>
          <p>venky-cs @ DevChallenges.io</p>
        </footer>
      </div>
    );
    function createText(e) {
        setText(e.target.value)
    }
    function updateList() {
        // console.log("List",list,"Text",text)
        const generateID = () => Math.random().toString(36).substr(2, 9)
        setList([...list, {
            id: generateID(),
            value: text,
            complete: false
        }]);
        localStorage.setItem("todo", JSON.stringify([...todo, { id: generateID(), value: text, complete: false }]))

        let lists = localStorage.getItem("todo")
        let parseList = JSON.parse(lists)
        console.log(parseList)

        setTodo([...data, todo.push({ id: parseList.length, value: parseList.value })])
        setText('')
    }


    function dataRender() {
        setTest((prevState) => !prevState)
    }
}

export default Main
