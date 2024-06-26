import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import Feed from "./components/Feed.jsx";
import FeedHome from "./components/helpers/FeedHome.jsx";
import Create from "./components/helpers/Create.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./components/helpers/Profile.jsx";
import Explore from "./components/helpers/Explore.jsx";
import Saved from "./components/helpers/Saved.jsx";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route element={<Feed />}>
            <Route exact path="/feed" element={<FeedHome />} />
            <Route exact path="/create" element={<Create />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/explore" element={<Explore />} />
            <Route exact path="/saved" element={<Saved />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
