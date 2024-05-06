import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landingpage from "./Components/Landingpage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landingpage></Landingpage>,
    },
  ]);
  return (
    <RouterProvider router={router}>
      <Landingpage></Landingpage>
    </RouterProvider>
  );
}

export default App;
