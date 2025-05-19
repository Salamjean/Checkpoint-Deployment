import { useState } from 'react'
import axios from 'axios'

const Create =()=>{
  const [task, setTask] = useState();
  const handleAdd =()=>{
     axios.post('https://deployement-server.onrender.com/add', {task: task})
     .then(result => {
      location.reload()
     })
     .catch(err => console.log(err))
  }
    return(
        <>
         <div className='create_form'>
           <input type="text" placeholder='Entrez la tâche' onChange={(e)=>setTask(e.target.value)} />
           <button type="button" onClick={handleAdd}>Ajouter</button>
         </div>
        </>
    )
}

export default Create