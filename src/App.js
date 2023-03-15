import Menu from './components/Menu/Menu';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main.jsx';
import Analitics from './pages/Analitics/Analitics.jsx';
import Table from './pages/Table/Table.jsx';
import Settings from './pages/Settings/Settings.jsx';

function App() {
  return (
    <div className='App'>
      <Menu />
      <Routes>
        <Route
          path='/'
          element={<Main />}
        />
        <Route
          path='/analitics'
          element={<Analitics />}
        />
        <Route
          path='/table'
          element={<Table />}
        />
        <Route
          path='/settings'
          element={<Settings />}
        />
      </Routes>
    </div>
  );
}

export default App;
