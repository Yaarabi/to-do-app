


const Task = (props) => {
return (
    <article className="card w-25 h-50">
        <h2 className="card-header"> { props.id } </h2>
        <p className="card-body">
            { props.description }
        </p>
        <button className="btn"> { (props.isDone)? "Done": "Not yet" } </button>
    </article>
)
}

export default Task
