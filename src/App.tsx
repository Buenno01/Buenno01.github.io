import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout';

function App() {
  return (
    <div
      className="flex flex-col min-h-screen
    bg-white text-zinc-700
    dark:bg-zinc-800 dark:text-zinc-50"
    >
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route index element={ <Home /> } />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
