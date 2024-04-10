import { Route, Routes } from 'react-router-dom';

import Main from './pages/Main';
import Team from './pages/Team';
import Essentia from './pages/Essentia';

import MainLayout from './layouts/MainLayout';

import './scss/app.scss';

function App() {
  return (
    <Routes>
        <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Main />} />
        <Route path="/team" element={<Team />} />
        <Route path="/essentia" element={<Essentia />} />
      </Route>
    </Routes>
  );
}

export default App;
