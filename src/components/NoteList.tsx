import { collection, deleteDoc, doc, query } from '@firebase/firestore'
import React from 'react'
import { useCollection } from 'react-firebase-hooks/firestore'
import { firestore } from '../firebase'


function NoteList() {

  const [notes, loading, error] = useCollection(query(collection(firestore, 'notes')));

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const deleteChat = async (id: string) => {
    await deleteDoc(doc(firestore, 'notes', id));
  }

  return (
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4'>
  {notes && notes.docs.map((note) => (
    <div className="gap-4 mt-4 h-full w-full" key={note.id}>
      <div className="bg-yellow-200 rounded-lg h-full w-full p-4 shadow-md flex flex-col justify-between">
        <p className="font-base items-center text-black">
          {note.data().note}
        </p>
        <button 
          className="bg-red-500 text-white px-2 py-2 rounded self-end"
          onClick={() => deleteChat(note.id)}
        >
          Delete
        </button>
      </div>
    </div>
  ))}
</div>


  );
}

export default NoteList;


