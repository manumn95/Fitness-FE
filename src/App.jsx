import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landingpage from "./Components/Landingpage";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landingpage></Landingpage>,
    },
    {
      path: "/Signup",
      element: <Signup></Signup>,
    },
    {
      path: "/login",
      element: <Login></Login>,
    },
  ]);
  return (
    <RouterProvider router={router}>
      <Landingpage></Landingpage>
    </RouterProvider>
  );
}

export default App;
