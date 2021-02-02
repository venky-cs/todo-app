import React from 'react'

function Completed() {
    let data = JSON.parse(localStorage.getItem('todo')) || []
    console.log(data)
    let complete = data.filter((data)=> data.complete === true)
    console.log(complete)
    return (
        <div>
            {complete.map((data)=> <li>{data.value}</li>)}
        </div>
    )
}

export default Completed
