import React from 'react'
import Input from './Input'

function Active() {
    let data = JSON.parse(localStorage.getItem('todo')) || []
    console.log(data)
    let complete = data.filter((data) => data.complete === false)
    console.log(complete)
    return (
        <div>
            <Input />
            {complete.map((data) => <div className='list' onClick={(e) => console.log(e.target.innerHTML)}>
                <input type='checkbox' checked={data.complete} />
                <label style={data.complete ? { textDecoration: 'line-through' } : null}>{data.value}</label>
            </div>)}
        </div>
    )
}

export default Active
