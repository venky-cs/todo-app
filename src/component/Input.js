import React,{useState} from 'react'
import List from './List'

function Input() {
    let data=JSON.parse(localStorage.getItem('todo')) || []
    console.log("todos.....",data);
    const [text,setText] =useState('')
    const [list, setList] = useState([])
    const [todo,setTodo]=useState(data);


    return (
        <div className='input'>
            <input type="text" placeholder="add details" onChange={createText} value={text} 
                onKeyPress={(e) => (e.key === 'Enter' ? text.length >= 1 ? updateList() : null : null)}/>
            <button onClick={text.length >=1 ? updateList : null}>Add</button>

        </div>
    )

    function createText(e) {
        setText(e.target.value)
    }
    function updateList(){
        // console.log("List",list,"Text",text)
        setList( [...list,{
            id:list.length,
            value: text,
            complete:false
        }]);
        localStorage.setItem("todo", JSON.stringify([...data,{id:list.length,value:text,complete:false}]))
        
        let lists = localStorage.getItem("todo")
        let parseList = JSON.parse(lists)
        console.log(parseList)

        setTodo([...data, todo.push({ id: parseList.length, value: parseList.value })])
        setText('')
    }

    function setComplete(){

    }
}

export default Input
