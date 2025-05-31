import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTask } from "../redux/action"



const AddTask = (props) => {

    // const tasks = useSelector(state => state)
    const dispatch = useDispatch()

    const [ description, setDescription ] = useState('')

    const add = () => {
        console.log(description)
        if(description!=="") { 
            dispatch(addTask({
                id:3,
                description,
                isDone: false
            }) )
        }
    }

    return (
    <div className="container card h-50 w-50 position-absolute d-flex flex-column justify-content-evenly" style={{ zIndex: 1 }}>
        <textarea name="description"
        className="form-control h-50"
        value={ description }
        onChange={ (e) => setDescription(e.target.value) }
        ></textarea>
        <button onClick={()=>{ add(); props.fun() }} className="btn btn-success">Add +</button>
    </div>
)
}

export default AddTask
