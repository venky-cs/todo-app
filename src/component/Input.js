import React,{useState} from 'react'

function Input() {
    const [text,setText] =useState('')
    const [list, setList] = useState([])
    return (
        <div className='input'>
            <input type="text" placeholder="add details" onChange={createText} value={text}/>
            <button onClick={updateList}>Add</button>

            {list.map((list)=> <li key={list.id}>{list.value}</li>)}
        </div>
    )

    function createText(e) {
        setText(e.target.value)
    }
    function updateList(){
        console.log("List",list,"Text",text)
        setList( [...list,{
            id:list.length,
            value: text
        }]);
        setText('')
        console.log("List",list,"Text",text)
    }
}

export default Input
