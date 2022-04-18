// import React, { useState } from 'react';
// import Counter from './components/Counter';
import PostItem from './components/PostItem';

import './App.css';

function App() {
  // const [value, setValue] = useState('Текст в инпуте');

  return (
    <div className="App">
      {/* <Counter /> */}
      <PostItem post={{ id: 1, title: 'JavaScript', body: 'Description' }} />
    </div>
  );
}

export default App;
