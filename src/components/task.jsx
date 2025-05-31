import { useEffect, useState } from "react"
import { FaEdit } from "react-icons/fa"
import { FaDeleteLeft } from "react-icons/fa6"
import { useDispatch } from "react-redux"
import { deleteTask, update } from "../redux/action"
import { SiTrueup } from "react-icons/si"


const Task = (props) => {

    const [ done, setDone ] = useState(false)
    const [ color, setColor ] = useState("white")
    const [ toUpdate, setToUpdate ] = useState(false)
    const [ editDescription, setDescription ] = useState(props.description)

    const dispatch = useDispatch()

    useEffect(()=>{
        setDone(props.isDone)
        if(props.isDone){
            setColor("green")
        }
    },[props.isDone])

    const handlDone = () => {

            const newDoneState = !done; 
            setDone(newDoneState);
            setColor(newDoneState ? "green" : "white");

            dispatch(update({
                id: props.id,
                description: editDescription,
                isDone: newDoneState 
            }))
        
    }

    const remove = () => {
        console.log(props.id)
        dispatch(deleteTask(props.id))
    }

    const handUpdate = () => {
        dispatch(update({
            id: props.id,
            description: editDescription,
            isDone: done 
        }))
    }

return (
    <article className="card w-25 h-50">
        <div className="card-header">
            <h2> { props.id } </h2>
            <FaEdit onClick={()=> setToUpdate(true) } size={20}/>
            <FaDeleteLeft onClick={remove} className="ms-3" size={20}/>
        </div>
        <div className="card-body">
        { !toUpdate && <p>
            { editDescription }
        </p>}
        { toUpdate && <textarea className="form-control h-75"
        value={editDescription}
        onChange={(e)=> setDescription(e.target.value) }
        ></textarea>}
        { toUpdate && <button onClick={()=> { setToUpdate(false); handUpdate()}} className="btn btn-primary">Up date</button>}
        </div>
        <button onClick={ ()=>{  handlDone()  }} className="btn" style={{ backgroundColor: color }}> { (done)? "Done": "Not yet" } </button>
    </article>
)
}

export default Task
