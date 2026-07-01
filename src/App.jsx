import { useState, useEffect } from "react";
import Note from "./Note";

function App() {
  const [notes, setNotes] = useState([
    { id: 1, title: "JavaScript", body: "Closures, Functions" },
    { id: 2, title: "CSS", body: "Grid, Flexbox" },
    { id: 3, title: "React", body: "Components, Props" },
  ]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
    setIsLoaded(true); // loading complete
  }, []);

  useEffect(() => {
    if (isLoaded) {
      // sirf load hone ke baad save karo
      localStorage.setItem("notes", JSON.stringify(notes));
    }
  }, [notes, isLoaded]);

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
  function handleDeleteNote(id) {
    setNotes(notes.filter((note) => note.id !== id));
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
        <Note
          key={note.id}
          title={note.title}
          body={note.body}
          onDelete={() => handleDeleteNote(note.id)}
        />
      ))}
    </div>
  );
}

export default App;
