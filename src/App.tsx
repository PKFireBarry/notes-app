import React from 'react';
import './App.css';
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import Search from "./components/Search";

function App() {

  return (
    <div className="container mx-auto py-4 ">
      <Search />
      <NoteForm />

      <NoteList />
    </div>
  );
}

export default App;
