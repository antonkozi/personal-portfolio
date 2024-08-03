import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import NotFoundPage from "./Pages/NotFoundPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ParticlesComponent from "./Components/ParticlesBackground";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

function App() {
  return (
    <div className="App">
      <ParticlesComponent id="particles" />
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
