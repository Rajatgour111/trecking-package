
import HomePage from "./Components/HomePage";
import TrackingPackage from "./Components/TrackingPackage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/TP' element={<TrackingPackage />} />

      </Routes>

    </Router>
  );
}

export default App;
