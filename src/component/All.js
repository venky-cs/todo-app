import React,{useContext} from 'react'
import {TodoContext} from './Main'

function All({test}) {
    const context = useContext(TodoContext)
    // console.log("context Testing....",context)
    return (
        <div>
            {
                context.map((data) => <div className='list' id={data && data.id} key={data && data.id}
                    onClick={(e) => {
                        let data = JSON.parse(localStorage.getItem('todo'))
                        let value = e.target.id;
                        data.map(data => {
                            if (data.id === value) { data.complete = true };
                            return data
                        })
                        // data.id[value].complete = true;
                        localStorage.setItem('todo', JSON.stringify(data))
                        test()
                    }}>
                    <input id={data && data.id} type='checkbox' checked={data && data.complete}/>
                    <label id={data && data.id} style={data&& data.complete ?{textDecoration:'line-through'} :null}>{data && data.value}</label>
                </div>
            )}
        </div>
    )
}

export default All
