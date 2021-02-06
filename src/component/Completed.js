import React,{useContext} from 'react'
import { TodoContext } from './Main'

function Completed({test}) {
    const context = useContext(TodoContext)
    let contextFilter = context.filter((data) => data && data.complete === true)
    return (
        <div>
            {contextFilter.map((data) => <div className='list' onClick={(e) => (console.log(e.target.innerHTML))}>
                <input type='checkbox' checked={data && data.complete} />
                <label style={data && data.complete ? { textDecoration: 'line-through' } : null}>{data && data.value}</label>
                <button className="delBtn" id={data && data.id} onClick={(e) => {
                    let data = JSON.parse(localStorage.getItem('todo'))
                    let value = e.target.id;
                    // data[value] = data.pop();
                    const newTask=[]
                    data.map(data => {
                        let id = data.id;
                        if(id != value){
                            newTask.push(data)
                        }
                    })
                    localStorage.setItem('todo', JSON.stringify(newTask))
                    test()
                }}>Delete</button>
            </div>
            )}
            <button className="delBtn" onClick={() =>{
            localStorage.removeItem('todo')
            test()}}>Delete All</button>
        </div>
    )
}

export default Completed
