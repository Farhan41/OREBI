import Navbar from "./components/layout/Navbar"
import RootLayout from "./components/layout/RootLayout";
import Home from "./pages/Home";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

let router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home/>}></Route>
    </Route>
  )
);

function App() {

  

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
