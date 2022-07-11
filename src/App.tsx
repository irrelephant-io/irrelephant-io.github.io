import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';

import './scss/app.scss';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />} />
      </Routes>
    </div>
  );
}

export default App;
