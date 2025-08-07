import { useState } from "react"

const Create = ({submit})=>{
    const [task,setTask] = useState();

    const handelSubmit = ()=>{
        submit(task);
    }
    
    return <>
      <input type="text" placeholder="Add Task" onChange={(e)=>{setTask(e.target.value)}}/>
      <button onClick={handelSubmit}>Add</button>
    </>
}

export default Create;