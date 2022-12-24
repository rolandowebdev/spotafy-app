import { Routes, Route } from 'react-router-dom';

import { Discover } from './pages';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Discover />} />
      </Routes>
    </div>
  );
}

export default App;
