import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar.js';
import Create from './components/Create.js';
import Getting from './components/Getting.js';
import List from './components/Listing.js';
import Updating from './components/Update.js';
import Delete from './components/Delete.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/create" element={<Create />} />
          <Route path="/getting" element={<Getting />} />
          <Route path="/updating" element={<Updating />} />
          <Route path="/delete" element={<Delete />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;