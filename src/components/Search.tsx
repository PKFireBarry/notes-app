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
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
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
    <div>
      <form onSubmit={(e) => { e.preventDefault(); searchNotes(searchTerm) }} className="mb-4">
        <div className="flex items-center mb-2">
          <label htmlFor="content" className="mr-2">
            Search Notes:
          </label>
        </div>
          <input
            type="text"
            id="content"
            name="content"
            value={searchTerm}
            onChange={handleChange}
            className="border rounded-lg px-2 py-1"
          />
          <button type="submit" disabled={!searchTerm} className="bg-blue-500 text-white px-4 py-2 rounded">
            Search
          </button>
      </form>
      {results.length > 0 && (
        <div>
          <div className='font-base text-black'>
            {results.map((result: { id: React.Key | null | undefined; note: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => (
              <div key={result.id}>
                <p>{result.note}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
