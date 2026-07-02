import { useState, useEffect } from "react";
import Note from "./Note";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([
    { id: 1, title: "JavaScript", body: "Closures, Functions" },
    { id: 2, title: "CSS", body: "Grid, Flexbox" },
    { id: 3, title: "React", body: "Components, Props" },
  ]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("notes", JSON.stringify(notes));
    }
  }, [notes, isLoaded]);

  function handleAddNote() {
    if (editingId) {
      const updatedNotes = notes.map((note) => {
        if (note.id === editingId) {
          return { ...note, title: title, body: body };
        }
        return note;
      });
      setNotes(updatedNotes);
      setEditingId(null);
    } else {
      const newNote = {
        id: Date.now(),
        title: title,
        body: body,
      };
      setNotes([...notes, newNote]);
    }
    setTitle("");
    setBody("");
  }

  function handleDeleteNote(id) {
    setNotes(notes.filter((note) => note.id !== id));
  }

  function handleEditNote(note) {
    setTitle(note.title);
    setBody(note.body);
    setEditingId(note.id);
  }

  return (
    <div className="app">
      <h1>My Notes</h1>
      <div className="note-form">
        <input
          className="note-input"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="note-textarea"
          placeholder="Write your note..."
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

        <button className="add-btn" onClick={handleAddNote}>
          {editingId ? "Save Changes" : "Add Note"}
        </button>
      </div>
      <div className="notes-container">
        {notes.map((note) => (
          <Note
            key={note.id}
            title={note.title}
            body={note.body}
            onDelete={() => handleDeleteNote(note.id)}
            onEdit={() => handleEditNote(note)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
