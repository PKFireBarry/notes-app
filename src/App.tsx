import React from 'react';
import './App.css';
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import Search from "./components/Search";
import Header from './components/Header';

function App() {

  return (
    <div className=" bg-slate-700 min-h-screen mx-auto pl-5 pr-5" style={{width: "100vw"}}>
      <Header />
      <NoteForm />
      <Search />
      <NoteList />
    </div>
  );
  
}

export default App;
