import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  Home  from "./pages/Home.jsx";
import  Cocinalo from "./pages/Cocinalo.jsx";

function App() {
  return (
    <Router>
        <Routes>
          
          {/* Home Display */}
          <Route path="/" element={<Home/>}/>

          {/* Cocinalo Display */}
          <Route path="/cocinalo" element={<Cocinalo/>}/>

        </Routes>
      </Router>
  );
}

export default App;
