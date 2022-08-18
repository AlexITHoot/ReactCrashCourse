function Todo(props) {

    return(
        <div className="card p-3 mb-3">
            <h2>{props.text}</h2>
            <div className="action">
                <button className="btn btn-primary" onClick={props.click}>Delete</button>
            </div>       
        </div>
    )
}

export default Todo;