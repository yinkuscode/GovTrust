import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Signup from "./pages/Signup";
import Contains from "./pages/Contains";
import Home from "./pages/Home";
import Uploadata from "./pages/Uploadata";
import Blogs from "./pages/blogs";
import Volunteer from "./pages/Volunteer";
import Data from "./pages/Data";

function App() {
  return (
    <>     
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contains" element={<Contains />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/uploadata" element={<Uploadata />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path ="/volunteer" element={<Volunteer />} />
          <Route path="/data" element={<Data />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
