function Note(props){
    return(
        <div>
            <h1>{props.title}</h1>
            <p>{props.body}</p>
            <button onClick={props.onDelete}>Delete</button>
        </div>
    );
}

export default Note;