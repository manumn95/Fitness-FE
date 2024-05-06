import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landingpage from "./Components/Landingpage";
import Users from "./Components/Users";
import Goals from "./Components/Goals";
import Home from "./Components/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage></Landingpage>}></Route>
        <Route path="/login" element={<Users></Users>}>
          <Route index element={<Home></Home>}></Route>
          <Route path="home" element={<Goals></Goals>}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
