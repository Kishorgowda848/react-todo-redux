import { useState } from "react";
import Create from "./createTask";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../utils/taskSclice";

const Listing = () => {

    const tasks = useSelector((state)=>state.list.items);
    const dispatch = useDispatch();

    const onSubmit = (value) => {
        // setTasks([...tasks, value]);
        dispatch(add(value));
        console.log(value);
    }


    const onRemove = (index)=>{
        dispatch(remove(index));
    }

    return <>
        <Create submit={onSubmit} />
        {tasks.map((task,index) => {
            return<div key={index} >
                <p >{task}</p> <button onClick={()=>onRemove(index)}>remove</button>
            </div>;
        })}
        <p>this is the listing page</p>
    </>
}

export default Listing;