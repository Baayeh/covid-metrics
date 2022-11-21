import { Outlet, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {
        location.pathname !== '/' ? (<NavBar />) : null
      }
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
