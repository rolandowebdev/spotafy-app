import { Routes, Route } from 'react-router-dom';

import { Discover } from './pages';

function App() {
  return (
    <div className="relative flex">
      <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#121286]">
        <div className="px6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-40">
            <Routes>
              <Route path="/" element={<Discover />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
