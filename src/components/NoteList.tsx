import { collection, query } from '@firebase/firestore'
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

  return (
    <div>
      {notes && notes.docs.map((note) => (
        <div key={note.id}>
          <p>{note.data().note}</p>
        </div>
      ))}
    </div>
  );
}

export default NoteList;

