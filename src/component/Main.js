import React, { useState, useEffect } from 'react';
import All from './All';
import Active from './Active';
import Completed from './Completed';

export let TodoContext = '';

function Main() {
  let data = JSON.parse(localStorage.getItem('todo')) || [];
  // console.log(data)
  // const [state, setState] = useState([data])
  // console.log('state testing.....', state, data)
  const [test, setTest] = useState(false);

  const [text, setText] = useState('');
  const [list, setList] = useState([]);
  const [todo, setTodo] = useState(data);

  const [select, setSelect] = useState('all');

  useEffect(() => {
    setTodo(data);
  }, [test]);
  TodoContext = React.createContext([todo]);

  return (
    <div className="main">
      <h3>#todo</h3>
      <nav>
        <ul>
          <li
            onClick={() => setSelect('all')}
            className={select === 'all' ? 'active' : null}
          >
            All
          </li>
          <li
            onClick={() => setSelect('active')}
            className={select === 'active' ? 'active' : null}
          >
            Active
          </li>
          <li
            onClick={() => setSelect('completed')}
            className={select === 'completed' ? 'active' : null}
          >
            Completed
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

      <TodoContext.Provider value={todo}>
        {select === 'all' && <All test={dataRender} />}
        {select === 'active' && <Active test={dataRender} />}
        {select === 'completed' && <Completed test={dataRender} />}
      </TodoContext.Provider>
    </div>
  );
  function createText(e) {
    setText(e.target.value);
  }
  function updateList() {
    // console.log("List",list,"Text",text)
    const generateID = () => Math.random().toString(36).substr(2, 9);
    setList([
      ...list,
      {
        id: generateID(),
        value: text,
        complete: false,
      },
    ]);
    localStorage.setItem(
      'todo',
      JSON.stringify([
        ...todo,
        { id: generateID(), value: text, complete: false },
      ])
    );

    let lists = localStorage.getItem('todo');
    let parseList = JSON.parse(lists);
    console.log(parseList);

    setTodo([
      ...data,
      todo.push({ id: parseList.length, value: parseList.value }),
    ]);
    setText('');
  }

  function dataRender() {
    setTest((prevState) => !prevState);
  }
}

export default Main;
