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
    <div>
      {notes && notes.docs.map((note) => (
        <div key={note.id}>
          <p className='font-base text-black'>
            {note.data().note}
            <button 
            className='bg-red-500 ml-2 text-white px-4 py-2 rounded'
            onClick={() => deleteChat(note.id)}>
              Delete
            </button>
          </p>
        </div>
      ))}
    </div>
  );
}

export default NoteList;


