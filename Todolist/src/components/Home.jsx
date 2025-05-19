import { useEffect, useState } from 'react'
import axios from 'axios';
import { BsCircleFill, BsFillCheckCircleFill, BsFillTrashFill } from 'react-icons/bs';
import Create from './Create'

const Home =()=>{
    const [todos, setTodos] = useState([]);
    useEffect(()=>{
        axios.get('https://deployement-server.onrender.com/get')
        .then(result => setTodos(result.data))
        .catch(err => console.log(err))
    },[])

    const handleEdit =(id)=>{
        axios.put('https://deployement-server.onrender.com/update/'+id)
        .then(result => {
            location.reload()
        })
        .catch(err => console.log(err))
    }

    const handleDelete =(id)=>{
        axios.delete('https://deployement-server.onrender.com/delete/'+id)
        .then(result => {
            location.reload()
        })
        .catch(err => console.log(err))
    }
    return(
        <>
         <div className='home'>
            <h2>Todo - List</h2>
            <Create/>
            {
                todos.length === 0 
                ?
                <div><h3>Pas d'element ajouté</h3></div>
                :
                todos.map(todo =>(
                    <div className='task'>
                        <div className='checkbox' onClick={()=> handleEdit(todo._id)} >
                            {todo.done ?
                             <BsFillCheckCircleFill  className="icon" ></BsFillCheckCircleFill>
                            : <BsCircleFill className="icon"  />
                            }
                            <p className={todo.done ? 'line_trough' : ''} >{todo.task}</p>
                        </div>
                        <div>
                            <span><BsFillTrashFill className="icon" onClick={()=>handleDelete(todo._id)} /></span>
                        </div>
                    </div>
                ))
            }
         </div>
        </>
    )
}

export default Home