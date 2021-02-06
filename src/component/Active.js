import React,{useContext} from 'react'
import { TodoContext } from './Main'

function Active({test}) {
    
    const context = useContext(TodoContext)
    let contextFilter = context.filter((data) => data && data.complete === false)
    return (
        <div>
            {/* <Input /> */}
            {contextFilter.map((data) => <div className='list' id={data &&data.id} key={data &&data.id} 
            onClick={(e) => {
                let data = JSON.parse(localStorage.getItem('todo'))
                let value = e.target.id;
                data.map(data => {
                    if (data.id === value) { data.complete = true };
                })
                    localStorage.setItem('todo',JSON.stringify(data))
                    test()
                }}>
                <input type='checkbox' id={data &&data.id} checked={data &&data.complete} />
                <label id={data &&data.id} style={data &&data.complete ? { textDecoration: 'line-through' } : null}>{data &&data.value}</label>
            </div>)}
        </div>
    )
}

export default Active
