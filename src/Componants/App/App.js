import "./App.css";
import MasterLayout from "../MasterLayout/MasterLayout.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import Login from "../Login/Login";
import Movies from "../Movies/Movies";
import People from "../People/People";
import Register from "../Register/Register";
import Tvshows from "../Tvshows/Tvshows";
import NotFound from "../NotFound/NotFound";

function App() {
  let routes = createBrowserRouter([
    {
      path: "",
      element: <MasterLayout />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "login", element: <Login /> },
        { path: "movies", element: <Movies /> },
        { path: "people", element: <People /> },
        { path: "register", element: <Register /> },
        { path: "tvshows", element: <Tvshows /> },
      ],
    },
  ]);
  return (
    <>
      <div>
        <RouterProvider router={routes}></RouterProvider>
      </div>
    </>
  );
}

export default App;
