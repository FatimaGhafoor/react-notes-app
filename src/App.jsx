import Note from "./Note";
function App() {
  const notes = [
    { id: 1, title: "JavaScript", body: "Closures, Function," },
    { id: 2, title: "CSS", body: "Grid, Flexbox" },
    { id: 3, title: "React", body: "Components, Props" },
  ];

  return (
    <div>
      <h1>My Notes</h1>
      {notes.map((note) => (
        <Note key={note.id} title={note.title} body={note.body} />
      ))}
    </div>
  );
}

export default App;
