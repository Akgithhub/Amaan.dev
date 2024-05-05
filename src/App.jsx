import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Myexperience from "./components/Myexperience";
import Myskills from "./components/Myskills";
import Myproject from "./components/Myproject";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path={"/"} element={<Home />}></Route>
          <Route path={"/myskills"} element={<Myskills />}></Route>
          <Route path={"/myexperience"} element={<Myexperience />}></Route>
          <Route path={"/myprojects"} element={<Myproject />}></Route>
          <Route path={"/contact"} element={<Contact />}></Route>
        </Routes>
      </Router>
      {/* <Home></Home>
      <Myskills></Myskills>
      <Myexperience></Myexperience>
      <Myproject></Myproject>
      <Contact></Contact> */}
    </>
  );
}

export default App;
