import React,{useState} from 'react'

function List() {
    let data = JSON.parse(localStorage.getItem('todo')) || []
    const [select, setSelect] = useState(false)
    console.log(data)
    return (
        <div>
            {data.map((data) => <div className='list' onClick={() => setSelect((prevState) => !prevState)}>
            <input type='checkbox' checked={select}/>
                <label style={select ?{textDecoration:'line-through'} :null}>{data.value}</label>
                </div>
            )}
        </div>
    )
}

export default List
