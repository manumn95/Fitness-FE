import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landingpage from "./Components/Landingpage";
import Users from "./Components/Users";
import Goals from "./Components/Goals";
import Home from "./Components/Home";
import Dietplan from "./Components/Dietplan";
import Activities from "./Components/Activities";
import Underweight from "./Components/Underweight";
import Normalweight from "./Components/Normalweight";
import Overweight from "./Components/Overweight";
import Obese from "./Components/Obese";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage></Landingpage>}></Route>
        <Route path="/login" element={<Users></Users>}>
          <Route index element={<Home></Home>}></Route>
          <Route path="home" element={<Home></Home>}></Route>
          <Route path="goal" element={<Goals></Goals>}></Route>
          <Route path="diet" element={<Dietplan></Dietplan>}></Route>

          <Route path="activities" element={<Activities></Activities>}></Route>
        </Route>

        <Route path="/underweight" element={<Underweight></Underweight>}></Route>
        <Route path='/normalweight' element={<Normalweight></Normalweight>}></Route>
        <Route path='/overweight' element={<Overweight></Overweight>}></Route>
        <Route path="/obese" element={<Obese></Obese>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
