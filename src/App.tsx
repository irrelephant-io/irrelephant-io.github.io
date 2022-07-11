import { Route, Routes } from 'react-router-dom';

import Main from './pages/Main';
import Projects from './pages/Projects';
import Team from './pages/Team';

import MainLayout from './layouts/MainLayout';

import './scss/app.scss';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Main />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/team" element={<Team />} />
      </Route>
    </Routes>
  );
}

export default App;
