import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import Feed from "./components/Feed.jsx";
import Post from "./components/Post.jsx";
import FeedHome from "./components/helpers/FeedHome.jsx";
import Create from "./components/helpers/Create.jsx";
import "react-image-crop/dist/ReactCrop.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./components/helpers/Profile.jsx";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route element={<Feed/>}>
            <Route exact path="/feed" element={<FeedHome/>}/>
            <Route exact path="/post" element={<Post/>}/>
            <Route exact path="/create" element={<Create/>}/>
            <Route exact path="/profile" element={<Profile/>}/>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
