import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landingpage from "./Components/Landingpage";

import { useState } from "react";
import Dashboard from "./Components/Dashboard";
import Workout from "./Components/Workout";

function App() {
  const [user, setUser] = useState(true);
  return (
    <Router>
      {!user ? (
        <div>
          <Landingpage></Landingpage>
        </div>
      ) : (
        <div>
          <Routes>
            <Route path="/" element={<Dashboard></Dashboard>}></Route>
            <Route path="/workouts" exact element={<Workout></Workout>}></Route>
          </Routes>
        </div>
      )}
    </Router>
  );
}

export default App;
