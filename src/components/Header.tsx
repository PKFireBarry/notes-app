import React from 'react';

function Header() {
  return (
    <header className="bg-yellow-200 py-4">
      <h1 className="text-4xl font-bold rounded-t-lg text-center">Sticky Notes App</h1>
      <h1
      className='text-2xl font-bold rounded-t-lg pt-2 text-center'
      >
        <a
        className='text-slate-500 hover:text-blue-700 hover:underline'
        href='https://github.com/PKFireBarry/notes-app'
        >Github</a>
      </h1>
    </header>
  );
}

export default Header;
