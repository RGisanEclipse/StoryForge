import Home from "./components/Home.js";
import Login from "./components/Login.js";
import Feed from "./components/Feed.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/feed" element={<Feed/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
