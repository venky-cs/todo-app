import React,{useState} from 'react'
import List from './List'

function Input() {
    const [text,setText] =useState('')
    const [list, setList] = useState([])
    return (
        <div className='input'>
            <input type="text" placeholder="add details" onChange={createText} value={text} 
                onKeyPress={(e) => (e.key === 'Enter' ? text.length >= 1 ? updateList() : null : null)}/>
            <button onClick={text.length >=1 ? updateList : null}>Add</button>

            {list.map((list)=> <List list={list}/>)}
        </div>
    )

    function createText(e) {
        setText(e.target.value)
    }
    function updateList(){
        // console.log("List",list,"Text",text)
        setList( [...list,{
            id:list.length,
            value: text
        }]);
        setText('')
    }
}

export default Input
