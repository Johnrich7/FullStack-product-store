import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import HomePage from './HomePage';
import CreatePage from './CreatePage';


function App() {

  return (
    <div>
      <Router basename='/'>
      <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage  />} />
          <Route path="/edit/:id" element={<CreatePage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
