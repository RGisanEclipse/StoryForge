import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import Feed from "./components/Feed.jsx";
import FeedHome from "./components/helpers/FeedHome.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route element={<Feed/>}>
            <Route exact path="/feed" element={<FeedHome/>}/>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
