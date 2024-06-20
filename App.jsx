import React from 'react';
import  { useState } from 'react';

export function App(props) {
  const [searchTerm, setSearchTerm] = useState('');
  const data = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com' },
    { id: 4, name: 'Alice Williams', email: 'alice@example.com' },
  ];

  const highlightText = (text, term) => {
    const regex = new RegExp(`(${term})`, 'gi');
    return text.replace(regex, '<span style="color: yellow;">$1</span>');
  };

  const filteredData = data.filter((item) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );
  return (
    <div className='App'>
      <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {filteredData.map((item) => (
        <div key={item.id}>
          <h3
            dangerouslySetInnerHTML={{
              __html: highlightText(item.name, searchTerm),
            }}
          />
          <p
            dangerouslySetInnerHTML={{
              __html: highlightText(item.email, searchTerm),
            }}
          />
        </div>
      ))}
    </div>
    </div>
  );
}
