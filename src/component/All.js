import React,{useContext} from 'react'
import Input from './Input'
import {TodoContext} from './Main'

function All() {
    const context = useContext(TodoContext)
    console.log("context Testing....",context)
    return (
        <div>
            <Input />
            {
                context.map((data) => <div className='list' id={data && data.id} key={data && data.id}
                    onClick={(e) => {
                        let data = JSON.parse(localStorage.getItem('todo'))
                        let value = JSON.parse(e.target.id);
                        data[value].complete = true;
                        localStorage.setItem('todo', JSON.stringify(data))
                    }}>
                    <input id={data && data.id} type='checkbox' checked={data && data.complete}/>
                    <label id={data && data.id} style={data&& data.complete ?{textDecoration:'line-through'} :null}>{data && data.value}</label>
                </div>
            )}
        </div>
    )
}

export default All
