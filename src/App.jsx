import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import OverviewPage from './pages/OverviewPage';
import ImplementationPage from './pages/ImplementationPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<OverviewPage />} />
          <Route path="/implementation" element={<ImplementationPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
