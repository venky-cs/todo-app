import React from 'react'

function Completed() {
    let data = JSON.parse(localStorage.getItem('todo')) || []
    console.log(data)
    let complete = data.filter((data)=> data.complete === true)
    console.log(complete)
    return (
        <div>
            {complete.map((data) => <div className='list' onClick={(e) => (console.log(e.target.innerHTML))}>
                <input type='checkbox' checked={data.complete} />
                <label style={data.complete ? { textDecoration: 'line-through' } : null}>{data.value}</label>
            </div>
            )}
        </div>
    )
}

export default Completed
