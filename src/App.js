import { Outlet } from 'react-router-dom';
import { NavBar } from './components';

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
