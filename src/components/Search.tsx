import React, { useState, useEffect } from 'react';
import { collection, query, where, getDocs } from '@firebase/firestore';
import { firestore } from '../firebase';

function Search() {
  // map through the notes and filter them based on the search term
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<any>([]);

  const searchNotes = async (term: string) => {
    if (term) {
      const q = query(collection(firestore, 'notes'), where('note', '>=', term), where('note', '<=', term + '\uf8ff'));
      const querySnapshot = await getDocs(q);
      var data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setResults(data);
    } else {
      setResults([]);
    }
  }

  useEffect(() => {
    searchNotes(searchTerm);
  }, [searchTerm])

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value);
  }



  return (
    <div className='bg-yellow-200 border-b-4 border-yellow-300 rounded-md p-4 mt-4'>
<form onSubmit={(e) => { e.preventDefault(); searchNotes(searchTerm) }} className="mb-4">
  <div className="flex items-center mb-2">
    <label htmlFor="content" className="mr-2">
      Search Notes:
      {/*say that search is case sensitive*/}
      <p>
        <small className="text-gray-500">Search is case sensitive</small>
      </p>
    </label>
  </div>
  <input
    type="text"
    id="content"
    name="content"
    value={searchTerm}
    onChange={handleChange}
    className="border rounded-lg px-2 py-1 w-full"
  />
  <button type="submit" disabled={!searchTerm} hidden className="bg-blue-500 text-white px-4 py-2 rounded">
    Search
  </button>
</form>

{results.length > 0 && (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
    {results.map((result: { id: string; note: string }) => (
      <div key={result.id} className="bg-yellow-200 rounded-lg h-[300] w-[300] p-4 shadow-md">
        <p className="font-base text-lg">{result.note}</p>
      </div>
    ))}
  </div>
)}


    </div>
  );
}

export default Search;
