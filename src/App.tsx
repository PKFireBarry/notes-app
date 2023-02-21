import React from 'react';
import './App.css';
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import Search from "./components/Search";
import Header from './components/Header';

function App() {

  return (
    <div className="container bg-slate-600 min-h-screen mx-auto py-4 ">
      <Header />
      <NoteForm />
      <Search />
      <NoteList />
    </div>
  );
  
}

export default App;
