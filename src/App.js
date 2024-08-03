import "./App.css";
import Header from "./Components/Header.js";
import Body from "./Components/Body.js";
import Footer from "./Components/Footer.js";
import { createBrowserRouter, Outlet } from "react-router-dom";

function App() {
  return (
    <div >
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Body></Body>,
      },
      {
        path: "/home",
        element:<Body></Body>
      }
      
    ],

  },
]);
export default appRouter;
