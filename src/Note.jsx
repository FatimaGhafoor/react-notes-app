function Note(props) {
  return (
    <div className="note-card">
      <h3>{props.title}</h3>
      <p>{props.body}</p>
      <div className="note-buttons">
        <button className="delete-btn" onClick={props.onDelete}>
          Delete
        </button>
        <button className="edit-btn" onClick={props.onEdit}>
          Edit
        </button>
      </div>
    </div>
  );
}

export default Note;
