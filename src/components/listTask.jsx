
import Task from "./task"
import { useSelector, useDispatch } from "react-redux"
import { getTasks } from "../redux/action"
import { useEffect, useState } from "react"
import AddTask from "./addTask"

const ListTask = () => {

    const data = useSelector(state => state);
    const dispatch = useDispatch()
    const [ newTask, setNewTask ] = useState(false)
    const [ filterTasks, setFilter ] = useState(0)

    const toAddTask = () => {
        setNewTask(true)
    }
    const hideForm = () => {
        setNewTask(false)
    }

    useEffect(()=>{
        dispatch(getTasks())
    },[dispatch])

    const tasks = filterTasks == 1
    ? data.filter((ele) => ele.isDone)
    : filterTasks == 2
    ? data.filter((ele) => !ele.isDone)
    : data;


  return (
    <main className="d-flex justify-content-evenly align-items-center flex-wrap" style={{ height:"100vh" }}>
        <div className="position-fixed top-0 w-100 d-flex justify-content-around align-items-center">
        <button onClick={ toAddTask } className="btn btn-success mt-5 w-50">Add Task +</button>
        <select className="form-control w-25 h-50"
            value={filterTasks}
            onChange={(e)=>setFilter(Number(e.target.value))}
        >
            <option value={ 0 }>All</option>
            <option value={ 1 }>Done</option>
            <option value={ 2 }>Not</option>
        </select>
        </div>
        { newTask && <AddTask fun = { hideForm }/> }
        {tasks?.length > 0 ? (
                tasks.map((ele, i) => (
                        <Task key={i} id={ele?.id} description={ele?.description} isDone={ele?.isDone} />
                    ))
        ) : (
                        <p>No tasks found.</p>
)}

    </main>
  )
}

export default ListTask
