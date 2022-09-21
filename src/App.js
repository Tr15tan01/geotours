import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage';
import AdminPage from './pages/AdminPage';
import Dashboard from './pages/Dashboard';


function App() {
  return (
    < >
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route path="/admincms" element={<AdminPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;
