import Home from "./components/Home";
import Login from "./components/Login.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/login" element={<Login/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
