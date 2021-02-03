import React,{useState,useEffect} from 'react'

function List() {
    let data = JSON.parse(localStorage.getItem('todo')) || []
    console.log(data)
    const [state,setState] =useState([])
    useEffect(() => {
        setState(data)
    }, [])
    return (
        <div>
            {state.map((data) => <div className='list' onClick={(e) => (console.log(e.target.innerHTML))}>
            <input type='checkbox' checked={data.complete}/>
                <label style={data.complete ?{textDecoration:'line-through'} :null}>{data.value}</label>
                </div>
            )}
        </div>
    )
}

export default List
