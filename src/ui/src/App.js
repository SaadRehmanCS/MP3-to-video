import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from './components/Landing';
import Home from './components/Home';
import { HOME } from './constants/routes'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path={HOME} element={<Home />}></Route>
          <Route path="/" exact element={<Landing />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
