import { Route, Routes } from 'react-router-dom';

import Main from './pages/Main';
import Team from './pages/Team';
import Essentia from './pages/Essentia';

import MainLayout from './layouts/MainLayout';

import './scss/app.scss';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
        <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Main />} />
        <Route path="/team" element={<Team />} />
        <Route path="/essentia" element={<Essentia />} />
        <Route path="*" element={<NotFound />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
