import { useState } from "react";
import Note from "./Note";

function App() {
  const [notes, setNotes] = useState([
    { id: 1, title: "JavaScript", body: "Closures, Functions" },
    { id: 2, title: "CSS", body: "Grid, Flexbox" },
    { id: 3, title: "React", body: "Components, Props" },
  ]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  function handleAddNote() {
    const newNote = {
      id: Date.now(),
      title: title,
      body: body,
    };
    setNotes([...notes, newNote]);
    setTitle("");
    setBody("");
  }

  return (
    <div>
      <h1>My Notes</h1>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Write your note..."
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />

      <button onClick={handleAddNote}>Add Note</button>
      {notes.map((note) => (
        <Note key={note.id} title={note.title} body={note.body} />
      ))}
    </div>
  );
}

export default App;
