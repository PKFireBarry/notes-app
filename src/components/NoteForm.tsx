import { FormEvent, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { firestore } from "../firebase";

import React from 'react'

function NoteForm() {
  const [content, setContent] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (content.length < 20) {
      alert("Note must be at least 20 characters long");
      return;
    }
    if (content.length > 300) {
      alert("Note must not be longer than 300 characters");
      return;
    }
    const docRef = await addDoc(collection(firestore, "notes"), {
      id: Date.now(),
      note: content,
      date: new Date(),
    });
    setContent("");
    console.log("Document written with ID: ", docRef.id,"Content:", content);
  };
  

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setContent(e.target.value);
  }


  return (
    <div>
          <form onSubmit={handleSubmit} className="mb-4">
      <div className="flex items-center mb-2">
        <label htmlFor="content" className="mr-2">
          Sticky Note:
        </label>
      </div>
        <input
          type="text"
          id="content"
          name="content"
          value={content}
          onChange={handleChange}
          className="border rounded-lg px-2 py-1"
        />
      <button type="submit" disabled={!content} className="bg-blue-500 text-white px-4 py-2 rounded">
        Save
      </button>
    </form>
    </div>
  )
}

export default NoteForm