import { Outlet, useLocation } from 'react-router-dom';
import { NavBar } from './components';

function App() {
  const location = useLocation();
  return (
    <div className="App md:flex md:relative">
      {location.pathname !== '/' ? <NavBar /> : null}
      {location.pathname === '/' ? (
        <main className="w-full">
          <Outlet />
        </main>
      ) : (
        <main className="md:w-[70%] xl:w-[80%] md:ml-[30%] xl:ml-[20%]">
          <Outlet />
        </main>
      )}
    </div>
  );
}

export default App;
