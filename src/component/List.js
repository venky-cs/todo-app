import React from 'react'

function List({list}) {
    return (
        <div className='list'>
            <input type='checkbox'/>
                <label>{list.value}</label>
        </div>
    )
}

export default List
