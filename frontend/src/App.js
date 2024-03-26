import "./App.css";
import Home from "./Components/Home";
import Blog from "./Components/Blog";
import Group from "./Components/Group";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/groupData" element={<Group />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
