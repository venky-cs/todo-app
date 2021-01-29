import React,{useState} from 'react'

function List({list}) {
    const [select, setSelect] = useState(false)
    return (
        <div className='list' onClick={() => setSelect(true)}>
            <input type='checkbox' checked={select}/>
                <label style={select ?{textDecoration:'line-through'} :null}>{list.value}</label>
        </div>
    )
}

export default List
