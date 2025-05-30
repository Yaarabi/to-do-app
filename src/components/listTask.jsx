
import Task from "./task"
import { useSelector, useDispatch } from "react-redux"
import { getTasks } from "../redux/action"
import { useEffect, useState } from "react"
import AddTask from "./addTask"

const ListTask = () => {

    const tasks = useSelector(state => state)
    const dispatch = useDispatch()
    const [ newTask, setNewTask ] = useState(false)

    const toAddTask = () => {
        setNewTask(true)
    }
    const hideForm = () => {
        setNewTask(false)
    }

    useEffect(()=>{
        dispatch(getTasks())
    },[dispatch])

  return (
    <main className="d-flex justify-content-evenly align-items-center flex-wrap" style={{ height:"100vh" }}>
        <button onClick={ toAddTask } className="btn btn-success position-fixed top-0 mt-5 w-50">Add Task +</button>
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
