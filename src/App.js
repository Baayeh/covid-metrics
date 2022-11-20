import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
