import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';

import './scss/app.scss';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  );
}

export default App;
