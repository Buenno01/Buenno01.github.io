import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './main.css';
import ScrollToAnchor from './util/ScrollToAnchor';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ScrollToAnchor />
    <App />
  </BrowserRouter>,
);
